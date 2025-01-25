import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact">
      <img src='/assets/KMPhoto.png' alt="Kisha Martin Photo" className="contact-image" />
      <div className="contact-info">
        <p>Design and code by Kisha Martin</p>
        <p>Typeset in Saans by Displaay Type Foundry</p>
        <br />
        <a href="mailto:hello@kishamartin.com">hello@kishamartin.com</a> ·{' '}
        <a href="https://www.linkedin.com/in/kmartin2120/" target="_blank" rel="noopener noreferrer">LinkedIn</a> ·{' '}
        <a href="https://github.com/XOKEESH" target="_blank" rel="noopener noreferrer">GitHub</a> ·{' '}
        <a href="https://docs.google.com/document/d/1OmcAuKrqNDHAZm4MX_Te9ntRA8-vNDLxaroeqO5-tsw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
      <p>© 2025</p>
    </section>
  )
}

export default Contact
