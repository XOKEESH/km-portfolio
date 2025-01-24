import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'
import Values from './components/Values'
import Background from './components/Background'
import References from './components/References'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'
import './components/themes.css'


const App = () => {
  return (
    <div className="main-content">
      <Navbar />
      <Home />
      <Work />
      <Values />
      <Background />
      <References />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
