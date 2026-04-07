import { useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import api from '../../lib/api.js'
import { useAiTutor } from '../../context/AiTutorContext.jsx'

const WELCOME = {
  role: 'assistant',
  content:
    "Hi! I'm your AI coding tutor. I know the entire wiki — ask me about any concept, get code explained, or use the **🐛 Ask AI** button in the playground to debug your code.",
}

export default function AiTutor() {
  const { isOpen, toggle, close, pendingMessage, clearPending } = useAiTutor()
  const [messages, setMessages] = useState([WELCOME])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [isDebugMode, setIsDebugMode] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const location = useLocation()

  // Consume any message injected from outside (e.g. debug button)
  useEffect(() => {
    if (pendingMessage && isOpen) {
      clearPending()
      sendMessage(pendingMessage.text, pendingMessage.isDebug || false, pendingMessage.debugPayload)
    }
  }, [pendingMessage, isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
        inputRef.current?.focus()
      }, 50)
    }
  }, [isOpen, messages])

  const getContext = () => {
    const path = location.pathname
    const parts = path.split('/').filter(Boolean)
    if (parts[0] === 'docs') return { page: parts.slice(1).join('/') || 'intro', type: 'docs' }
    if (parts[0] === 'playground') return { page: 'playground', type: 'playground' }
    return { page: 'home', type: 'general' }
  }

  const sendMessage = async (text, isDebug = false, debugPayload = null) => {
    if (!text.trim() || loading) return

    const userMsg = { role: 'user', content: text, _isDebug: isDebug }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setLoading(true)
    setIsDebugMode(isDebug)

    try {
      const context = getContext()

      let data
      if (isDebug && debugPayload) {
        // Use the dedicated /debug endpoint
        const resp = await api.post('/api/chat/debug', {
          ...debugPayload,
          context,
        })
        data = resp.data
      } else {
        // Standard wiki-grounded chat
        const resp = await api.post('/api/chat', {
          messages: next.filter((m) => m.role !== 'system').map(({ role, content }) => ({ role, content })),
          context,
        })
        data = resp.data
      }

      setMessages([...next, { role: 'assistant', content: data.content }])
    } catch {
      setMessages([...next, {
        role: 'assistant',
        content: '⚠️ Could not reach the agent service. Make sure `agent-service` is running on port 8000.',
      }])
    } finally {
      setLoading(false)
      setIsDebugMode(false)
    }
  }

  const handleSend = () => sendMessage(input)

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={toggle}
        className="fixed z-50 flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95 text-xl"
        style={{
          width: 52,
          height: 52,
          bottom: 24,
          right: 24,
          background: 'var(--color-accent)',
          color: 'white',
        }}
        aria-label="Toggle AI Tutor"
      >
        {isOpen ? '✕' : '🤖'}
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          className="fixed z-50 flex flex-col rounded-xl shadow-2xl border overflow-hidden"
          style={{
            width: 400,
            height: 540,
            bottom: 86,
            right: 24,
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 border-b flex-shrink-0"
            style={{ borderColor: 'var(--color-border)', background: '#12141f' }}
          >
            <span className="text-xl">🤖</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate" style={{ color: 'var(--color-text)' }}>
                AI Wiki Tutor
              </p>
              <p className="text-xs" style={{ color: 'var(--color-muted)' }}>
                Powered by Gemini 2.5 Flash · Knows your wiki
              </p>
            </div>
            <button
              onClick={() => setMessages([WELCOME])}
              className="text-xs px-2 py-1 rounded transition-colors hover:bg-white/10"
              style={{ color: 'var(--color-muted)' }}
            >
              Clear
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <span className="text-base mr-2 mt-0.5 flex-shrink-0">🤖</span>
                )}
                <div
                  className="max-w-[85%] rounded-xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap"
                  style={{
                    background: msg.role === 'user'
                      ? msg._isDebug ? '#7c3aed' : 'var(--color-accent)'
                      : '#1e2130',
                    color: 'var(--color-text)',
                  }}
                >
                  {msg._isDebug && (
                    <span className="text-xs font-semibold block mb-1 opacity-75">🐛 Debug request</span>
                  )}
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start items-center gap-2">
                <span className="text-base">🤖</span>
                <div
                  className="rounded-xl px-3 py-2 text-sm flex items-center gap-2"
                  style={{ background: '#1e2130', color: 'var(--color-muted)' }}
                >
                  {isDebugMode ? (
                    <>
                      <span className="animate-pulse">🐛</span>
                      <span className="animate-pulse">Analyzing your code…</span>
                    </>
                  ) : (
                    <>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" style={{ animationDelay: '300ms' }} />
                    </>
                  )}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t flex-shrink-0" style={{ borderColor: 'var(--color-border)' }}>
            <div
              className="flex items-end gap-2 rounded-lg px-3 py-2 border"
              style={{ background: '#12141f', borderColor: 'var(--color-border)' }}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask anything about the wiki… (Enter to send)"
                rows={1}
                className="flex-1 bg-transparent text-sm resize-none outline-none leading-relaxed"
                style={{ color: 'var(--color-text)', maxHeight: 100 }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="flex-shrink-0 px-3 py-1.5 rounded-md text-sm font-medium transition-all disabled:opacity-40 hover:opacity-90"
                style={{ background: 'var(--color-accent)', color: 'white' }}
              >
                Send
              </button>
            </div>
            <p className="text-xs mt-1.5 text-center" style={{ color: 'var(--color-muted)' }}>
              Shift+Enter for new line · Uses wiki content as context
            </p>
          </div>
        </div>
      )}
    </>
  )
}
