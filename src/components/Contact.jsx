import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send the form data to a backend
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact">
      <div className="contact-header fade-in-up">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">We'd love to hear from you</p>
      </div>

      <div className="contact-content">
        <div className="contact-info fade-in-up">
          <div className="info-item">
            <div className="info-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>support@7shards.com</p>
            </div>
          </div>
          <p className="contact-description">
            Have questions or need assistance? Reach out to us and we'll be happy to help you 
            find the right opportunities for your career.
          </p>
        </div>

        <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

