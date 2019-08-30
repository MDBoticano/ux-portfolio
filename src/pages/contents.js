import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"

const TableOfContents = () => (
  <>
    <SEO title="Contents" />
    <div className="table-of-contents">
      <h1>Hi from the "secret" table of contents</h1>
      <p>Welcome!</p>
      <p>Nav Pages</p>
      <ul>        
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/about/me">About / Me</Link></li>
        <li><Link to="/404">404</Link></li>
        <li><Link to="/405">405</Link></li>
      </ul>

      <p>Project Pages</p>
      <ul>        
        <li><Link to="/projects/feed-the-kids">Feed the Kids</Link></li>
      </ul>


      <p>Interested in my development work? Checkout my&nbsp;
        <a href="https://mdboticano.github.io">
          dev portfolio
        </a>
        &nbsp;instead
      </p>
    </div>
  </>
)

export default TableOfContents