import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Scrolls to the top on every page change, or to the element named in the URL
   hash (for links like /services#seo) once the new page has rendered. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      return undefined
    }

    const id = decodeURIComponent(hash.slice(1))
    let timer = 0
    let attempts = 0

    const scrollToTarget = () => {
      const target = document.getElementById(id)

      if (target) {
        target.scrollIntoView({ block: 'start', behavior: 'instant' })
        return
      }

      // the page may need a moment to mount
      attempts += 1
      if (attempts < 15) timer = window.setTimeout(scrollToTarget, 40)
    }

    timer = window.setTimeout(scrollToTarget, 0)

    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}
