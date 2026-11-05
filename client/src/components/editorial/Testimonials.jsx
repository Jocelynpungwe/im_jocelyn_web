import React from 'react'

import { clientTestimonials } from '../../data/testimonials.js'
import { Headline, Label, Reveal } from './Motion.jsx'

/* Real client quotes. Renders nothing until some are added to
   src/data/testimonials.js, so there is never an empty or made-up section.
   Pass `project` (a project record) to show only the quotes for that project. */
export default function Testimonials({ project, tone = 'paper' }) {
  const items = project
    ? clientTestimonials.filter(
        (item) =>
          item.project === project.title ||
          item.project === project.longTitle,
      )
    : clientTestimonials

  if (items.length === 0) return null

  return (
    <section className={`ed-sec ed-sec--${tone} ed-quotes`} aria-labelledby="quotes-title">
      <div className="ed-wrap">
        <Label>{project ? 'In their words' : 'What clients say'}</Label>
        <Headline as="h2" id="quotes-title" text={'Kind words\nfrom *clients.*'} size="md" />

        <div className="ed-quote-list">
          {items.map((item, index) => (
            <Reveal key={`${item.name}-${index}`} as="figure" delay={index * 100}>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>
                  {item.role}
                  {item.project && !project ? ` · ${item.project}` : ''}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
