import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { showcase } from '../../data/projects.js'
import { Headline, Label, Media, Reveal, ScrollWords } from './Motion.jsx'
import ProjectItem, { SLOT_PATTERN } from './ProjectItem.jsx'
import ServicesIndex from './ServicesIndex.jsx'

/* =========================================================
   01 — INTRODUCTION
========================================================= */

const pillars = [
  {
    title: 'Design',
    text: 'Interfaces shaped around your brand and the people who use them.',
  },
  {
    title: 'Build',
    text: 'Fast, responsive, search-ready code that can grow with you.',
  },
  {
    title: 'Launch',
    text: 'A site that goes live properly: tested, tuned and handed over.',
  },
  {
    title: 'Look after',
    text: 'Updates, backups and monitoring once the work is done.',
  },
]

export function Intro() {
  return (
    <section className="ed-sec ed-sec--paper ed-intro" aria-label="Introduction">
      <div className="ed-wrap">
        <div className="ed-intro-top">
          <Label>(01) Introduction</Label>
          <Label delay={120}>Websites · Web apps · Dashboards</Label>
        </div>

        <ScrollWords
          className="ed-intro-statement"
          text="I’m Jocelyn, a web developer. I design, build and look after websites, web applications and dashboards for entrepreneurs and growing businesses, so the idea you start with becomes a digital business you actually own."
        />

        <div className="ed-intro-foot">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} className="ed-pillar" delay={index * 90}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="ed-intro-link" delay={200}>
          <Link to="/about" className="ed-link">
            More about me <ArrowUpRight size={14} strokeWidth={1.8} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* =========================================================
   02 — SELECTED WORK
========================================================= */

const FEATURED = 5

export function FeaturedWork() {
  const items = showcase.slice(0, FEATURED)

  return (
    <section className="ed-sec ed-sec--dark ed-projects" id="work" aria-labelledby="work-title">
      <div className="ed-wrap">
        <div className="ed-head">
          <div>
            <Label>(02) Selected work</Label>
            <Headline as="h2" id="work-title" text={'Selected\n*work.*'} size="xl" />
          </div>
          <Reveal as="p" className="ed-lead" delay={200}>
            A selection of websites and web applications, each designed and built
            end to end. Open any of them for the full story: the challenge, the
            approach and what shipped.
          </Reveal>
        </div>

        <div className="ed-work">
          {items.map((project, index) => (
            <ProjectItem
              key={project.slug}
              project={project}
              slot={SLOT_PATTERN[index]}
              index={index}
            />
          ))}
        </div>

        <Reveal className="ed-more">
          <Link to="/work" className="ed-btn">
            View all {showcase.length} projects <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* =========================================================
   03 — SERVICES
========================================================= */

export function ServicesSection() {
  return (
    <section
      className="ed-sec ed-sec--dark2 ed-services"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="ed-wrap">
        <div className="ed-head">
          <div>
            <Label>(03) Services</Label>
            <Headline
              as="h2"
              id="services-title"
              text={'What I can\n*build* for you.'}
            />
          </div>
          <Reveal as="p" className="ed-lead" delay={200}>
            Six disciplines that cover what a business needs online, from the
            first sketch to the support after launch. Open one to see how it
            helps and what it includes.
          </Reveal>
        </div>

        <Reveal>
          <ServicesIndex />
        </Reveal>

        <Reveal className="ed-more">
          <Link to="/services" className="ed-btn">
            Services &amp; pricing <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* =========================================================
   06 — ABOUT PREVIEW
========================================================= */

export function AboutPreview() {
  return (
    <section className="ed-sec ed-sec--dark2 ed-about" aria-labelledby="about-title">
      <div className="ed-wrap ed-about-grid">
        <figure className="ed-about-photo">
          <Media className="ed-about-media">
            <img
              src="/hero-portrait.webp"
              alt="Portrait of Jocelyn working at a laptop"
              width="400"
              height="537"
              loading="lazy"
              decoding="async"
            />
          </Media>
          <figcaption>Jocelyn — web developer</figcaption>
        </figure>

        <div className="ed-about-text">
          <Label>(05) About me</Label>
          <Headline as="h2" id="about-title" text={'Hi, I’m\n*Jocelyn.*'} size="lg" />

          <Reveal as="p" className="ed-prose-lead" delay={150}>
            I help entrepreneurs and businesses turn ideas into real digital
            foundations that they can build on, grow with and ultimately own.
          </Reveal>
          <Reveal as="p" className="ed-prose" delay={220}>
            Through StartupLift Dev I design, build and look after websites, web
            applications and dashboards, from the first sketch to launch day and
            the support after. I don’t think a website should simply sit online.
            It should become an asset that works for your business.
          </Reveal>

          <Reveal as="ul" className="ed-bgo" delay={280} aria-label="Build. Grow. Own.">
            <li>Build.</li>
            <li>Grow.</li>
            <li>Own.</li>
          </Reveal>

          <Reveal delay={340}>
            <Link to="/about" className="ed-btn">
              More about me <ArrowUpRight size={16} strokeWidth={1.8} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
