import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from '../components/seo'

export default function MdxTemplate({ data: { mdx } }) {
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <div className="blog">
        <div className="blog-content-container">
          <div className="blog-content">
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </div>
        </div>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`