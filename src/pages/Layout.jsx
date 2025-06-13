import { Outlet } from 'react-router-dom'
import Header from '../components/header/ui/Header'
import Footer from '../components/footer/ui/Footer'

export default function Layout() {
  return (
    <div className="layout">
      <Header />

      <main className="main center">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
