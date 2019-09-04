import React from 'react'
import { Link } from 'gatsby'

const ProjectPreview = ({ title, description, link }) => {
  return (
    <div className="project-summary">
      <Link to={link} >
        <p className="project-title"> { title } </p>
      </Link>
      <p className="project-description"> { description } </p>
    </div>
  )
}

export default ProjectPreview