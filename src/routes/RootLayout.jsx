import { Link, Outlet } from '@tanstack/react-router'
import '../App.css'

function RootLayout() {
  return (
    <>
      <nav className="nav-bar">
        <Link to="/" activeProps={{ className: 'active' }}>
          Home
        </Link>
        <Link to="/about" activeProps={{ className: 'active' }}>
          About
        </Link>
      </nav>
      <Outlet />
    </>
  )
}

export default RootLayout
