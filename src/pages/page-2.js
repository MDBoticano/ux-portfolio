import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the "secret" table of contents</h1>
    <p>Welcome!</p>
    <ul>
      <li><Link to="/">Go back to the homepage</Link></li>
      <li><Link to="/error">Go to Error page</Link></li>
      <li><Link to="/projects/test-md">Markdown Page 1</Link></li>
      <li>
        <a href="https://www.marloboticano.com/frank-ocean-lyrics">Frank Lyrics</a>
      </li>
    </ul>    
  </Layout>
)

export default SecondPage
