import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Project from './project'

const Info = () => {
  /* Queries: Have to be done individually until queries take variables */
  const ProjectThumbnails = useStaticQuery(graphql`
    query {
      FTK: file(relativePath: { eq: "feed-the-kids/ftk_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      MM: file(relativePath: { eq: "matchmaker/mm_poster_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      OG: file(relativePath: { eq: "oilgo/og_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      SD: file(relativePath: { eq: "uc-socially-driven/sd_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  
  /* Turn query results into Gatsby Image, then pass as prop */
  const ftkImage = <Img fluid={ProjectThumbnails.FTK.childImageSharp.fluid} 
    alt='Feed the Kids registration form' />
  const mmImage = <Img fluid={ProjectThumbnails.MM.childImageSharp.fluid} 
    alt='Matchmaker poster' />
  const ogImage = <Img fluid={ProjectThumbnails.OG.childImageSharp.fluid} 
    alt='OilGo app screen' />
  const sdImage = <Img fluid={ProjectThumbnails.SD.childImageSharp.fluid} 
    alt='UC Socially Driven app screen' />

  return (
    <div className="mb-content-info">
    <div className="info">
      <div className="mb-summary">
        <p className="mb-name">Marlo&nbsp;Boticano</p>
        <p className="mb-title">User Researcher</p>
      </div>
      
      <ul className="projects-grid">
      <Project 
        title='Feed the Kids'
        link='/projects/feed-the-kids'
        ariaLabelText='View Feed the Kids project details'
        description='How might we help a non-profit fight food insecurity more efficiently?'
        image={ftkImage}
      />

      <Project 
        title='Matchmaker' 
        link='/projects/matchmaker'
        ariaLabelText='View Matchmaker project details'
        description='How might we better bridge the gap from graduation to employment?'
        image={mmImage}
      />

      <Project
        title='OilGo'
        link='/projects/oilgo'
        ariaLabelText='View OilGo project details'
        description='How might we reduce the frustrations of car maintenance?'
        image={ogImage}
      />

      <Project
        title='UC Socially Driven'
        link='/projects/uc-socially-driven'
        ariaLabelText='View UC Socially Driven project details'
        description='How might we encourage social activities that foster a better sense of community?'
        image={sdImage}
      />
      </ul>
    </div>
    </div>
  )
}

export default Info