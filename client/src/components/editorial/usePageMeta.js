import { useEffect } from 'react'

/* Sets the tab title and meta description for a page, and puts the previous
   ones back when the visitor leaves it. */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const previousTitle = document.title
    const meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta ? meta.getAttribute('content') : null

    if (title) document.title = title
    if (meta && description) meta.setAttribute('content', description)

    return () => {
      document.title = previousTitle
      if (meta && previousDescription !== null) {
        meta.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}
