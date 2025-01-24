import React from 'react'
import './Background.css'

const Background = () => {
  return (
    <section id="background" className="background">
      <div className="background-left">
        <p>
          My career journey began in fashion design, where I launched my own brand and worked as a 
          Creative Director for other brands. I even had the privilege of collaborating with big names 
          and celebrities. Along the way, I honed my skills in leadership, communication, and customer 
          experience through roles in management, sales, and customer service.
        </p>
      </div>
      <div className="background-right">
        <p>
          In 2022, I earned a UX Design certificate from General Assembly, supported by a full 
          scholarship from <span className="highlight">Microsoft</span>, which deepened my commitment to 
          creating thoughtful, user-centered digital experiences. In 2024, I further expanded my technical expertise by earning a Software Engineering 
          certificate from General Assembly, solidifying my ability to bridge design and development.
        </p>
        <p>
          Now, I combine my design and engineering skills to craft innovative products that truly meet 
          users' needs.
        </p>
      </div>
    </section>
  )
}

export default Background


