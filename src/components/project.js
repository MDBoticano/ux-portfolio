import React from 'react'
import { Link } from 'gatsby'
import ProjectPreview from './projectPreview'

const Project = ({ title, description, link, image }) => {
  return (
    <li className = "project-row">
      <div className = "project-image">
        <Link to = { link }>
          {image}
        </Link>

      </div>

      <ProjectPreview 
        title = { title }
        description = { description }
        link = { link }
      />

    </li>
  )
}

export default Project