import React from 'react'
import './Work.css'

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    console.log('Hovering over:', card.querySelector('.project-title').textContent);
  });
});

const Work = () => {
  return (
    <section id="work" className="section">
      <div class="portfolio-section">
        <div class="project-card">
          <div class="project-image">
            <img src="path-to-image.jpg" alt="Project Title" />
          </div>
          <div class="project-info">
            <h3 class="project-title">Project Title</h3>
            <p class="project-description">A brief description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
