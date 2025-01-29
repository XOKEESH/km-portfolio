import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import './Gallery.css'

const images = [
  { id: 1, src: '/assets/workshop2.png', alt: 'Description 1' },
  { id: 2, src: '/assets/cardi.png', alt: 'Description 2' },
  { id: 3, src: '/assets/workshop.png', alt: 'Description 3' },
  { id: 4, src: '/assets/kniko.JPG', alt: 'Description 4' },
  { id: 5, src: '/assets/IMG_6345.jpg', alt: 'Description 5' },
  { id: 6, src: '/assets/stormi.png', alt: 'Description 6' },
  { id: 5, src: '/assets/IMG_6345.jpg', alt: 'Description 5' },
  { id: 6, src: '/assets/stormi.png', alt: 'Description 6' },
]

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  // const [galleryVisible, setGalleryVisible] = useState(false)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  // const toggleGallery = () => {
  //   setGalleryVisible(!galleryVisible)
  // }

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
          <div key={image.id} className="gallery-item" onClick={() => openLightbox(index)}>
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallery-image"
            onClick={() => openLightbox(index)}
          />
          </div>
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
