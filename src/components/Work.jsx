import React, { useState } from 'react'
import './Work.css'

const Work = () => {
  const work = [
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
  ]

  return (
    <section className="work">
      {work.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-header">
            <p className="project-company">
              {project.company} · <span className="project-title">{project.title} ·</span> <span className="project-year"> {project.year}</span>
            </p>
          </div>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </section>  
  )
}

export default Work
