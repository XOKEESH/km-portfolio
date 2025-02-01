import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'
import { SunIcon, MusicalNoteIcon} from '@heroicons/react/24/outline'
import './Themes.css'
import MobileNav from './MobileNav'

const Navbar = () => {
  const [currentTheme, setCurrentTheme] = useState(0)
  const [sliderVisible, setSliderVisible] = useState(false) 
  const [hue, setHue] = useState(240)
  const [theme, setTheme] = useState('dark')
  const [menuVisible, setMenuVisible] = useState(false)
  const [gridVisible, setGridVisible] = useState(false)
  const [spotifyVisible, setSpotifyVisible] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const sliderTrackRef = useRef(null)

  useEffect(() => {
    const themes = [
      'dark', 'light', 'theme-1', 'theme-2', 'theme-3', 'theme-4',
      'theme-5', 'theme-6', 'theme-7', 'theme-8', 'theme-9', 'theme-10',
      'theme-11', 'theme-12', 'theme-13', 'theme-14', 'theme-15'
    ]
    document.documentElement.setAttribute('data-theme', themes[currentTheme])
  }, [currentTheme])

  useEffect(() => {
    document.documentElement.setAttribute('color-scheme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.style.setProperty('--_hue', hue)
  }, [hue])

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", handleDragEnd);
      document.addEventListener("touchmove", handleDragMove);
      document.addEventListener("touchend", handleDragEnd);
    } else {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchmove", handleDragMove);
      document.removeEventListener("touchend", handleDragEnd);
    }
  
    return () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchmove", handleDragMove);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging])

  const toggleMenu = () => setMenuVisible(!menuVisible)

  const toggleSlider = () => setSliderVisible(!sliderVisible)

  const handleGridToggle = () => { setGridVisible(!gridVisible) }

  const handleSpotifyToggle = () => {
    setSpotifyVisible(!spotifyVisible)
    if (!spotifyVisible && !playing) {
      setPlaying(true)
    }
  }

  const handleDragStart = (event) => {
    event.preventDefault()
    setIsDragging(true)
  }
  
  const handleDragMove = (event) => {
    if (!isDragging) return
  
    requestAnimationFrame(() => {
      const track = sliderTrackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const clientY = event.touches ? event.touches[0].clientY : event.clientY;
      
      let relativeY = clientY - rect.top;
      
      let newTheme = Math.round((relativeY / rect.height) * 16)
      newTheme = Math.max(0, Math.min(16, newTheme))

      setCurrentTheme(newTheme);
    })
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  return (
    <nav className="navbar">
      <div className="name">
        <span className="first-letter">K</span>
        <span className="full-name">isha Martin</span>
      </div>

      <ul className="nav-links">
        <li><Link to="intro" smooth={true} duration={500} spy={true} activeClass="active-link">Intro</Link></li>
        <li><Link to="work" smooth={true} duration={500} spy={true} activeClass="active-link">Work</Link></li>
        <li><Link to="values" smooth={true} duration={500} spy={true} activeClass="active-link">Values</Link></li>
        <li><Link to="background" smooth={true} duration={500} spy={true} activeClass="active-link">Background</Link></li>
        <li><Link to="references" smooth={true} duration={500} spy={true} activeClass="active-link">References</Link></li>
        <li><Link to="about" smooth={true} duration={500} spy={true} activeClass="active-link">About</Link></li>
        <li><Link to="contact" smooth={true} duration={500} spy={true} activeClass="active-link">Contact</Link></li>
      </ul>

      {/* Hamburger Menu */}
      <div className="App">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <MobileNav menuVisible={menuVisible} toggleMenu={toggleMenu} />
      </div>

      {/* Theme Changer */}  
      <div className="theme-switch">
        <div className="theme-icon-wrapper">
          <div className="theme-icon">
              <div className="theme-btns">
                  <button
                    onClick={() => setSliderVisible(!sliderVisible)}
                  >
                    <SunIcon />
                  </button>

                  {sliderVisible && (
                    // <div className="theme-slider">
                    //   <div className="slider-track">
                    //     {Array(17)
                    //       .fill(null)
                    //       .map((_, index) => (
                    //         <div
                    //           key={index}
                    //           className={`slider-marker ${index === currentTheme ? 'active' : ''}`}
                    //           onClick={() => setCurrentTheme(index)}
                    //         >
                    //           ·
                    //         </div>
                    //       ))}
                    //   </div>

                    // <div className="theme-slider" onMouseDown={handleDragStart}>
                    //   <div className="slider-track" ref={sliderTrackRef}>
                    //     <div
                    //       className="slider-icon"
                    //       style={{ top: `${(currentTheme / 16) * 100}%` }}
                    //       onMouseDown={(e) => { e.stopPropagation(); handleDragStart(e) }}
                    //       onTouchStart={(e) => { e.stopPropagation(); handleDragStart(e) }}
                    //     >
                    //       <SunIcon />
                    //     </div>
                    //   </div>
                    // </div>

                    <div className="theme-slider" onMouseDown={handleDragStart}>
                      <div className="slider-track" ref={sliderTrackRef}>
                        {[...Array(17)].map((_, index) => {
                          const markerSpacing = (100 - 6) / 16
                          const position = index * markerSpacing

                          return (
                            <div
                              key={index}
                              className="slider-marker"
                              style={{ top: `${position}%` }}
                            />
                          )
                        })}

                        {/* Slider Icon */}
                        <div
                          className="slider-icon"
                          style={{ top: `${(currentTheme / 16) * 90}%` }}
                          onMouseDown={(e) => { e.stopPropagation(); handleDragStart(e) }}
                          onTouchStart={(e) => { e.stopPropagation(); handleDragStart(e) }}
                        >
                          <SunIcon />
                        </div>
                      </div>
                    </div>
                  )}

                {/* Grid Overlay */}
                {/* <button className="grid-btn"
                      onClick={() => setGridVisible(!gridVisible)}
                  >
                    |||||
                  </button>
                    
                {gridVisible && (
                    <div className="grid-overlay"> </div>
                )}   */}
                
                {/* Spotify */}  
                {/* <button onClick={handleSpotifyToggle}>
                  <MusicalNoteIcon />
                </button>

                  {spotifyVisible && (
                    <div className="spotify-overlay">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/5vVSfOsF8YRueAI1dOI0Lh?si=9fee3da971a440a8"
                        width="285px"
                        height="152px"
                        frameBorder="0"
                        allow="encrypted-media"
                        title="Spotify Playlist"
                        onLoad={() => {
                      if (!playing) { 
                      setPlaying(true)
                      }
                    }}
                  ></iframe>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
        <div className="overlay"></div>
    </nav>
  )
}

export default Navbar