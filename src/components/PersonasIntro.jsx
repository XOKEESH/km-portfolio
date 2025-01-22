import React, { useState } from 'react'
import './PersonasIntro.css'

const PersonasIntro = () => {
  const [selectedPersona, setSelectedPersona] = useState('forAnyone')

  const intros = {
    forAnyone: "Hello there! I'm a designer and engineer who's passionate about creating thoughtful, user-centered solutions that make life easier.",
    recruiters: "I'm a Designer and Engineer with 10+ years of cross-functional experience, combining design expertise and technical skills to deliver solutions that drive user satisfaction and business impact.",
    designDirectors: "I take pride in my craft, and love mentoring earlier career designers. I develop cross functional partnerships, and thrive in complex, ambiguous environments.",
    productDesigners: "I'm a systems thinker with a high bar for quality. From process to pixels, I'll collaborate with you, learn from you, and help make something we're proud of.",
    productManagers: "I bring end-to-end product acumen, from vision and strategy to discovery and delivery. I'll partner closely with you to generate the highest impact possible.",
    engineers: "I'm {highly_technical} and while (I'm ≠ engineer), I know my way /around and can speak 'fluently' with you. I built (this.site) from scratch + (this.one) && (this.too)."
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

