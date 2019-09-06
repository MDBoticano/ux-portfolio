import React from "react"
import Navigation from './navigation'
import Footer from './footer'

import "./layout.scss"

const Layout = ({ children, location }) => {
  const pagesWithFooter = [
    '/',
    '/about',
  ]

  const shouldHaveFooter = (path) => {
    return (pagesWithFooter.includes(path))
  }

  const renderFooter = (loc) => {
    if (shouldHaveFooter(loc.pathname) ) {
      return <Footer />
    }
  }

  return (
    <div id="main" className="layout">
      <Navigation />
      {children}
      {renderFooter(location)}
    </div>
  )
}

export default Layout