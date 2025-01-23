import React, { useState } from 'react'
import './PersonasIntro.css'

const PersonasIntro = () => {
  const [selectedPersona, setSelectedPersona] = useState('forAnyone')

  const intros = {
    forAnyone: "Hello there! I'm a designer and engineer who's passionate about creating thoughtful, user-centered solutions that make life easier.",
    recruiters: "I'm a Designer and Engineer with 10+ years of cross-functional experience, combining design expertise and technical skills to deliver solutions that drive user satisfaction and business impact.",
    designDirectors: "I thrive in complex, ambiguous environments where collaboration and adaptability are key. My diverse background allows me to bridge perspectives and ensure every solution is both thoughtful and functional.",
    productDesigners: "I'm a meticulous designer who thrives on collaboration, creating seamless, meaningful experiences that solve real problems. I'll collaborate with you, learn from you, and help make something we're proud of.",
    productManagers: "I bring a user-focused mindset and a deep understanding of both design and development, connecting strategy and execution to deliver solutions that work for users and businesses alike.",
    engineers: "I'm a results-driven engineer who excels in solving complex challenges, creating scalable, high-quality solutions that integrate seamlessly into the user experience."
  }

  return (
    <div className="personas-intro">
      {/* Persona Links */}
      <div className="persona-nav">
      <ul className="personas-links">
        <li><a href="#" onClick={() => setSelectedPersona('forAnyone')}>For Anyone</a></li>
        <li><a href="#" onClick={() => setSelectedPersona('recruiters')}>Recruiters</a></li>
        <li><a href="#" onClick={() => setSelectedPersona('designDirectors')}>Design Directors</a></li>
        <li><a href="#" onClick={() => setSelectedPersona('productDesigners')}>Product Designers</a></li>
        <li><a href="#" onClick={() => setSelectedPersona('productManagers')}>Product Managers</a></li>
        <li><a href="#" onClick={() => setSelectedPersona('engineers')}>Engineers</a></li>
      </ul>
      </div> 

        {/* Display Selected Intro */}
        <div className="intro">
          <p>{intros[selectedPersona]}</p> 
      </div>
    </div>
  )
}

export default PersonasIntro

