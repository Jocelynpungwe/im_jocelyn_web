import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { services } from '../../data/site.js'

/* An index of services. One row is open at a time; the open row explains the
   business value, what is included and what it is built with. */
export default function ServicesIndex() {
  const [open, setOpen] = useState(0)

  return (
    <ul className="ed-sv">
      {services.map((service, index) => {
        const isOpen = open === index

        return (
          <li key={service.id} className={`ed-sv-row${isOpen ? ' is-open' : ''}`}>
            <h3 className="ed-sv-head">
              <button
                type="button"
                id={`sv-${service.id}`}
                aria-expanded={isOpen}
                aria-controls={`sv-panel-${service.id}`}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                <span className="ed-sv-n">{service.number}</span>
                <span className="ed-sv-t">{service.title}</span>
                <span className="ed-sv-icon" aria-hidden="true" />
              </button>
            </h3>

            <div
              id={`sv-panel-${service.id}`}
              role="region"
              aria-labelledby={`sv-${service.id}`}
              className="ed-sv-panel"
              inert={!isOpen}
            >
              <div className="ed-sv-clip">
                <div className="ed-sv-body">
                  <div className="ed-sv-main">
                    <p className="ed-sv-headline">{service.headline}</p>
                    <p>{service.lead}</p>
                    <p className="ed-sv-value">
                      <span>Why it matters</span>
                      {service.value}
                    </p>
                  </div>

                  <div className="ed-sv-side">
                    <p className="ed-mini">What’s included</p>
                    <ul className="ed-ticks">
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <p className="ed-mini">{service.stackLabel}</p>
                    <ul className="ed-chips">
                      {service.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <Link to={`/services#${service.id}`} className="ed-link">
                      Read more <ArrowUpRight size={14} strokeWidth={1.8} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
