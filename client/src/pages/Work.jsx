import React, { useMemo, useState } from 'react'

import ContactCta from '../components/editorial/ContactCta.jsx'
import { WorkHero } from '../components/editorial/Heroes.jsx'
import ProjectItem, { SLOT_PATTERN } from '../components/editorial/ProjectItem.jsx'
import usePageMeta from '../components/editorial/usePageMeta.js'
import { showcase } from '../data/projects.js'

/* The homepage hero (components/public/PortfolioHero.jsx) imports these two
   from here. They live in data/projects.js now; keep this re-export so the
   hero does not need to change. */
export { imageProps, projects } from '../data/projects.js'

export default function Work() {
  usePageMeta(
    'Work | StartupLift Dev',
    'A curated collection of websites and web applications designed and built end to end: storefronts, studios, corporate sites and more.',
  )

  const [filter, setFilter] = useState('All')

  // Only offer filters that actually have projects behind them.
  const categories = useMemo(
    () => ['All', ...new Set(showcase.map((project) => project.category))],
    [],
  )

  const countFor = (category) =>
    category === 'All'
      ? showcase.length
      : showcase.filter((project) => project.category === category).length

  const items =
    filter === 'All'
      ? showcase
      : showcase.filter((project) => project.category === filter)

  return (
    <div className="ed ed-page">
      <WorkHero />

      <section className="ed-sec ed-sec--dark ed-work--page" aria-label="Projects">
        <div className="ed-wrap">
          <div className="ed-filter" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
                <sup>{countFor(category)}</sup>
              </button>
            ))}
          </div>

          <p className="ed-sr" aria-live="polite">
            Showing {items.length} {items.length === 1 ? 'project' : 'projects'}
          </p>

          {/* keyed so the entrance animations replay when the filter changes */}
          <div className="ed-work" key={filter}>
            {items.map((project, index) => (
              <ProjectItem
                key={project.slug}
                project={project}
                slot={SLOT_PATTERN[index % SLOT_PATTERN.length]}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        label="Your project"
        title={'Your project\ncould be *next.*'}
      />
    </div>
  )
}
