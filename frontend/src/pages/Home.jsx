import { Link } from 'react-router-dom'
import { docsUrl } from '../lib/docsUrl.js'

const LANGUAGES = [
  { name: 'Python', icon: '🐍', color: '#3b82f6', docPath: 'Python/Chapter_1', desc: 'From basics to advanced patterns' },
  { name: 'Rust', icon: '⚙️', color: '#f97316', docPath: 'Rust/Chapter_0', desc: 'Systems programming done right' },
  { name: 'JavaScript', icon: '⚡', color: '#eab308', appPath: '/playground', desc: 'The language of the web' },
  { name: 'C++', icon: '🔧', color: '#8b5cf6', appPath: '/playground', desc: 'High-performance computing' },
]

const FEATURES = [
  {
    icon: '📚',
    title: 'Structured Learning',
    desc: 'Carefully curated chapters that take you from fundamentals to mastery at your own pace.',
  },
  {
    icon: '🤖',
    title: 'AI Tutor',
    desc: 'Ask questions, get explanations, and debug code with an AI tutor available on every page.',
  },
  {
    icon: '⚡',
    title: 'Live Playground',
    desc: 'Write and run Python, JavaScript, Rust, C++, and Java directly in your browser.',
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 relative overflow-hidden">
        {/* Gradient background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #6366f1 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-6"
            style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)', background: 'rgba(99,102,241,0.1)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            AI-Powered Learning Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight" style={{ color: 'var(--color-text)' }}>
            Learn to Code,<br />
            <span style={{ color: 'var(--color-accent)' }}>Faster Than Ever</span>
          </h1>
          <p className="text-xl max-w-xl mx-auto mb-8" style={{ color: 'var(--color-muted)' }}>
            Interactive docs, live code execution, and an AI tutor — all in one place.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={docsUrl('intro')}
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:opacity-90 hover:scale-105 inline-block"
              style={{ background: 'var(--color-accent)', color: 'white' }}
            >
              Start Learning →
            </a>
            <Link
              to="/playground"
              className="px-6 py-3 rounded-lg font-semibold text-sm border transition-all hover:bg-white/5"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
            >
              Open Playground
            </Link>
          </div>
        </div>
      </section>

      {/* Language cards */}
      <section className="px-6 py-16 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: 'var(--color-text)' }}>
          Choose Your Language
        </h2>
        <p className="text-center mb-10 text-sm" style={{ color: 'var(--color-muted)' }}>
          Structured courses and interactive exercises for each language
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LANGUAGES.map((lang) => {
            const href = lang.docPath ? docsUrl(lang.docPath) : lang.appPath
            const Wrapper = lang.docPath ? 'a' : Link
            const props = lang.docPath
              ? { href, className: 'group flex flex-col gap-3 p-5 rounded-xl border transition-all hover:scale-[1.02] hover:border-opacity-80', style: { background: 'var(--color-surface)', borderColor: 'var(--color-border)' } }
              : { to: lang.appPath, className: 'group flex flex-col gap-3 p-5 rounded-xl border transition-all hover:scale-[1.02] hover:border-opacity-80', style: { background: 'var(--color-surface)', borderColor: 'var(--color-border)' } }
            return (
              <Wrapper key={lang.name} {...props}>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-2xl"
                  style={{ background: `${lang.color}20` }}
                >
                  {lang.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{lang.name}</h3>
                  <p className="text-xs" style={{ color: 'var(--color-muted)' }}>{lang.desc}</p>
                </div>
                <span className="text-xs font-medium mt-auto" style={{ color: lang.color }}>
                  Get started →
                </span>
              </Wrapper>
            )
          })}
        </div>
      </section>

      {/* Features */}
      <section
        className="px-6 py-16 border-t"
        style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center" style={{ color: 'var(--color-text)' }}>
            Everything You Need to Learn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex flex-col gap-3">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="font-semibold" style={{ color: 'var(--color-text)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
