import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import { docsUrl } from '../../lib/docsUrl.js'

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav
      className="sticky top-0 z-40 flex items-center justify-between px-6 h-14 border-b"
      style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
    >
      <Link to="/" className="flex items-center gap-2 font-bold text-lg" style={{ color: 'var(--color-text)' }}>
        <span className="text-2xl">⚡</span>
        <span>Programming Wiki</span>
      </Link>

      <div className="flex items-center gap-1">
        <a
          href={docsUrl('/intro')}
          className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:text-white"
          style={{ color: 'var(--color-muted)' }}
        >
          Docs
        </a>
        <NavLink
          to="/playground"
          className={({ isActive }) =>
            `px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white' : ''}`
          }
          style={({ isActive }) => ({
            background: isActive ? 'var(--color-accent)' : 'transparent',
            color: isActive ? 'white' : 'var(--color-muted)',
          })}
        >
          Playground
        </NavLink>
      </div>

      <div className="flex items-center gap-3">
        {user ? (
          <>
            <span className="text-sm" style={{ color: 'var(--color-muted)' }}>{user.email}</span>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-md text-sm font-medium border transition-colors hover:bg-white/5"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5"
              style={{ color: 'var(--color-muted)' }}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
              style={{ background: 'var(--color-accent)', color: 'white' }}
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
