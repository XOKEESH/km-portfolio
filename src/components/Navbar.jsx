import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { SunIcon, MoonIcon, SwatchIcon } from '@heroicons/react/24/outline'
import ColorSlider from './ColorSlider'
import MobileNav from './MobileNav'

const Navbar = () => {
  const [currentTheme, setCurrentTheme] = useState(0)
  const [isColorPicking, setIsColorPicking] = useState(false)
  const [hue, setHue] = useState(240)
  const [theme, setTheme] = useState('light')
  const [menuVisible, setMenuVisible] = useState(false)

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

  const toggleMenu = () => setMenuVisible(!menuVisible)

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

      <div className="theme-switch">
        <div className="theme-icon-wrapper">
          <div className="theme-icon">
            {isColorPicking ? (
                <>
                  <button
                    className="close-btn"
                    onClick={() => setIsColorPicking(false)}
                  >
                    Close
                  </button>
                  <ColorSlider hue={hue} setHue={setHue} />
                </>
              ) : (
                <div className="theme-btns">
                  <button
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  >
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                  </button>
                  <button onClick={() => setIsColorPicking(true)}>
                    <SwatchIcon />
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar