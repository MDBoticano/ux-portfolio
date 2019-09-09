import React from "react"

import { Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"

const PageNotFound = () => (
  // <div className="mb-main">
  <div className="mb-content-404">
    <SEO title="404: Not Found" />
    <div className="page-not-found">
      <p id="big-404">404</p>
      <h1 id="description-404">PAGE NOT FOUND</h1>
      <Link to="/" id="go-home">Return to Homepage</Link>
    </div>
  </div>
  // </div>
)

export default PageNotFound