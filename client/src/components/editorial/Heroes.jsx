import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check, Copy, Facebook, Instagram, Mail } from 'lucide-react'

import { findProject, imageProps, showcase, siteHost } from '../../data/projects.js'
import { contact, services } from '../../data/site.js'
import { Headline, Label, Media, Reveal } from './Motion.jsx'
import { usePointerParallax } from './motion.js'
import { enquiryMailto, projectMailto } from './mailto.js'
import ServiceArt from './ServiceArt.jsx'
import useCopy from './useCopy.js'

/* =========================================================
   PAGE HEROES
   Work, Services and Contact each open with a split hero: a calm headline and
   call to action on one side, a visual that belongs to that page on the other.
========================================================= */

function HeroShell({ label, title, lead, actions, extra, visual, className = '' }) {
  return (
    <header className={`ed-hero ${className}`.trim()}>
      <div className="ed-wrap ed-hero-grid">
        <div className="ed-hero-text">
          <Label>{label}</Label>
          <Headline as="h1" size="hero" text={title} delay={100} />

          <Reveal as="p" className="ed-lead" delay={380}>
            {lead}
          </Reveal>

          {actions && (
            <Reveal className="ed-hero-actions" delay={460}>
              {actions}
            </Reveal>
          )}

          {extra && (
            <Reveal className="ed-hero-extra" delay={540}>
              {extra}
            </Reveal>
          )}
        </div>

        <div className="ed-hero-visual">{visual}</div>
      </div>
    </header>
  )
}

/* ---------- WORK: a layered collage of real project screenshots ---------- */

const COLLAGE = [
  { slug: 'vanta-detail-studio', place: 'a', ratio: '2.1 / 1', bar: true, focus: '50% 0%' },
  { slug: 'crown-atelier', place: 'b', ratio: '4 / 5', bar: false },
  { slug: 'royal-memoria', place: 'c', ratio: '4 / 5', bar: false },
]

export function WorkHero() {
  const collageRef = usePointerParallax()
  const categories = new Set(showcase.map((project) => project.category)).size

  return (
    <HeroShell
      label="Work"
      title={'Work that\n*earns* trust.'}
      lead="A curated collection of websites and web applications. Each one began with a business and a goal, and was designed, built and launched from start to finish."
      actions={
        <>
          <Link to="/contact" className="ed-btn ed-btn--solid">
            Start a project <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
          <Link to="/services" className="ed-btn">
            Explore services
          </Link>
        </>
      }
      extra={
        <dl className="ed-hero-facts">
          <div>
            <dt>Projects</dt>
            <dd>{String(showcase.length).padStart(2, '0')}</dd>
          </div>
          <div>
            <dt>Categories</dt>
            <dd>{String(categories).padStart(2, '0')}</dd>
          </div>
        </dl>
      }
      visual={
        <div ref={collageRef} className="ed-collage">
          {COLLAGE.map((item, index) => {
            const project = findProject(item.slug)
            if (!project) return null

            return (
              <Link
                key={item.slug}
                to={`/work/${project.slug}`}
                className={`ed-collage-item ed-collage-item--${item.place}`}
                style={{ '--n': index }}
              >
                <figure className={`ed-frame${item.bar ? '' : ' ed-frame--bare'}`}>
                  {item.bar && (
                    <div className="ed-frame-bar" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <span>{siteHost(project.link)}</span>
                    </div>
                  )}

                  <div className="ed-collage-view" style={{ '--ratio': item.ratio }}>
                    <img
                      {...imageProps(project.image)}
                      sizes="(min-width: 900px) 40vw, 90vw"
                      alt={`${project.title} homepage preview`}
                      style={{ objectPosition: item.focus || project.focus }}
                      fetchPriority="high"
                    />
                  </div>

                  <figcaption className="ed-collage-cap">
                    <span>{project.title}</span>
                    <span>{project.category}</span>
                  </figcaption>
                </figure>
              </Link>
            )
          })}
        </div>
      }
    />
  )
}

/* ---------- SERVICES: a stack of the line drawings, plus a quick index ---------- */

const STACK = [
  { id: 'websites', place: 'a', tag: '01 · Websites' },
  { id: 'web-apps', place: 'b', tag: '02 · Web apps' },
  { id: 'backend', place: 'c', tag: '06 · Backend' },
]

export function ServicesHero() {
  const stackRef = usePointerParallax()

  return (
    <HeroShell
      label="Services"
      title={'Websites that\nearn their *keep.*'}
      lead="From a first three-page site to a custom web application, every service starts from one question: what should this do for your business?"
      actions={
        <>
          <a href="#packages" className="ed-btn ed-btn--solid">
            See packages
          </a>
          <a href={enquiryMailto('Project enquiry')} className="ed-btn">
            Discuss a project <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </>
      }
      extra={
        <ul className="ed-svc-index ed-svc-index--cols" aria-label="Services">
          {services.map((service) => (
            <li key={service.id}>
              <a href={`#${service.id}`}>
                <b>{service.number}</b>
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      }
      visual={
        <div ref={stackRef} className="ed-artstack">
          {STACK.map((item, index) => (
            <div
              key={item.id}
              className={`ed-artstack-item ed-artstack-item--${item.place}`}
              style={{ '--n': index }}
            >
              <ServiceArt id={item.id} />
              <span className="ed-artstack-tag" aria-hidden="true">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      }
    />
  )
}

/* ---------- CONTACT: every way to reach me, as large tappable rows ---------- */

const REACH_ICONS = { instagram: Instagram, facebook: Facebook }

export function ContactHero() {
  const { state, copy } = useCopy(contact.email)

  const channels = [
    {
      id: 'email',
      label: 'Email',
      value: contact.email,
      href: projectMailto,
      Icon: Mail,
      external: false,
    },
    ...contact.socials.map((social) => ({
      id: social.id,
      label: social.label,
      value: social.handle,
      href: social.href,
      Icon: REACH_ICONS[social.id] || ArrowUpRight,
      external: true,
    })),
  ]

  return (
    <HeroShell
      label="Contact"
      title={'Let’s build something\n*worth talking about.*'}
      lead="Have a business idea, need a new website or want to improve your current online presence? Send me an email or message me on social media and tell me what you’re working on."
      actions={
        <>
          <a className="ed-btn ed-btn--solid" href={projectMailto}>
            Write an email <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>

          <button type="button" className="ed-btn" onClick={copy}>
            {state === 'copied' ? (
              <Check size={16} strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <Copy size={16} strokeWidth={1.8} aria-hidden="true" />
            )}
            Copy address
          </button>

          <span className="ed-copy-state" role="status" aria-live="polite">
            {state === 'copied' && 'Copied to clipboard'}
            {state === 'failed' && 'Copy failed — please select the address by hand'}
          </span>
        </>
      }
      visual={
        <div className="ed-reach">
          <p className="ed-mini">Reach me directly</p>

          <ul>
            {channels.map(({ id, label, value, href, Icon, external }) => (
              <li key={id}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="ed-reach-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.4} />
                  </span>
                  <span className="ed-reach-text">
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </span>
                  <ArrowUpRight size={22} strokeWidth={1.2} aria-hidden="true" />
                  {external && <span className="ed-sr"> (opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>

          <p className="ed-reach-foot">
            <span aria-hidden="true" /> Replies {contact.reply.toLowerCase()}
          </p>
        </div>
      }
    />
  )
}

/* ---------- ABOUT: the portrait on the left, the text on the right ---------- */

export function AboutHero() {
  return (
    <HeroShell
      className="ed-hero--flip"
      label="About"
      title={'Hi, I’m\n*Jocelyn.*'}
      lead="I’m a web developer who helps entrepreneurs and businesses turn ideas into real digital businesses: websites, web applications and dashboards, built to grow with you."
      actions={
        <>
          <Link to="/work" className="ed-btn ed-btn--solid">
            See my work <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
          <Link to="/contact" className="ed-btn">
            Get in touch
          </Link>
        </>
      }
      extra={
        <dl className="ed-hero-contact">
          <div>
            <dt>Role</dt>
            <dd>Web developer</dd>
          </div>
          <div>
            <dt>Studio</dt>
            <dd>StartupLift Dev</dd>
          </div>
          <div>
            <dt>Builds</dt>
            <dd>Websites · Web apps · Dashboards</dd>
          </div>
        </dl>
      }
      visual={
        <figure className="ed-about-photo ed-hero-photo">
          <Media className="ed-about-media">
            <img
              src="/hero-portrait.webp"
              alt="Portrait of Jocelyn working at a laptop"
              width="400"
              height="537"
              fetchPriority="high"
            />
          </Media>

          <div className="ed-hero-card" aria-hidden="true">
            Build. Grow. <em>Own.</em>
          </div>

          <figcaption>Jocelyn — web developer</figcaption>
        </figure>
      }
    />
  )
}
