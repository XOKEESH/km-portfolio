import React from 'react'
import './References.css'

const References = () => {
  const references = [
    {
        quote: "Kisha consistently demonstrated her potential as a valuable asset to any development team. She is proactive in seeking clarification on project requirements and strives to enhance the quality of her work in both programming and design aspects.",
        author: "Ben Manning",
        role: "Software Engineer & Instructor"
    },
    {
        quote: "Kisha consistently delivered beautiful, immersive, and responsive designs with an eye for detail that would be hard to match. She functions at a high level both as an individual contributor and as a member of a larger team.",
        author: "Sara Searson",
        role: "Software Engineer"
    },
    {
        quote: "Kisha's applications were some of the most beautifully sophisticated and professional-looking in our cohort, a testament to her remarkable talent as both a software engineer and UX designer.",
        author: "Molly Parente",
        role: "Software Engineer"
    },
    {
        quote: "Kisha is a motivated and forward-thinking UX designer. She's wonderful to work with and has an impeccable eye for detail. I can't say enough great things about Kisha and I look forward to seeing where her leadership and talents take her.",
        author: "Marianna Hernandez",
        role: "UX Researcher"
    },
    {
        quote: "Kisha is a team player and is motivated and driven to stay on top of projects. Any company will be fortunate to have her on board!",
        author: "Shirley Zhao",
        role: "Product Designer"
    },
    {
        quote: "To say that I am blown away by the quality of Kisha's work would be an understatement. I can confidently attest to her advanced level of expertise.",
        author: "Hunter Hodnett",
        role: "CTO & Co-Founder"
    },
  ]

  return (
    <section className="references">
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
