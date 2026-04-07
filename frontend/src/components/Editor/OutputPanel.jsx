import { useEffect, useRef } from 'react'
import { useAiTutor } from '../../context/AiTutorContext.jsx'

export default function OutputPanel({ output, running, execMeta, onClear, language, code }) {
  const bottomRef = useRef(null)
  const { openWithMessage } = useAiTutor()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [output])

  const hasError = output.some((line) => line.type === 'stderr')
  const errorText = output
    .filter((l) => l.type === 'stderr')
    .map((l) => l.data)
    .join('')
  const allOutput = output.map((l) => l.data).join('')

  const statusColor = execMeta
    ? execMeta.status === 'success'
      ? 'var(--color-success)'
      : execMeta.status === 'timeout'
      ? 'var(--color-warning)'
      : 'var(--color-error)'
    : 'var(--color-muted)'

  const handleAskAi = () => {
    const text = `I ran my ${language} code and got an error. Can you help me debug it?\n\nError:\n\`\`\`\n${errorText.slice(0, 1000)}\n\`\`\``
    openWithMessage({
      text,
      isDebug: true,
      debugPayload: {
        code: code || '',
        language: language || 'unknown',
        error: errorText.slice(0, 2000),
      },
    })
  }

  return (
    <div className="flex flex-col h-full" style={{ background: '#0d0f1a' }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b text-xs font-medium flex-shrink-0"
        style={{ borderColor: 'var(--color-border)', color: 'var(--color-muted)' }}
      >
        <div className="flex items-center gap-2 min-w-0">
          <span>OUTPUT</span>
          {running && (
            <span className="flex items-center gap-1" style={{ color: 'var(--color-accent)' }}>
              <span className="inline-block w-2 h-2 rounded-full bg-current animate-pulse" />
              Running…
            </span>
          )}
          {execMeta && !running && (
            <span style={{ color: statusColor }}>
              {execMeta.status === 'timeout'
                ? '⏱ Time limit exceeded (10s)'
                : `Exited (${execMeta.exitCode}) · ${execMeta.duration_ms}ms`}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Ask AI button — shown when there's an error after execution */}
          {hasError && !running && (
            <button
              onClick={handleAskAi}
              className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold transition-all hover:opacity-90"
              style={{ background: '#7c3aed', color: 'white' }}
              title="Send this error to the AI Tutor"
            >
              🐛 Ask AI
            </button>
          )}
          {output.length > 0 && (
            <button
              onClick={onClear}
              className="hover:text-white transition-colors"
              style={{ color: 'var(--color-muted)' }}
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Output body */}
      <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
        {output.length === 0 && !running ? (
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>
            Run your code to see output here.
          </p>
        ) : (
          output.map((line, i) => (
            <div
              key={i}
              className="leading-relaxed whitespace-pre-wrap break-all"
              style={{ color: line.type === 'stderr' ? 'var(--color-error)' : '#a8b4c8' }}
            >
              {line.data}
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

      {/* Hint when error present */}
      {hasError && !running && (
        <div
          className="px-4 py-2 text-xs border-t flex items-center gap-2"
          style={{ borderColor: 'var(--color-border)', background: 'rgba(124,58,237,0.06)', color: '#a78bfa' }}
        >
          <span>🐛</span>
          <span>Got an error? Click <strong>Ask AI</strong> to let the tutor diagnose it.</span>
        </div>
      )}
    </div>
  )
}
