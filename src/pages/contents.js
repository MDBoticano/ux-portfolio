import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TableOfContents = () => (
  <Layout>
    <SEO title="Contents" />
    <div className="table-of-contents">
      <h1>Hi from the "secret" table of contents</h1>
      <p>Welcome!</p>
      <p>Portfolio Pages</p>
      <ul>        
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/404">404</Link></li>
      </ul>
      <p>Interested in my development work? Checkout my&nbsp;
    <a href="https://mdboticano.github.io">
          dev portfolio
    </a>
        &nbsp;instead</p>
    </div>
  </Layout>
)

export default TableOfContents
