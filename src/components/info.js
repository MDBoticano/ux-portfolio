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
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      MM: file(relativePath: { eq: "matchmaker/mm_poster_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      OG: file(relativePath: { eq: "oilgo/og_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      SD: file(relativePath: { eq: "uc-socially-driven/sd_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  
  /* Turn query results into Gatsby Image, then pass as prop */
  const ftkImage = <Img fluid={ProjectThumbnails.FTK.childImageSharp.fluid}/>
  const mmImage = <Img fluid={ProjectThumbnails.MM.childImageSharp.fluid}/>
  const ogImage = <Img fluid={ProjectThumbnails.OG.childImageSharp.fluid}/>
  const sdImage = <Img fluid={ProjectThumbnails.SD.childImageSharp.fluid}/>

  return (
    <div className="mb-content-info">
    <div className="info">
      <p className="mb-name">Marlo&nbsp;Boticano</p>
      <p className="mb-title">User Researcher</p>
      
      <ul className="projects-grid">
      <Project 
        title='Feed the Kids'
        link='/projects/feed-the-kids'
        description='How might we help a non-profit fight food insecurity more efficiently?'
        image={ftkImage}
      />

      <Project 
        title='Matchmaker' 
        link='/projects/matchmaker'
        description='How might we better bridge the gap from graduation to employment?'
        image={mmImage}
      />

      <Project
        title='OilGo'
        link='/projects/oilgo'
        description='How might we reduce the frustrations of car maintenance?'
        image={ogImage}
      />

      <Project
        title='UC Socially Driven'
        link='/projects/uc-socially-driven'
        description='How might we encourage social activities that foster a better sense of community?'
        image={sdImage}
      />
      </ul>
    </div>
    </div>
  )
}

export default Info