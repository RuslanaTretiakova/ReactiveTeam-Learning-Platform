import { NavLink } from 'react-router-dom'
import './index.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `navigation__item${isActive ? ' active' : ''}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/knowledge"
          className={({ isActive }) =>
            `navigation__item${isActive ? ' active' : ''}`
          }
        >
          Knowledge Base
        </NavLink>
      </nav>
    </header>
  )
}
