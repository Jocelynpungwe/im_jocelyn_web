import React from 'react'
import { Outlet } from 'react-router-dom'

import PublicNavbar from '../components/PublicNavbar.jsx'
import SiteFooter from '../components/editorial/SiteFooter.jsx'

export default function PublicLayout() {
  return (
    <div className="public-site lux-theme">
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>

      <PublicNavbar />

      <main>
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  )
}
