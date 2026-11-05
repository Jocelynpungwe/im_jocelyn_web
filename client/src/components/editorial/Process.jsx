import React from 'react'

import { processSteps } from '../../data/site.js'
import { Headline, Label, Reveal } from './Motion.jsx'
import { useScrollProgress } from './motion.js'

/* Five steps from idea to launch. The list draws a line down its side and each
   step lights up as the visitor scrolls to it. */
export default function Process({
  tone = 'dark',
  label = '(04) My approach',
  title = 'From first idea to\n*finished* product.',
  lead = 'A clear path means no surprises: you always know what is happening, what comes next and what you are getting.',
}) {
  const listRef = useScrollProgress({ enter: 0.75, exit: 0.35 })

  return (
    <section
      className={`ed-sec ed-sec--${tone} ed-process`}
      aria-labelledby="process-title"
    >
      <div className="ed-wrap ed-process-grid">
        <div className="ed-process-intro">
          <Label>{label}</Label>
          <Headline as="h2" id="process-title" text={title} size="md" />
          <Reveal as="p" className="ed-lead" delay={200}>
            {lead}
          </Reveal>
        </div>

        <ol ref={listRef} className="ed-steps" style={{ '--n': processSteps.length }}>
          {processSteps.map((step, index) => (
            <li key={step.number} className="ed-step" style={{ '--i': index }}>
              <span className="ed-step-n" aria-hidden="true">
                {step.number}
              </span>
              <div>
                <h3>
                  <span className="ed-sr">{step.number} — </span>
                  {step.title}
                </h3>
                <p>{step.text}</p>
                <p className="ed-step-out">
                  <span>Result</span>
                  {step.output}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
