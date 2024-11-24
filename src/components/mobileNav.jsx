import React from 'react'
import { Link } from 'react-scroll'
import '../index.css'

const MobileNav = ({ menuVisible, toggleMenu }) => {
  return (
    menuVisible && (
      <nav className="mobile-navbar">
        <ul>
          <li><Link to="intro" smooth={true} duration={500} onClick={toggleMenu}>Intro</Link></li>
          <li><Link to="work" smooth={true} duration={500} onClick={toggleMenu}>Work</Link></li>
          <li><Link to="values" smooth={true} duration={500} onClick={toggleMenu}>Values</Link></li>
          <li><Link to="background" smooth={true} duration={500} onClick={toggleMenu}>Background</Link></li>
          <li><Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </nav>
    )
  )
}

export default MobileNav
