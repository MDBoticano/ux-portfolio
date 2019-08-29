import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TableOfContents = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the "secret" table of contents</h1>
    <p>Welcome!</p>
    <ul>
      Portfolio Pages
      <li><Link to="/">Homepage</Link></li>
      <li><Link to="/projects/test-md">Markdown Page 1</Link></li>
    </ul>
    <p>Interested in my development work? Checkout my&nbsp;
    <a href="https://mdboticano.github.io">
      dev portfolio
    </a>
    &nbsp;instead</p>
  </Layout>
)

export default TableOfContents
