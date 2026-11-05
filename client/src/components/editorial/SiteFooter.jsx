import React from 'react'
import { Link } from 'react-router-dom'

import { contact, services } from '../../data/site.js'

const pages = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

/* The footer shared by every public page. */
export default function SiteFooter() {
  return (
    <footer className="ed ed-footer">
      <div className="ed-wrap">
        <p className="ed-footer-mark" aria-hidden="true">
          StartupLift <em>Dev</em>
        </p>

        <div className="ed-footer-grid">
          <p className="ed-footer-note">
            Websites, web applications and dashboards, designed, built and
            looked after by one person.
          </p>

          <nav aria-label="Footer">
            <p className="ed-mini">Pages</p>
            <ul>
              {pages.map((page) => (
                <li key={page.to}>
                  <Link to={page.to}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="ed-mini">What I do</p>
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <Link to={`/services#${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="ed-mini">Elsewhere</p>
            <ul>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              {contact.socials.map((social) => (
                <li key={social.id}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.label}
                    <span className="ed-sr"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ed-footer-base">
          <span>© {new Date().getFullYear()} StartupLift Dev</span>
          <span>Built for businesses ready to grow.</span>
        </div>
      </div>
    </footer>
  )
}
