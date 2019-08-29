import React from "react"


import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div id="main">
      {children}
    </div>
  )
}

export default Layout
