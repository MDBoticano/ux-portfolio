import React from 'react'
import { Link } from 'gatsby'
import LogoImage from './logo'

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="my-logo">
        <LogoImage />
      </div>
      <div className="links">
        <Link to="/">Work</Link>
        <Link to="/about">About</Link>
        <a href="https://drive.google.com/open?id=1zILQT_FgdzYh6saWl1oBFD9sK32U0Uh_"
          target="_blank">
          Resume
        </a>
      </div>
    </div>
  )
}

export default Navigation