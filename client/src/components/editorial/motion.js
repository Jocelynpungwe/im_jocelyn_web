import { useEffect, useRef, useState } from 'react'

/* =========================================================
   MOTION HELPERS
   No animation library: CSS does the drawing, these hooks only decide
   *when* (in view) and *how far* (scroll progress). Everything is skipped
   when the visitor prefers reduced motion.
========================================================= */

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const finePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value))

/* ---------- one shared scroll loop for every scroll-linked effect ---------- */

const subscribers = new Set()
let scheduled = false

const flush = () => {
  scheduled = false
  subscribers.forEach((run) => run())
}

const schedule = () => {
  if (scheduled) return
  scheduled = true
  requestAnimationFrame(flush)
}

function subscribe(run) {
  if (subscribers.size === 0) {
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
  }
  subscribers.add(run)
  run()

  return () => {
    subscribers.delete(run)
    if (subscribers.size === 0) {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }
}

/* ---------- true once the element has scrolled into view ---------- */

export function useInView({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
} = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return [ref, inView]
}

/* ---------- writes a 0..1 CSS variable while the element crosses the screen ----------
   `enter`: viewport height fraction where the element's top starts the effect
   `exit`:  viewport height fraction where its bottom completes it            */

export function useScrollProgress({ name = '--p', enter = 0.85, exit = 0.45 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (prefersReducedMotion()) {
      node.style.setProperty(name, '1')
      return undefined
    }

    let stop = null
    const update = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight
      const total = vh * (enter - exit) + rect.height
      node.style.setProperty(name, clamp((vh * enter - rect.top) / total).toFixed(4))
    }

    // only listen to scroll while the element is near the screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !stop) stop = subscribe(update)
        if (!entry.isIntersecting && stop) {
          stop()
          stop = null
          update()
        }
      },
      { rootMargin: '25% 0px 25% 0px' },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      if (stop) stop()
    }
  }, [name, enter, exit])

  return ref
}

/* ---------- writes --py (-1 .. 1) for gentle parallax ---------- */

export function useParallax() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReducedMotion()) return undefined

    let stop = null
    const update = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight
      const centre = rect.top + rect.height / 2
      node.style.setProperty('--py', clamp((centre - vh / 2) / vh, -1, 1).toFixed(4))
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !stop) stop = subscribe(update)
        if (!entry.isIntersecting && stop) {
          stop()
          stop = null
        }
      },
      { rootMargin: '10% 0px 10% 0px' },
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      if (stop) stop()
    }
  }, [])

  return ref
}

/* ---------- writes --mx / --my (-1 .. 1) from the pointer over the element, eased ----------
   Used to nudge layered images by different amounts. Fine pointers only. */

export function usePointerParallax() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || !finePointer() || prefersReducedMotion()) return undefined

    const pos = { x: 0, y: 0, tx: 0, ty: 0 }
    let frame = 0

    const tick = () => {
      pos.x += (pos.tx - pos.x) * 0.1
      pos.y += (pos.ty - pos.y) * 0.1
      node.style.setProperty('--mx', pos.x.toFixed(3))
      node.style.setProperty('--my', pos.y.toFixed(3))
      const settled = Math.abs(pos.tx - pos.x) < 0.002 && Math.abs(pos.ty - pos.y) < 0.002
      frame = settled ? 0 : requestAnimationFrame(tick)
    }

    const start = () => {
      if (!frame) frame = requestAnimationFrame(tick)
    }

    const move = (event) => {
      const rect = node.getBoundingClientRect()
      pos.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2
      pos.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2
      start()
    }

    const leave = () => {
      pos.tx = 0
      pos.ty = 0
      start()
    }

    node.addEventListener('pointermove', move)
    node.addEventListener('pointerleave', leave)

    return () => {
      node.removeEventListener('pointermove', move)
      node.removeEventListener('pointerleave', leave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}
