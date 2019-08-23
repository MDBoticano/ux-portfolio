import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <ul>
      <li><Link to="/">Go back to the homepage</Link></li>
      <li><Link to="/error">Go to Error page</Link></li>
      <li>
        <a href="https://www.marloboticano.com/frank-ocean-lyrics">Frank Lyrics</a>
      </li>
    </ul>    
  </Layout>
)

export default SecondPage
