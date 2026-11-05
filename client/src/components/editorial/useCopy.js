import { useEffect, useRef, useState } from 'react'

// The older copy command, for browsers or pages where the Clipboard API is
// missing or refuses (non-secure pages, embedded frames, denied permission).
function legacyCopy(text) {
  const field = document.createElement('textarea')
  field.value = text
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.opacity = '0'
  document.body.appendChild(field)
  field.select()

  try {
    if (!document.execCommand('copy')) throw new Error('copy failed')
  } finally {
    document.body.removeChild(field)
  }
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text)
      return
    } catch {
      // fall through to the older method
    }
  }

  legacyCopy(text)
}

/* Copies `text` and reports idle | copied | failed, going back to idle after a moment. */
export default function useCopy(text) {
  const [state, setState] = useState('idle')
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await copyText(text)
      setState('copied')
    } catch {
      setState('failed')
    }

    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setState('idle'), 2600)
  }

  return { state, copy }
}
