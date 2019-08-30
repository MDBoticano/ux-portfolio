import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/contents" className="link-to-contents">Contents</Link>
    </div>
  )
}

export default Footer