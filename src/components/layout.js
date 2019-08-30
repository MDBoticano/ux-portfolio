import React, { useEffect } from "react"
import Navigation from './navigation'
import Footer from './footer'


import "./layout.scss"

const Layout = ({ children }) => {
  useEffect(()=> {
    console.log('mounting')
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
