import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { topics } from '../data/topics'

export default function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const filtered = topics.filter((topic) =>
    topic.title.toLowerCase().includes(query.toLowerCase())
  )

  const handleSelect = (path) => {
    navigate(path)
    setQuery('')
  }

  return (
    <section className="home center">
      <h1 className="title">Welcome to the Learning Platform</h1>

      <div className="search-container">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a topic..."
            className="search-input"
          />
          <button type="submit" className="search-button" aria-label="Search">
            <i className="ri-search-line"></i>
          </button>
        </form>

        {query && (
          <ul className="search-dropdown">
            {filtered.length > 0 ? (
              filtered.map((topic) => (
                <li
                  key={topic.path}
                  onClick={() => handleSelect(topic.path)}
                  className="search-item"
                >
                  {topic.title}
                </li>
              ))
            ) : (
              <li className="search-item">Nothing found</li>
            )}
          </ul>
        )}
      </div>
    </section>
  )
}
