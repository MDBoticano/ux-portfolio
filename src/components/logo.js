import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
// Inline styling for logo: moved to layout.scss, but if issues arise, revert
// const logoContainerMaxWidth = '3.5em'
// const logoContainerStyle = {
//   maxWidth: logoContainerMaxWidth
// }
const altText = 'shoe logo'
const ariaLabel = 'return to homepage'

const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "shoe-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Link to="/" className="logo-container" role="img" aria-label={ariaLabel} >
      <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={altText} />
    </Link>
  )
}

export default LogoImage