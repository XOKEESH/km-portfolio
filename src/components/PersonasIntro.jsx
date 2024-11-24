import React, { useState } from 'react'
import './PersonasIntro.css'

const PersonasIntro = () => {
  const [selectedPersona, setSelectedPersona] = useState('forAnyone')

  const intros = {
    forAnyone: "Hello there, I'm a designer who cares about making beautiful things that help people.",
    recruiters: "I'm a product designer with 15 years of experience across brand and product, at companies large and small. I'm not actively looking for a new role.",
    designDirectors: "I take pride in my craft, and love mentoring earlier career designers. I develop cross functional partnerships, and thrive in complex, ambiguous environments.",
    productDesigners: "I'm a systems thinker with a high bar for quality. From process to pixels, I'll collaborate with you, learn from you, and help make something we're proud of.",
    productManagers: "I bring end-to-end product acumen, from vision and strategy to discovery and delivery. I'll partner closely with you to generate the highest impact possible.",
    engineers: "I'm {highly_technical} and while (I'm ≠ engineer), I know my way /around and can speak 'fluently' with you. I built (this.site) from scratch + (this.one) && (this.too)."
  }

  return (
    <div className="personas-intro">
      {/* Persona Links */}
      <ul className="personas-links">
        <li><a href="#" onClick={() => setSelectedPersona('forAnyone')}>For Anyone</a></li>
        <li><a href="#" onClick={() => setSelectedPersona('recruiters')}>Recruiters</a></li>
        <li><a href="#" onClick={() => setSelectedPersona('designDirectors')}>Design Directors</a></li>
        <li><a href="#" onClick={() => setSelectedPersona('productDesigners')}>Product Designers</a></li>
        <li><a href="#" onClick={() => setSelectedPersona('productManagers')}>Product Managers</a></li>
        <li><a href="#" onClick={() => setSelectedPersona('engineers')}>Engineers</a></li>
      </ul>

      {/* Display Selected Intro */}
      <div className="intro">
        <p>{intros[selectedPersona]}</p>
      </div>
    </div>
  )
}

export default PersonasIntro

