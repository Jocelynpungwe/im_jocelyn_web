import React from 'react'
import ContactCta from '../components/editorial/ContactCta.jsx'
import { AboutHero } from '../components/editorial/Heroes.jsx'
import { Headline, Label, Reveal } from '../components/editorial/Motion.jsx'
import Testimonials from '../components/editorial/Testimonials.jsx'
import usePageMeta from '../components/editorial/usePageMeta.js'
import { journey, philosophy, principles } from '../data/site.js'

export default function About() {
  usePageMeta(
    'About Jocelyn | StartupLift Dev',
    'I’m Jocelyn, a web developer who helps entrepreneurs and businesses turn ideas into real digital businesses: websites, web applications and dashboards, built to grow with you.',
  )

  return (
    <div className="ed ed-page">
      {/* ===== HERO ===== */}
      <AboutHero />

      {/* ===== STORY ===== */}
      <section className="ed-sec ed-sec--paper" aria-labelledby="story-title">
        <div className="ed-wrap ed-split">
          <div>
            <Label>(01) My story</Label>
            <Headline
              as="h2"
              id="story-title"
              size="md"
              text={'Build something\nyou believe in.\n*Own your future.*'}
              className="ed-split-title"
            />
          </div>

          <div>
            <Reveal as="p" className="ed-prose-lead">
              I’m Jocelyn, a web developer. Through StartupLift Dev I design,
              build and look after websites, web applications and dashboards,
              from the first sketch to launch day and the support after.
            </Reveal>
            <Reveal as="p" className="ed-prose" delay={80}>
              Starting a business can feel overwhelming. You need a brand, a
              website, customers, technology and a way to grow, often before
              you’ve even made your first sale.
            </Reveal>
            <Reveal as="p" className="ed-prose" delay={140}>
              That’s where I come in. I help entrepreneurs and businesses turn
              ideas into real digital foundations that they can build on, grow
              with and ultimately own.
            </Reveal>
            <Reveal as="p" className="ed-prose" delay={200}>
              I don’t believe your website should simply sit online. It should
              become an asset that works for your business, helps people
              discover you and gives you the foundation to create something
              bigger.
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== THE JOURNEY ===== */}
      <section className="ed-sec ed-sec--dark" aria-labelledby="journey-title">
        <div className="ed-wrap">
          <div className="ed-head">
            <div>
              <Label>(02) The journey</Label>
              <Headline
                as="h2"
                id="journey-title"
                text={'I’m building more\nthan *websites.*'}
              />
            </div>
            <Reveal as="p" className="ed-lead" delay={200}>
              Every project follows the same arc, from a first idea to something
              you own and can keep building on.
            </Reveal>
          </div>

          <ol className="ed-journey">
            {journey.map((step, index) => (
              <Reveal key={step.number} as="li" delay={index * 120}>
                <span className="ed-journey-n" aria-hidden="true">
                  {step.number}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== APPROACH & TECHNICAL PHILOSOPHY ===== */}
      <section className="ed-sec ed-sec--paper" aria-labelledby="philosophy-title">
        <div className="ed-wrap">
          <div className="ed-head">
            <div>
              <Label>(03) Approach &amp; philosophy</Label>
              <Headline
                as="h2"
                id="philosophy-title"
                text={'You’re not just\nbuilding *a website.*'}
              />
            </div>
            <Reveal as="p" className="ed-lead" delay={200}>
              A great site is the start, not the finish. Technology, design and
              strategy work together, so what I build is made for the long term.
            </Reveal>
          </div>

          <ul className="ed-philo">
            {philosophy.map((item, index) => (
              <Reveal key={item.title} as="li" delay={(index % 2) * 80}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== BUILD / GROW / OWN ===== */}
      <section className="ed-sec ed-sec--paper" aria-labelledby="mission-title">
        <div className="ed-wrap">
          <div className="ed-head">
            <div>
              <Label>(04) My mission</Label>
              <Headline as="h2" id="mission-title" text={'Build. Grow.\n*Own.*'} />
            </div>
          </div>

          <ul className="ed-bgo-list">
            {principles.map((item, index) => (
              <Reveal key={item.label} as="li" delay={(index % 2) * 80}>
                <h3>
                  {item.label === 'Own' ? <span>{item.label}.</span> : `${item.label}.`}
                </h3>
                <div className="ed-bgo-body">
                  <p>{item.title}</p>
                  <p className="ed-prose">{item.text}</p>
                  <ul className="ed-chips">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* real client quotes appear once some are added in src/data/testimonials.js */}
      <Testimonials tone="dark" />

      <ContactCta
        tone="dark"
        label="(05) Let’s talk"
        title={'Build something.\nGrow something.\n*Own something.*'}
        note="If you have an idea, a business or a website that needs to do more, I’d like to hear about it."
      />
    </div>
  )
}
