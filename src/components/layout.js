import React from "react"
import Navigation from './navigation'


import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div id="main">
      <Navigation />
      {children}
    </div>
  )
}

export default Layout
