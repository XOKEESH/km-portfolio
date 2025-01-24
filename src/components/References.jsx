import React from 'react'
import './References.css'

const References = () => {
  const references = [
    {
      quote: "Kisha is a motivated and forward-thinking UX designer. She's wonderful to work with and has an impeccable eye for detail.",
      author: "Marianna Hernandez",
      role: "UX Researcher"
    },
    {
      quote: "Kisha is a team player and is motivated and driven to stay on top of projects. Any company will be fortunate to have her on board!",
      author: "Shirley Zhao",
      role: "UX Researcher"
    },
    {
      quote: "To say that I am blown away by the quality of Kisha's work would be an understatement. I can confidently attest to her advanced level of expertise.",
      author: "Hunter Hodnett",
      role: "CTO & Co-Founder"
    },
  ]

  return (
    <section id="references" className="references">
      {references.map((ref, index) => (
        <div className="reference-card" key={index}>
          <p className="quote">“{ref.quote}”</p>
          <p className="author">
            {ref.author} <span className="role">{ref.role}</span>
          </p>
        </div>
      ))}
    </section>
  )
}

export default References
