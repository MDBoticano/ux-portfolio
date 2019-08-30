import React from "react"
import Navigation from './navigation'
import Footer from './footer'


import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div id="main">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
