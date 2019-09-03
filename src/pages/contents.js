import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"

const TableOfContents = () => (
  <>
    <SEO title="Contents" />
    <div className="table-of-contents">
      <h1>Hello from the table of contents!</h1>
      <p>Welcome!</p>
      <p>Nav Pages</p>
      <ul>        
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/404">404</Link></li>
      </ul>

      <p>Project Pages</p>
      <ul>        
        <li><Link to="/projects/feed-the-kids">Feed the Kids</Link></li>
        <li><Link to="/projects/matchmaker">Matchmaker</Link></li>
        <li><Link to="/projects/uc-socially-driven">UC Socially Driven</Link></li>
        <li><Link to="/projects/oilgo">OilGo</Link></li>
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