import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from '../components/seo'

export default function MdxTemplate({ data: { mdx } }) {
  return (
    <>
      <SEO title={mdx.frontmatter.title} />
      <div className="blog">
        <div className="blog-post-container">
          <div className="blog-post">
            <div className="blog-post-content">
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
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