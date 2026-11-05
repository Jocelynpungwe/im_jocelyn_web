import React from 'react'

import PortfolioHero from '../components/public/PortfolioHero.jsx'
import ContactCta from '../components/editorial/ContactCta.jsx'
import {
  AboutPreview,
  FeaturedWork,
  Intro,
  ServicesSection,
} from '../components/editorial/HomeSections.jsx'
import Process from '../components/editorial/Process.jsx'
import Testimonials from '../components/editorial/Testimonials.jsx'
import usePageMeta from '../components/editorial/usePageMeta.js'

export default function Home() {
  usePageMeta(
    'StartupLift Dev | Web developer for growing businesses',
    'I design, build and look after websites, web applications and dashboards for entrepreneurs and growing businesses, from the first sketch to launch day and the support after.',
  )

  return (
    <div className="home-page">
      {/* ================= SCROLL-STORY HERO (protected: do not modify) ================= */}
      <PortfolioHero />

      {/* ================= EVERYTHING BELOW THE HERO ================= */}
      <div className="ed">
        <Intro />
        <FeaturedWork />
        <ServicesSection />
        <Process />
        <AboutPreview />

        {/* real client quotes appear here once some are added in src/data/testimonials.js */}
        <Testimonials tone="dark" />

        <ContactCta />
      </div>
    </div>
  )
}
