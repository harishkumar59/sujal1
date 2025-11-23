import './About.css'

const About = () => {
  return (
    <div className="about">
      <div className="about-header fade-in-up">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">Connecting talent with opportunities</p>
      </div>

      <div className="about-content">
        <div className="about-description fade-in-up">
          <p>
            7Shards is a talent-driven platform dedicated to empowering students and professionals 
            by connecting them with the right job and internship opportunities in their desired domains. 
            We believe that every individual has unique talents and aspirations, and our mission is to 
            help them find the perfect match.
          </p>
        </div>

        <div className="name-story fade-in-up">
          <h3>Why "7Shards"?</h3>
          <p>
            The name "7Shards" represents the seven core domains we focus on: Technology, Business, 
            Design, Healthcare, Education, Engineering, and Creative Arts. Just as shards come together 
            to form a complete whole, we bring together opportunities from these diverse domains to 
            create a comprehensive platform that serves every professional's unique career journey.
          </p>
        </div>

        <div className="vision-mission">
          <div className="card vision-card fade-in-up">
            <div className="card-icon">🎯</div>
            <h3>Vision</h3>
            <p>
              To become the leading platform that bridges the gap between talent and opportunity, 
              creating a world where every professional finds their perfect career path.
            </p>
          </div>

          <div className="card mission-card fade-in-up">
            <div className="card-icon">🚀</div>
            <h3>Mission</h3>
            <p>
              To provide accessible, domain-specific job and internship opportunities while offering 
              guidance and support to help individuals build successful careers in their chosen fields.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

