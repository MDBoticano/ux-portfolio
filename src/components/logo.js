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
const logoContainerMaxWidth = '3.5em'
const altText = 'shoe logo'
const ariaLabelText = 'return to homepage'

const logoContainerStyle = {
  maxWidth: logoContainerMaxWidth
}

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
    <Link to="/" className="logo-container" style={logoContainerStyle} 
      role="img" aria-label={ariaLabelText}
    >
      <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={altText} />
    </Link>
  )
}

export default LogoImage