import React from "react"

import { Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"

const PageNotFound = () => (
  <>
    <SEO title="404: Not found" />
    <div className="info four-zero-four">
      <p id="big-404">404</p>
      <h1 id="description-404">PAGE NOT FOUND</h1>
      <Link to="/" id="go-home">Return to Homepage</Link>
    </div>
  </>
)

export default PageNotFound