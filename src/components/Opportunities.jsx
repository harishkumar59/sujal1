import { useState } from 'react'
import './Opportunities.css'

const Opportunities = () => {
  const [selectedDomain, setSelectedDomain] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const domains = ['all', 'Technology', 'Business', 'Design', 'Healthcare', 'Education', 'Engineering', 'Creative Arts']

  // Sample opportunities data
  const opportunities = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      domain: 'Technology',
      type: 'Full-time',
      location: 'Remote'
    },
    {
      id: 2,
      title: 'Marketing Intern',
      company: 'Digital Solutions',
      domain: 'Business',
      type: 'Internship',
      location: 'New York, NY'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      domain: 'Design',
      type: 'Full-time',
      location: 'San Francisco, CA'
    },
    {
      id: 4,
      title: 'Data Science Intern',
      company: 'Analytics Pro',
      domain: 'Technology',
      type: 'Internship',
      location: 'Remote'
    },
    {
      id: 5,
      title: 'Business Analyst',
      company: 'Strategy Corp',
      domain: 'Business',
      type: 'Full-time',
      location: 'Chicago, IL'
    },
    {
      id: 6,
      title: 'Graphic Designer',
      company: 'Art House',
      domain: 'Creative Arts',
      type: 'Full-time',
      location: 'Los Angeles, CA'
    }
  ]

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesDomain = selectedDomain === 'all' || opp.domain === selectedDomain
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         opp.company.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDomain && matchesSearch
  })

  return (
    <div className="opportunities">
      <div className="opportunities-header fade-in-up">
        <h2 className="section-title">Explore Opportunities</h2>
        <p className="section-subtitle">Find your next career move</p>
      </div>

      <div className="filters fade-in-up">
        <div className="filter-group">
          <label htmlFor="domain-select">Domain</label>
          <select
            id="domain-select"
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            className="domain-select"
          >
            {domains.map(domain => (
              <option key={domain} value={domain}>
                {domain === 'all' ? 'All Domains' : domain}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="search-input">Search</label>
          <input
            id="search-input"
            type="text"
            placeholder="Search by title or company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="opportunities-list">
        {filteredOpportunities.length > 0 ? (
          filteredOpportunities.map((opp, index) => (
            <div key={opp.id} className="opportunity-card fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="opportunity-header">
                <h3 className="opportunity-title">{opp.title}</h3>
                <span className={`opportunity-type ${opp.type.toLowerCase()}`}>{opp.type}</span>
              </div>
              <p className="opportunity-company">{opp.company}</p>
              <div className="opportunity-meta">
                <span className="opportunity-domain">{opp.domain}</span>
                <span className="opportunity-location">📍 {opp.location}</span>
              </div>
              <button className="apply-button">View Details</button>
            </div>
          ))
        ) : (
          <div className="no-results fade-in">
            <p>No opportunities found matching your criteria.</p>
            <p>Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Opportunities

