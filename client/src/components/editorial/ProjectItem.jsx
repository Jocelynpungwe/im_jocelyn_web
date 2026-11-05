import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { imageProps, siteHost } from '../../data/projects.js'
import { Media, Reveal } from './Motion.jsx'
import { finePointer, prefersReducedMotion } from './motion.js'

/* The layout slots a project can sit in. Each one has its own proportion and
   column position (see .ed-slot-* in editorial.css), so a grid of projects is
   never a row of identical cards. */
export const SLOTS = {
  feature: { ratio: '21 / 9', bar: true, sizes: '100vw' },
  wideL: { ratio: '16 / 10', bar: true, sizes: '(min-width: 900px) 58vw, 100vw' },
  wideR: { ratio: '16 / 10', bar: true, sizes: '(min-width: 900px) 50vw, 100vw' },
  tallR: { ratio: '4 / 5', bar: false, sizes: '(min-width: 900px) 33vw, 100vw' },
  tallL: { ratio: '4 / 5', bar: false, sizes: '(min-width: 900px) 33vw, 100vw' },
  halfL: { ratio: '4 / 3', bar: true, sizes: '(min-width: 900px) 42vw, 100vw' },
  halfR: { ratio: '4 / 3', bar: true, sizes: '(min-width: 900px) 50vw, 100vw' },
}

// Slots used in turn, whatever number of projects is being shown.
export const SLOT_PATTERN = [
  'feature',
  'wideL',
  'tallR',
  'tallL',
  'wideR',
  'halfL',
  'halfR',
]

/* A "View" label that follows the pointer over a project, eased so it trails
   slightly. Only on devices with a real pointer, never with reduced motion. */
function useFollowCursor() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || !finePointer() || prefersReducedMotion()) return undefined

    const pos = { x: 0, y: 0, tx: 0, ty: 0 }
    let frame = 0

    const tick = () => {
      pos.x += (pos.tx - pos.x) * 0.2
      pos.y += (pos.ty - pos.y) * 0.2
      node.style.setProperty('--cx', `${pos.x.toFixed(1)}px`)
      node.style.setProperty('--cy', `${pos.y.toFixed(1)}px`)
      const settled = Math.abs(pos.tx - pos.x) < 0.3 && Math.abs(pos.ty - pos.y) < 0.3
      frame = settled ? 0 : requestAnimationFrame(tick)
    }

    const move = (event) => {
      const rect = node.getBoundingClientRect()
      pos.tx = event.clientX - rect.left
      pos.ty = event.clientY - rect.top

      // on entry, appear exactly under the pointer instead of easing in from a corner
      if (node.dataset.active !== 'true') {
        pos.x = pos.tx
        pos.y = pos.ty
        node.style.setProperty('--cx', `${pos.x.toFixed(1)}px`)
        node.style.setProperty('--cy', `${pos.y.toFixed(1)}px`)
        node.dataset.active = 'true'
      }
      if (!frame) frame = requestAnimationFrame(tick)
    }

    const leave = () => {
      node.dataset.active = 'false'
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

export default function ProjectItem({ project, slot = 'wideL', index = 0, delay = 0 }) {
  const layout = SLOTS[slot] || SLOTS.wideL
  const mediaRef = useFollowCursor()
  const to = `/work/${project.slug}`

  return (
    <Reveal
      as="article"
      delay={delay}
      className={`ed-pi ed-slot-${slot}`}
      style={{ '--ratio': layout.ratio }}
    >
      <div ref={mediaRef} className="ed-pi-media">
        {/* the title link below is the keyboard and screen-reader route */}
        <Link to={to} className="ed-pi-hit" tabIndex={-1} aria-hidden="true" />

        <figure className={`ed-frame${layout.bar ? '' : ' ed-frame--bare'}`}>
          {layout.bar && (
            <div className="ed-frame-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>{siteHost(project.link)}</span>
            </div>
          )}

          <Media className="ed-frame-view">
            <img
              {...imageProps(project.image)}
              sizes={layout.sizes}
              alt={`${project.title} homepage preview`}
              style={{ objectPosition: project.focus }}
              loading="lazy"
              decoding="async"
            />
          </Media>
        </figure>

        <span className="ed-cursor" aria-hidden="true">
          <span>View</span>
        </span>
        <span className="ed-pi-num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="ed-pi-info">
        <p className="ed-pi-meta">
          <span>{project.category}</span>
          <span>{project.stack.join(' · ')}</span>
        </p>

        <h3 className="ed-pi-title">
          <Link to={to}>{project.title}</Link>
        </h3>

        <p className="ed-pi-desc">{project.description}</p>

        <div className="ed-pi-links">
          <Link to={to} className="ed-link">
            Case study <ArrowUpRight size={14} strokeWidth={1.8} />
          </Link>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ed-link ed-link--dim"
          >
            Live site <ArrowUpRight size={14} strokeWidth={1.8} />
            <span className="ed-sr"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </Reveal>
  )
}
