import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import './About.css'

const images = [
  { id: 1, src: '/assets/workshop2.png', alt: 'Description 1' },
  { id: 2, src: '/assets/cardi.png', alt: 'Description 2' },
  { id: 3, src: '/assets/workshop.png', alt: 'Description 3' },
  { id: 4, src: '/assets/kniko.JPG', alt: 'Description 4' },
  { id: 5, src: '/assets/IMG_6345.jpg', alt: 'Description 5' },
  { id: 6, src: '/assets/stormi.png', alt: 'Description 6' },
  { id: 1, src: '/assets/workshop2.png', alt: 'Description 1' },
  { id: 2, src: '/assets/cardi.png', alt: 'Description 2' },
  { id: 3, src: '/assets/workshop.png', alt: 'Description 3' },
  { id: 4, src: '/assets/kniko.JPG', alt: 'Description 4' },
  { id: 5, src: '/assets/IMG_6345.jpg', alt: 'Description 5' },
  { id: 6, src: '/assets/stormi.png', alt: 'Description 6' },
]

const About = () => {
  const [showGallery, setShowGallery] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const breakpointColumnsObj = {
    default: 4,
    1024: 3,
    768: 2,
    500: 1,
  }

  return (
    <section className={`about ${showGallery ? 'gallery-open' : ''}`}>
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
        <ul className="gallery-links">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setShowGallery(!showGallery) }}>
              {showGallery ? 'Close Gallery' : 'View Gallery'}
            </a>
          </li>
        </ul>
      </div>

        {showGallery && (
          <div className="gallery-container">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {images.map((image, index) => (
                <div key={image.id} className="gallery-item" onClick={() => openLightbox(index)}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="gallery-image"
                  />
                </div>
              ))}
            </Masonry>
          </div>
        )}    

            {lightboxOpen && (
              <Lightbox
                mainSrc={images[currentImageIndex].src}
                nextSrc={images[(currentImageIndex + 1) % images.length].src}
                prevSrc={images[(currentImageIndex + images.length - 1) % images.length].src}
                onCloseRequest={() => setLightboxOpen(false)}
                onMovePrevRequest={() =>
                  setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                  setCurrentImageIndex((currentImageIndex + 1) % images.length)
                }
              />
            )} 
    </section>
  )
}

// const About = () => {
//   const [showGallery, setShowGallery] = useState(false)

//   return (
//     <section className="about">
//       <h2>Dreamer, Creative, and Lover of the Arts</h2>
//       <div className="about-left">
//         <p>
//           I'm a UX Designer and Software Engineer with a creative and technical background that's anything but typical. My passion lies in bridging design and development to craft thoughtful, user-centered digital experiences.
//         </p>
//       </div>
//       <div className="about-right">
//         <p>
//           Outside of work, I'm a community builder, hosting and teaching sewing workshops—a rewarding way to share my love for design with fellow creatives. I also enjoy exploring art galleries, attending creative workshops, discovering new restaurants, and listening to music. Life stays fun and entertaining thanks to my two dogs, Kniko, a Boston Terrier, and Stormi, a French Bulldog.
//         </p>
//         <p>  
//           I'm excited to collaborate on projects that push boundaries, create impact, and bring people closer to what matters.
//         </p>
//       </div>

//       <div className="gallery-section">
//       <button onClick={() => setShowGallery(!showGallery)}>
//         {showGallery ? 'Hide Gallery' : 'View Gallery'}
//       </button>

//       {showGallery && <Gallery />}
//     </div>
//   </section>
//   )
// }

export default About

