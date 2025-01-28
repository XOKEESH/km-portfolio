import React, { useState } from 'react'
import './Work.css'

const Work = () => {
  const [selectedProjects, setSelectedProjects] = useState('SEProjects')
  const [hoveredProject, setHoveredProject] = useState(null)

  const work = {
    SEProjects: [
      {
        company: "Tic Tac Toe",
        title: "Software Engineer",
        year: "2024",
        description: "A simple take on the classic Tic Tac Toe game.",
        thumbnail: "/assets/TTT Thumbnail.png"
      },
      {
        company: "Saucy",
        title: "Full Stack Developer",
        year: "2024",
        description: "A responsive tool that helps users discover and create cocktails with an intuitive interface powered by a cocktail API.",
        thumbnail: ""
      }
    ],
    UXProjects: [
      {
        company: "Wintrust Bank",
        title: "UX Designer",
        year: "2022",
        description: "Supporting Wintrust customers by providing access to financial literacy tools and resources within their banking app.",
        thumbnail: ""
      },
      {
        company: "Cottage Software",
        title: "UX Designer",
        year: "2022",
        description: "New onboarding experience and website redesign for a freelancing platform for Startups and Software Engineers.",
        thumbnail: ""
      },
      {
        company: "Effacé Aesthetics",
        title: "Product Designer",
        year: "2022",
        description: "Product shop redesign for a Los Angeles based Medical Spa.",
        thumbnail: ""
      }
    ]
  }

  return (
  <section className="work">
  {/* Project Links */}
  <div className="project-nav">
    <ul className="project-links">
      <li>
      <a 
          href="#" 
          className={selectedProjects === 'SEProjects' ? 'active' : ''} 
          onClick={(e) => {
            e.preventDefault()
            setSelectedProjects('SEProjects')
            setHoveredProject(null) 
          }}
        >
          SE Projects 
        </a>
      </li>
      <span className="separator">·</span>
      <li>
        <a 
          href="#" 
          className={selectedProjects === 'UXProjects' ? 'active' : ''} 
          onClick={(e) => {
            e.preventDefault()
            setSelectedProjects('UXProjects')
            setHoveredProject(null)
          }}
        >
          UX Projects
        </a>
      </li>
    </ul>
  </div>

        {/* Display Thumbnail, hidden by default */}
        <div className="thumbnail-section">
        {hoveredProject && hoveredProject.thumbnail && (
          <img 
            src={hoveredProject.thumbnail}
            alt={`${hoveredProject.title} thumbnail`}
            className="project-thumbnail"     
          />
        )}
        </div>
        
        {/* Display Selected Projects */}
        <div className="work-section">
        {work[selectedProjects]?.map((project, index) => (
          <div 
            className="project-card" 
            key={index}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => setHoveredProject(project)}
          >
            <div className="project-header">
              <p className="project-company">
                {project.company} · <span className="project-title">{project.title} ·</span>{' '}
                <span className="project-year">{project.year}</span>
              </p>
            </div>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
</section>
  )
}

export default Work
