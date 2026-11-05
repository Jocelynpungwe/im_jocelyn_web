import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { contact } from '../../data/site.js'
import { Headline, Label, Reveal } from './Motion.jsx'

/* The closing call to action: the email address is the interface. */
export default function ContactCta({
  tone = 'paper',
  label = '(06) Contact',
  title = 'Have a project\nin mind? *Let’s talk.*',
  note = 'Tell me what you are building, who it is for and when you would like it live. I read every message myself.',
  showPageLink = true,
}) {
  return (
    <section className={`ed-sec ed-sec--${tone} ed-cta`} aria-labelledby="cta-title">
      <div className="ed-wrap">
        <Label>{label}</Label>

        <Headline as="h2" id="cta-title" size="xl" text={title} />

        <Reveal className="ed-cta-mail-wrap" delay={150}>
          <a
            className="ed-cta-mail"
            href={`mailto:${contact.email}?subject=Project%20enquiry`}
          >
            <span>{contact.email}</span>
            <ArrowUpRight aria-hidden="true" strokeWidth={1.2} />
          </a>
        </Reveal>

        <div className="ed-cta-foot">
          <Reveal as="p" className="ed-lead" delay={250}>
            {note}
          </Reveal>

          <Reveal className="ed-cta-links" delay={320}>
            <p className="ed-mini">
              Reply time <strong>{contact.reply}</strong>
            </p>
            <ul>
              {contact.socials.map((social) => (
                <li key={social.id}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                    <span className="ed-sr"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
              {showPageLink && (
                <li>
                  <Link to="/contact">All contact details</Link>
                </li>
              )}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
