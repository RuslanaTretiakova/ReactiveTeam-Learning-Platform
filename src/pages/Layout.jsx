import { Outlet } from 'react-router-dom'
import Header from '../app/components/header/ui/Header'
import Footer from '../app/components/footer/ui/Footer'

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
