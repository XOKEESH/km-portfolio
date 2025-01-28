import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import './Gallery.css'

const images = [
  { id: 1, src: 'your-image-url1.jpg', alt: 'Description 1' },
  { id: 2, src: 'your-image-url2.jpg', alt: 'Description 2' },
  { id: 3, src: 'your-image-url3.jpg', alt: 'Description 3' },
]

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const breakpointColumnsObj = {
    default: 4, // 4 columns on large screens
    1024: 3, // 3 columns on medium screens
    768: 2, // 2 columns on tablets
    500: 1, // 1 column on small screens
  }

  return (
    <div className="gallery-container">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
            onClick={() => openLightbox(index)}
          />
        ))}
      </Masonry>

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
    </div>
  )
}

export default Gallery
