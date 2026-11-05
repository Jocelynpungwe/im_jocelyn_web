import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import ContactCta from '../components/editorial/ContactCta.jsx'
import { Headline, Label, Media, Reveal } from '../components/editorial/Motion.jsx'
import Testimonials from '../components/editorial/Testimonials.jsx'
import usePageMeta from '../components/editorial/usePageMeta.js'
import { findProject, imageProps, showcase, siteHost } from '../data/projects.js'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = findProject(slug)

  usePageMeta(
    project ? `${project.title} case study | StartupLift Dev` : undefined,
    project ? project.summary : undefined,
  )

  if (!project) return <Navigate to="/work" replace />

  const index = showcase.findIndex((item) => item.slug === project.slug)
  const next = showcase[(index + 1) % showcase.length]
  const title = project.longTitle || project.title

  return (
    <div className="ed ed-page" key={project.slug}>
      {/* ===== HEADER ===== */}
      <header className="ed-pagehead">
        <div className="ed-wrap">
          <nav aria-label="Breadcrumb">
            <Reveal as="p" variant="fade" className="ed-label">
              <Link to="/work" className="ed-link ed-link--dim">
                Work
              </Link>
              <span aria-hidden="true"> / </span>
              {project.title}
            </Reveal>
          </nav>

          <Headline as="h1" size="lg" text={title} delay={120} />

          <Reveal as="p" className="ed-case-tagline" delay={380}>
            “{project.tagline}”
          </Reveal>
          {project.taglineNote && (
            <Reveal as="p" className="ed-case-note" delay={440}>
              {project.taglineNote}
            </Reveal>
          )}

          <div className="ed-pagehead-row">
            <Reveal as="p" className="ed-lead" delay={480}>
              {project.summary}
            </Reveal>

            <Reveal className="ed-case-actions" delay={540}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ed-btn ed-btn--solid"
              >
                Visit the live site <ArrowUpRight size={16} strokeWidth={1.8} />
                <span className="ed-sr"> (opens in a new tab)</span>
              </a>
              <Link to="/work" className="ed-btn">
                All work
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <dl className="ed-case-meta" style={{ marginTop: 'clamp(40px, 5vw, 72px)' }}>
              <div>
                <dt>Category</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>Built with</dt>
                <dd>{project.stack.join(' · ')}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>{project.scope.join(' · ')}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </header>

      {/* ===== LARGE PREVIEW ===== */}
      <div className="ed-case-hero">
        <div className="ed-wrap">
          <figure className="ed-frame" style={{ margin: 0 }}>
            <div className="ed-frame-bar" aria-hidden="true">
              <i />
              <i />
              <i />
              <span>{siteHost(project.link)}</span>
            </div>
            <Media className="ed-frame-view">
              <img
                {...imageProps(project.image)}
                sizes="100vw"
                alt={`${project.title} homepage`}
                style={{ objectPosition: '50% 0%' }}
                decoding="async"
              />
            </Media>
          </figure>
        </div>
      </div>

      {/* ===== AT A GLANCE ===== */}
      <section className="ed-sec ed-sec--paper" aria-label="At a glance" style={{ paddingBlock: 'clamp(48px, 6vw, 88px)' }}>
        <div className="ed-wrap">
          <dl className="ed-case-meta ed-case-meta--4">
            {project.facts.map((fact, factIndex) => (
              <Reveal key={fact.label} delay={factIndex * 80}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== THE CHALLENGE ===== */}
      <section className="ed-sec ed-sec--dark" aria-labelledby="challenge-title">
        <div className="ed-wrap ed-split">
          <div>
            <Label>(01) The challenge</Label>
            <Headline
              as="h2"
              id="challenge-title"
              size="md"
              text={'The\n*challenge.*'}
              className="ed-split-title"
            />
          </div>

          <div>
            {project.challenge.map((paragraph, paragraphIndex) => (
              <Reveal
                key={paragraphIndex}
                as="p"
                delay={paragraphIndex * 100}
                className={paragraphIndex === 0 ? 'ed-prose-lead' : 'ed-prose'}
              >
                {paragraph}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE APPROACH ===== */}
      <section className="ed-sec ed-sec--paper" aria-labelledby="approach-title">
        <div className="ed-wrap">
          <Label>(02) The approach</Label>
          <Headline
            as="h2"
            id="approach-title"
            size="md"
            text={'Design decisions\nthat do the *work.*'}
            className="ed-split-title"
          />

          <ol className="ed-solutions">
            {project.solution.map((item, itemIndex) => (
              <Reveal
                key={item.title}
                as="li"
                className="ed-solution"
                delay={(itemIndex % 2) * 100}
              >
                <span className="ed-solution-n">
                  {String(itemIndex + 1).padStart(2, '0')}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== WHAT SHIPPED ===== */}
      <section className="ed-sec ed-sec--dark2" aria-labelledby="shipped-title">
        <div className="ed-wrap ed-split">
          <div>
            <Label>(03) The outcome</Label>
            <Headline
              as="h2"
              id="shipped-title"
              size="md"
              text={'What\n*shipped.*'}
              className="ed-split-title"
            />
          </div>

          <div>
            <Reveal as="p" className="ed-outcome-text">
              {project.outcome}
            </Reveal>

            <Reveal delay={100}>
              <p className="ed-mini">On the site</p>
              <ul className="ed-ticks">
                {project.shipped.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="ed-mini">Built with</p>
              <ul className="ed-chips">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* real client quote, only when one exists for this project */}
      <Testimonials project={project} />

      {/* ===== NEXT PROJECT ===== */}
      <section className="ed-sec ed-sec--dark ed-next" aria-labelledby="next-title">
        <div className="ed-wrap">
          <Label>Next project</Label>
          <Reveal as="h2" id="next-title" className="ed-next-h">
            <Link to={`/work/${next.slug}`} className="ed-next-link">
              <span>{next.title}</span>
              <ArrowUpRight aria-hidden="true" strokeWidth={1.1} />
            </Link>
          </Reveal>
          <Reveal as="p" className="ed-case-note" delay={120}>
            {next.category} · {next.stack.join(' · ')}
          </Reveal>
        </div>
      </section>

      <ContactCta
        label="Your project"
        title={'Let’s build something\n*exceptional.*'}
      />
    </div>
  )
}
