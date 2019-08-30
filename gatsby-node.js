/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// Gatsby: Adding markdown pages (.md and .mdx)
const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`)
  const mdxTemplate = path.resolve(`src/templates/mdxTemplate.js`)

  /* For .md */
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)


  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  /* For .mdx */
  const mdxQuery = await graphql(`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            path
          }
        }
      }
    }
  }
`)
  if (mdxQuery.errors) {
    reporter.panicOnBuild(`Error while querying mdx`)
    return
  }

  mdxQuery.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: mdxTemplate,
      context: { id: node.id }, 
    })
  })
}