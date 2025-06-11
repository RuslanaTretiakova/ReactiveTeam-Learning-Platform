import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { routes } from './routes'

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  )
}
