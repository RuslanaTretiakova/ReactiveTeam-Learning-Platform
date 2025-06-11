import { Link } from 'react-router-dom'
import { topics } from '../../data/topics'

export default function Knowledge() {
  return (
    <div>
      <ul className="topic-list">
        {topics.map((topic) => (
          <li key={topic.path} className="topic-list__item">
            <Link to={topic.path}>{topic.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
