import React from 'react'

import { useInView, useParallax, useScrollProgress } from './motion.js'

/* ---------- fades its children up the first time they scroll into view ---------- */

export function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`ed-reveal ed-reveal--${variant}${inView ? ' is-in' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/* ---------- small mono label; a leading "(02)" is picked out in gold ---------- */

export function Label({ children, className = '', delay = 0 }) {
  const text = String(children)
  const match = text.match(/^(\([^)]+\))\s+(.*)$/)

  return (
    <Reveal
      as="p"
      variant="fade"
      delay={delay}
      className={`ed-label ${className}`.trim()}
    >
      {match ? (
        <>
          <b>{match[1]}</b>
          {match[2]}
        </>
      ) : (
        text
      )}
    </Reveal>
  )
}

/* ---------- headline whose words rise out of a mask ----------
   text: plain string. `*word*` is set in the accent italic, "\n" breaks a line.
   The full sentence is also rendered once for screen readers.             */

const plainText = (text) => text.replace(/\*/g, '').replace(/\n/g, ' ')

export function Headline({
  as: Tag = 'h2',
  text,
  size = '',
  delay = 0,
  className = '',
  id,
}) {
  const [ref, inView] = useInView({ threshold: 0.35, rootMargin: '0px 0px -5% 0px' })

  let wordIndex = 0
  const lines = text.split('\n').map((line, lineIndex) => (
    <span className="ed-line" key={lineIndex} aria-hidden="true">
      {line.split('*').map((segment, segmentIndex) => {
        const words = segment
          .split(' ')
          .filter(Boolean)
          .map((word) => {
            const index = wordIndex
            wordIndex += 1
            return (
              <React.Fragment key={`${word}-${index}`}>
                <span className="ed-word">
                  <span className="ed-word-in" style={{ '--i': index }}>
                    {word}
                  </span>
                </span>{' '}
              </React.Fragment>
            )
          })

        return segmentIndex % 2 === 1 ? (
          <em key={segmentIndex}>{words}</em>
        ) : (
          <React.Fragment key={segmentIndex}>{words}</React.Fragment>
        )
      })}
    </span>
  ))

  return (
    <Tag
      ref={ref}
      id={id}
      className={`ed-headline${size ? ` ed-headline--${size}` : ''}${inView ? ' is-in' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}ms` }}
    >
      <span className="ed-sr">{plainText(text)}</span>
      {lines}
    </Tag>
  )
}

/* ---------- paragraph whose words light up as you scroll through it ---------- */

export function ScrollWords({ as: Tag = 'p', text, className = '' }) {
  const ref = useScrollProgress({ enter: 0.9, exit: 0.4 })
  const words = text.split(' ').filter(Boolean)

  return (
    <Tag
      ref={ref}
      className={`ed-scrollwords ${className}`.trim()}
      style={{ '--n': words.length }}
    >
      <span className="ed-sr">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <React.Fragment key={`${word}-${index}`}>
            <span className="ed-sw" style={{ '--i': index }}>
              {word}
            </span>{' '}
          </React.Fragment>
        ))}
      </span>
    </Tag>
  )
}

/* ---------- image that is unveiled on entry and drifts slightly on scroll ---------- */

export function Media({ className = '', parallax = true, children, style }) {
  const [revealRef, inView] = useInView({ threshold: 0.1, rootMargin: '0px 0px -4% 0px' })
  const driftRef = useParallax()

  // The outer box is what the observer watches and what sizes the image. The
  // clipped layer inside it must not be observed itself: while it is fully
  // clipped it counts as invisible and the reveal would never start.
  return (
    <div ref={revealRef} className={`ed-media-box ${className}`.trim()} style={style}>
      <div className={`ed-media${inView ? ' is-in' : ''}`}>
        <div
          ref={parallax ? driftRef : null}
          className={`ed-media-drift${parallax ? ' has-parallax' : ''}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
