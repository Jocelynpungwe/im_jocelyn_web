import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles.css'

import './home.css'
import './styles/business.css'
import './styles/management.css'
import './styles/portfolio.css'
import './styles/luxury-pages.css'
import './styles/luxury-home.css'
import './styles/luxury-case.css'
import './styles/editorial.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
