import React from 'react'
import { Link } from 'gatsby'

const ProjectsFooter = ({ active }) => {
  const projectsList = [
    {
      title: 'All',
      path: '/'
    },
    { 
      title: 'Feed the Kids',
      path: '/projects/feed-the-kids'
    },
    { 
      title: 'Matchmaker',
      path: '/projects/matchmaker'
    },
    { 
      title: 'OilGo',
      path: '/projects/oilgo'
    },
    { 
      title: 'UC Socially Driven',
      path: '/projects/uc-socially-driven'
    },

  ]

  const isProjectActive = (project, active) => {
    if (project.title === active) {
      return "active-project-link"
    } else {
      return ""
    }
  }

  const listProjects = ( projects ) => {
    const projectLinks = projects.map( (project) => {
     
      return (
      <Link 
        to={project.path} 
        className={`footer-link ${isProjectActive(project, active)}`}
        key={project.title}
      >
        {project.title}
      </Link>)
    })

    return projectLinks
  }

  return (
    <div className="projects-footer">
      {/* <p className="projects-footer-description">
        Projects
      </p> */}
      <div className="projects-list-links">
        {listProjects(projectsList)}
      </div>
    </div>
  )
}

export default ProjectsFooter