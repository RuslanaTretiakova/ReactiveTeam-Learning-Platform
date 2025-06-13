import { Link } from 'react-router-dom'
import { topics } from '../data/topics'

export default function Knowledge() {
  const sortedTopics = [...topics].sort((a, b) =>
    a.title.localeCompare(b.title)
  )

  return (
    <div>
      <ul className="topic-list">
        {sortedTopics.map((topic) => (
          <li key={topic.slug} className="topic-list__item">
            <Link to={`/${topic.slug}`}>{topic.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
