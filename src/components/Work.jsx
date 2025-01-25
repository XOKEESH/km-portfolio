import React, { useState } from 'react'
import './Work.css'

const Work = () => {
  const [selectedProjects, setSelectedProjects] = useState('UXProjects')

  const work = {
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
      company: "Effacé Aestetics",
      title: "Product Designer",
      year: "2022",
      description: "Product shop redesign for a Los Angeles based Medical Spa.",
      thumbnail: ""
    }
  ],
  SEProjects: [
    {
      company: "Startup X",
      title: "Software Engineer",
      year: "2023",
      description: "Built a scalable backend system that reduced API latency by 40%.",
      thumbnail: ""
    },
    {
      company: "Tech Y",
      title: "Frontend Developer",
      year: "2022",
      description: "Developed a React-based web app, achieving 99% accessibility compliance.",
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
          }}
        >
          UX Projects
        </a>
      </li>
    </ul>
  </div>

  {/* Display Selected Projects */}
  <div className="work-section">
        {work[selectedProjects]?.map((project, index) => (
          <div className="project-card" key={index}>
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
