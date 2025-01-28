import React, { useState } from 'react'
import './About.css'
import Gallery from './Gallery' 

const About = () => {
  const [showGallery, setShowGallery] = useState(false)

  return (
    <section className="about">
      <h2>Dreamer, Creative, and Lover of the Arts</h2>
      <div className="about-left">
        <p>
          I'm a UX Designer and Software Engineer with a creative and technical background that's anything but typical. My passion lies in bridging design and development to craft thoughtful, user-centered digital experiences.
        </p>
      </div>
      <div className="about-right">
        <p>
          Outside of work, I'm a community builder, hosting and teaching sewing workshops—a rewarding way to share my love for design with fellow creatives. I also enjoy exploring art galleries, attending creative workshops, discovering new restaurants, and listening to music. Life stays fun and entertaining thanks to my two dogs, Kniko, a Boston Terrier, and Stormi, a French Bulldog.
        </p>
        <p>  
          I'm excited to collaborate on projects that push boundaries, create impact, and bring people closer to what matters.
        </p>
      </div>

      {/* Button to toggle the gallery */}
      <div className="gallery-section">
      <button onClick={() => setShowGallery(!showGallery)}>
        {showGallery ? 'Hide Gallery' : 'View Gallery'}
      </button>

      {showGallery && <Gallery />}
    </div>
  </section>
  )
}

export default About