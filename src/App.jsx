import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Opportunities from './components/Opportunities'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'opportunities', 'contact']
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">7Shards</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }} className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }} className={activeSection === 'services' ? 'active' : ''}>Services</a></li>
            <li><a href="#opportunities" onClick={(e) => { e.preventDefault(); scrollToSection('opportunities') }} className={activeSection === 'opportunities' ? 'active' : ''}>Opportunities</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <section id="home">
          <Hero scrollToSection={scrollToSection} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="opportunities">
          <Opportunities />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
