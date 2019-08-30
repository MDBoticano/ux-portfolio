import React, { useEffect } from "react"
import Navigation from './navigation'
import Footer from './footer'


import "./layout.scss"

const Layout = ({ children }) => {

  useEffect( () => {
    console.log('Rendering layout: should only see this when page refreshed')
  }, [])
  

  return (
    <div id="main">
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
