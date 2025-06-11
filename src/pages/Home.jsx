import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📚 Теми JavaScript</h1>
      <ul>
        <li><Link to="/hoisting">Hoisting</Link></li>
        <li><Link to="/temporal-dead-zone">Temporal Dead Zone</Link></li>
        <li><Link to="/object-methods">Object Built-in Methods</Link></li>
      </ul>
    </div>
  )
}
