import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '💼',
      title: 'Job Search Service',
      description: 'Discover full-time positions across various industries and domains tailored to your skills and interests.'
    },
    {
      icon: '🎓',
      title: 'Internship Search Service',
      description: 'Find valuable internship opportunities to gain experience and kickstart your career journey.'
    },
    {
      icon: '🎯',
      title: 'Domain-Based Matching',
      description: 'Get personalized job recommendations based on your preferred domain and career goals.'
    },
    {
      icon: '📝',
      title: 'Resume Tips & Career Guidance',
      description: 'Access expert advice, resume templates, and career guidance to enhance your professional profile.'
    }
  ]

  return (
    <div className="services">
      <div className="services-header fade-in-up">
        <h2 className="section-title">What We Offer</h2>
        <p className="section-subtitle">Comprehensive career solutions for your success</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services

