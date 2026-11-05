import React from 'react'
import { ArrowUpRight } from 'lucide-react'

import ContactCta from '../components/editorial/ContactCta.jsx'
import { Headline, Label, Reveal, ScrollWords } from '../components/editorial/Motion.jsx'
import { ServicesHero } from '../components/editorial/Heroes.jsx'
import { enquiryMailto } from '../components/editorial/mailto.js'
import Process from '../components/editorial/Process.jsx'
import ServiceArt from '../components/editorial/ServiceArt.jsx'
import usePageMeta from '../components/editorial/usePageMeta.js'
import { packages, recurring } from '../data/pricing.js'
import { faqs, services } from '../data/site.js'

export default function Services() {
  usePageMeta(
    'Services | StartupLift Dev',
    'Website design and development, full-stack web applications, e-commerce, UI/UX design, SEO and backend development, with clear packages and ongoing care plans.',
  )

  return (
    <div className="ed ed-page">
      {/* ===== HERO ===== */}
      <ServicesHero />

      {/* ===== WHY IT MATTERS ===== */}
      <section className="ed-sec ed-sec--paper" aria-label="Why a professional website matters">
        <div className="ed-wrap">
          <Label>Why it matters</Label>
          <ScrollWords
            className="ed-statement"
            text="Your website is often the first thing a customer meets. It is judged in seconds, so it has to look credible, load quickly and make the next step obvious. Investing in it properly is not a cost of doing business. It is how a business gets found, trusted and chosen."
          />
        </div>
      </section>

      {/* ===== THE SIX SERVICES, ALTERNATING ===== */}
      {services.map((service, index) => {
        const flip = index % 2 === 1
        const tone = flip ? 'paper' : 'dark'

        return (
          <section
            key={service.id}
            id={service.id}
            className={`ed-sec ed-sec--${tone}`}
            aria-labelledby={`${service.id}-title`}
          >
            <div className={`ed-wrap ed-svc${flip ? ' ed-svc--flip' : ''}`}>
              <div className="ed-svc-art">
                <ServiceArt id={service.id} />
              </div>

              <div className="ed-svc-text">
                <Reveal as="span" className="ed-svc-n" aria-hidden="true">
                  {service.number}
                </Reveal>
                <h2 id={`${service.id}-title`}>{service.title}</h2>
                <Headline
                  as="p"
                  className="ed-svc-headline"
                  text={service.headline}
                />
                <Reveal as="p" className="ed-svc-lead" delay={120}>
                  {service.lead}
                </Reveal>

                <Reveal className="ed-sv-value" delay={160}>
                  <span>Why it matters</span>
                  <p>{service.value}</p>
                </Reveal>

                <Reveal className="ed-svc-cols" delay={200}>
                  <div>
                    <p className="ed-mini">What’s included</p>
                    <ul className="ed-ticks">
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="ed-mini">{service.stackLabel}</p>
                    <ul className="ed-chips">
                      {service.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal className="ed-svc-actions" delay={240}>
                  <a
                    className="ed-btn ed-btn--solid"
                    href={enquiryMailto(`${service.title} enquiry`)}
                  >
                    Discuss this service <ArrowUpRight size={16} strokeWidth={1.8} />
                  </a>
                </Reveal>
              </div>
            </div>
          </section>
        )
      })}

      {/* ===== PACKAGES ===== */}
      <section className="ed-sec ed-sec--dark" id="packages" aria-labelledby="packages-title">
        <div className="ed-wrap">
          <div className="ed-head">
            <div>
              <Label>Packages</Label>
              <Headline
                as="h2"
                id="packages-title"
                text={'Build it. Grow it.\n*Own it.*'}
              />
            </div>
            <Reveal as="p" className="ed-lead" delay={200}>
              Choose the package that fits where your business is today. Whether
              you’re starting from scratch or ready to grow, there is a clear
              next step.
            </Reveal>
          </div>

          <ul className="ed-rows">
            {packages.map((pkg, index) => (
              <Reveal
                key={pkg.id}
                as="li"
                delay={index * 80}
                className={`ed-row${pkg.featured ? ' is-featured' : ''}`}
              >
                <div className="ed-row-main">
                  {pkg.featured && <span className="ed-row-flag">Most popular</span>}
                  <h3>{pkg.name}</h3>
                  <p className="ed-row-title">{pkg.title}</p>
                  <p>{pkg.description}</p>
                </div>

                <ul className="ed-ticks ed-row-list">
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="ed-row-buy">
                  <p className="ed-row-price">
                    {pkg.price}
                    <small>{pkg.number === '03' ? 'Quoted per project' : 'Starting range'}</small>
                  </p>
                  <a
                    className={`ed-btn${pkg.featured ? ' ed-btn--solid' : ''}`}
                    href={enquiryMailto(`${pkg.name} package enquiry`)}
                  >
                    {pkg.button}
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== ONGOING CARE ===== */}
      <section className="ed-sec ed-sec--paper" aria-labelledby="care-title">
        <div className="ed-wrap">
          <div className="ed-head">
            <div>
              <Label>Ongoing support</Label>
              <Headline
                as="h2"
                id="care-title"
                text={'Don’t just launch.\n*Keep growing.*'}
              />
            </div>
            <Reveal as="p" className="ed-lead" delay={200}>
              Your website is the beginning, not the end. Keep your digital
              presence secure, visible and growing with ongoing support.
            </Reveal>
          </div>

          <ul className="ed-rows">
            {recurring.map((plan, index) => (
              <Reveal key={plan.name} as="li" delay={index * 80} className="ed-row">
                <div className="ed-row-main">
                  <h3>{plan.name}</h3>
                  <p>{plan.description}</p>
                </div>

                <ul className="ed-ticks ed-row-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="ed-row-buy">
                  <p className="ed-row-price">
                    {plan.price}
                    <small>{plan.period}</small>
                  </p>
                  <a className="ed-btn" href={enquiryMailto(`${plan.name} plan enquiry`)}>
                    Ask about this
                  </a>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <Process label="How we’ll work" />

      {/* ===== FAQ ===== */}
      <section className="ed-sec ed-sec--paper" aria-labelledby="faq-title">
        <div className="ed-wrap">
          <div className="ed-head">
            <div>
              <Label>Good to know</Label>
              <Headline as="h2" id="faq-title" text={'Questions,\n*answered.*'} />
            </div>
          </div>

          <Reveal className="ed-faq">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <ContactCta
        tone="dark"
        label="Not sure where to start?"
        title={'Let’s work out\n*your next step.*'}
        note="Tell me about your business, your goals and where you want to go, and I’ll help you decide on the right solution."
      />
    </div>
  )
}
