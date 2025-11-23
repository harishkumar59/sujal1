import './Hero.css'

const Hero = ({ scrollToSection }) => {
  return (
    <div className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      <div className="hero-content fade-in-up">
        <h1 className="hero-headline">Empowering Careers with Opportunities</h1>
        <p className="hero-tagline">Find the right job or internship in your desired domain</p>
        <button 
          className="cta-button"
          onClick={() => scrollToSection('opportunities')}
        >
          Explore Opportunities
        </button>
      </div>
      <div className="hero-illustration">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Hero

