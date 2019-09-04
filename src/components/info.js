import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import ProjectPreview from './projectPreview'

const Info = () => {
  /* Queries: Have to be done individually until queries take variables */
  const ProjectThumbnails = useStaticQuery(graphql`
    query {
      FTK: file(relativePath: { eq: "feed-the-kids/ftk_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      MM: file(relativePath: { eq: "matchmaker/mm_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      OG: file(relativePath: { eq: "oilgo/og_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      UCSD: file(relativePath: { eq: "uc-socially-driven/ucsd_thumbnail.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div className="info">
      <h1 className="mb-name">Marlo&nbsp;Boticano</h1>
      <ul className="projects-grid">
        
        <li className="project-row">
          <div className="project-image">
            <Link to='/projects/feed-the-kids'>
              <Img fluid={ProjectThumbnails.FTK.childImageSharp.fluid}/>
            </Link>
          </div>

          <ProjectPreview 
            title={'Feed the Kids'}
            description={'Hungry.'}
            link={'/projects/feed-the-kids'}
          />
        </li>

        <li className="project-row">
          <div className="project-image">
            <Link to='/projects/matchmaker'>
              <Img fluid={ProjectThumbnails.MM.childImageSharp.fluid}/>
            </Link>
          </div>

          <ProjectPreview 
            title={'Feed the Kids'}
            description={'Hungry.'}
            link={'/projects/matchmaker'}
          />
        </li>

        <li className="project-row">
          <div className="project-image">
            <Link to='/projects/matchmaker'>
              <Img fluid={ProjectThumbnails.OG.childImageSharp.fluid}/>
            </Link>
          </div>

          <ProjectPreview 
            title={'Feed the Kids'}
            description={'Hungry.'}
            link={'/projects/matchmaker'}
          />
        </li>

        <li className="project-row">
          <div className="project-image">
            <Link to='/projects/uc-socially-driven'>
              <Img fluid={ProjectThumbnails.UCSD.childImageSharp.fluid}/>
            </Link>
          </div>

          <ProjectPreview 
            title={'Feed the Kids'}
            description={'Hungry.'}
            link={'/projects/matchmaker'}
          />
        </li>

        
      </ul>
    </div>
  )
}

export default Info