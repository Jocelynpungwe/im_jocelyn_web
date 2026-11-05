import React from 'react'

import { ContactHero } from '../components/editorial/Heroes.jsx'
import { Headline, Label, Reveal } from '../components/editorial/Motion.jsx'
import usePageMeta from '../components/editorial/usePageMeta.js'
import { contact } from '../data/site.js'

const brief = [
  {
    title: 'What you’re building',
    text: 'A website, a store, a dashboard or something else entirely.',
  },
  {
    title: 'Who it’s for',
    text: 'Your customers, and what they need to be able to do.',
  },
  {
    title: 'When you’d like it live',
    text: 'A rough timeline is plenty.',
  },
  {
    title: 'Examples you like',
    text: 'Sites or brands whose look or feel you admire.',
  },
]

const next = [
  {
    title: 'I read it and reply',
    text: `${contact.reply}. Every message is read and answered by me.`,
  },
  {
    title: 'We talk it through',
    text: 'A short conversation about your goals, your customers and what the site has to do.',
  },
  {
    title: 'You get a clear recommendation',
    text: 'The right approach and a price, so you know what you are getting before anything starts.',
  },
]

export default function Contact() {
  usePageMeta(
    'Contact | StartupLift Dev',
    'Get in touch about a website, web application or dashboard. Email contact@startupliftdev.com or message on Instagram or Facebook. Replies usually within 24 hours.',
  )

  return (
    <div className="ed ed-page">
      <ContactHero />

      <section className="ed-sec ed-sec--paper" aria-label="How to get in touch">
        <div className="ed-wrap ed-contact-grid">
          <div className="ed-contact-col-a">
            <Label>(01) What to include</Label>
            <Headline
              as="h2"
              size="md"
              text={'A few lines\nis *plenty.*'}
              className="ed-split-title"
            />
            <Reveal as="ol" className="ed-brief" delay={120} style={{ marginTop: 32 }}>
              {brief.map((item) => (
                <li key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </li>
              ))}
            </Reveal>
          </div>

          <div className="ed-contact-col-b">
            <Label>(02) What happens next</Label>
            <Headline
              as="h2"
              size="md"
              text={'No pressure,\nno jargon.'}
              className="ed-split-title"
            />
            <Reveal as="ol" className="ed-brief" delay={120} style={{ marginTop: 32 }}>
              {next.map((item) => (
                <li key={item.title}>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </div>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
