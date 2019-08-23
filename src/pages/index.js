import React from "react"

import SEO from "../components/seo"
import Info from "../components/info"
import Layout from "../components/layout"

import "typeface-overpass-mono"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Info />
    </ Layout>
  )
}

export default IndexPage