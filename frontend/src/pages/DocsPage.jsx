import { useState, useEffect, useCallback } from 'react'
import { useParams, Link, NavLink } from 'react-router-dom'
import api from '../lib/api.js'
import WikiContent from '../components/WikiContent/WikiContent.jsx'

const SIDEBAR_TREE = [
  { label: 'Introduction', path: '/docs/intro' },
  {
    label: 'Python',
    children: Array.from({ length: 8 }, (_, i) => ({
      label: `Chapter ${i + 1}`,
      path: `/docs/Python/Chapter_${i + 1}`,
    })),
  },
  {
    label: 'Rust',
    children: Array.from({ length: 9 }, (_, i) => ({
      label: `Chapter ${i}`,
      path: `/docs/Rust/Chapter_${i}`,
    })),
  },
]

function SidebarItem({ item, depth = 0 }) {
  const [expanded, setExpanded] = useState(true)

  if (item.children) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 w-full text-left px-3 py-1.5 rounded-md text-sm font-semibold transition-colors hover:bg-white/5"
          style={{ color: 'var(--color-text)', paddingLeft: `${12 + depth * 12}px` }}
        >
          <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{expanded ? '▾' : '▸'}</span>
          {item.label}
        </button>
        {expanded && (
          <div>
            {item.children.map((child) => (
              <SidebarItem key={child.path} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center text-sm py-1.5 px-3 rounded-md transition-colors ${
          isActive ? 'font-medium' : 'hover:bg-white/5'
        }`
      }
      style={({ isActive }) => ({
        paddingLeft: `${12 + depth * 12}px`,
        color: isActive ? 'var(--color-accent-hover)' : 'var(--color-muted)',
        background: isActive ? 'rgba(99,102,241,0.1)' : 'transparent',
      })}
    >
      {item.label}
    </NavLink>
  )
}

export default function DocsPage() {
  const { category, slug } = useParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const docPath = category && slug ? `${category}/${slug}` : (category || slug || 'intro')

  const fetchDoc = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data } = await api.get(`/api/docs/${docPath}`)
      setContent(data.content)
    } catch (err) {
      setError(err.response?.status === 404 ? 'Page not found.' : 'Failed to load content.')
    } finally {
      setLoading(false)
    }
  }, [docPath])

  useEffect(() => {
    fetchDoc()
  }, [fetchDoc])

  return (
    <div className="flex h-[calc(100vh-3.5rem)]">
      {/* Sidebar */}
      <aside
        className="w-60 flex-shrink-0 overflow-y-auto py-4 border-r"
        style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      >
        <div className="px-3 mb-3">
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>
            Contents
          </p>
        </div>
        <nav className="flex flex-col gap-0.5 px-1">
          {SIDEBAR_TREE.map((item) => (
            <SidebarItem key={item.path || item.label} item={item} />
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-8 py-10">
          {loading && (
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-muted)' }}>
              <span className="animate-spin">⟳</span> Loading…
            </div>
          )}
          {error && (
            <div className="text-sm p-4 rounded-lg border" style={{ color: 'var(--color-error)', borderColor: 'var(--color-error)', background: 'rgba(239,68,68,0.05)' }}>
              {error}
            </div>
          )}
          {!loading && !error && <WikiContent content={content} />}
        </div>
      </main>
    </div>
  )
}
