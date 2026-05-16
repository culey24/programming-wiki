import { useState, useRef } from 'react'
import CodeEditor, { DEFAULT_CODE } from '../components/Editor/CodeEditor.jsx'
import OutputPanel from '../components/Editor/OutputPanel.jsx'
import api from '../lib/api.js'
import { useExecution } from '../hooks/useExecution.js'

const extractCodeBlock = (text) => {
  const match = text.match(/```(?:\w+)?\n([\s\S]*?)\n?```/)
  return match ? match[1].trim() : ''
}

export default function Playground() {
  const [language, setLanguage] = useState('python')
  const [code, setCode] = useState(DEFAULT_CODE.python)
  const [agentResponse, setAgentResponse] = useState('')
  const [agentError, setAgentError] = useState('')
  const [agentLoading, setAgentLoading] = useState(false)
  const editorRef = useRef(null)
  const { execute, output, running, execMeta, connected, clearOutput } = useExecution()

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    setCode(DEFAULT_CODE[lang] || '')
    clearOutput()
    setAgentResponse('')
    setAgentError('')
  }

  const handleRun = () => {
    execute(language, code)
  }

  const getSelectionText = () => {
    if (!editorRef.current) return ''
    const selection = editorRef.current.getSelection()
    if (!selection || selection.isEmpty()) return ''
    return editorRef.current.getModel().getValueInRange(selection)
  }

  const getPlaygroundContext = () => ({ page: 'playground', type: 'playground' })

  const handleAgentSuggest = async () => {
    const selected = getSelectionText()
    const target = selected || code
    setAgentLoading(true)
    setAgentResponse('')
    setAgentError('')

    try {
      const prompt = `Please review the following ${language} code and suggest a clean inline improvement. If you can, return only the revised code in a single fenced code block.\n\n${selected ? 'Selected snippet:' : 'Full code:'}\n\n\`\`\`${language}\n${target}\n\`\`\` `
      const resp = await api.post('/api/chat', {
        messages: [{ role: 'user', content: prompt }],
        context: getPlaygroundContext(),
      })
      setAgentResponse(resp.data.content || 'No response from agent.')
    } catch (err) {
      setAgentError('Failed to get AI suggestion. Make sure the backend is running.')
    } finally {
      setAgentLoading(false)
    }
  }

  const handleAgentDebug = async () => {
    const errorText = output
      .filter((line) => line.type === 'stderr')
      .map((line) => line.data)
      .join('')

    if (!errorText) {
      setAgentError('No error output found to debug.')
      return
    }

    setAgentLoading(true)
    setAgentResponse('')
    setAgentError('')

    try {
      const resp = await api.post('/api/chat/debug', {
        code,
        language,
        error: errorText.slice(0, 2000),
        context: getPlaygroundContext(),
      })
      setAgentResponse(resp.data.content || 'No response from debug agent.')
    } catch (err) {
      setAgentError('Failed to debug code. Make sure the backend is running.')
    } finally {
      setAgentLoading(false)
    }
  }

  const handleApplySuggestion = () => {
    const suggestedCode = extractCodeBlock(agentResponse)
    if (suggestedCode) {
      setCode(suggestedCode)
      setAgentResponse('Updated editor with suggested code.')
    } else {
      setAgentError('No code block found in the AI response to apply.')
    }
  }

  const errorText = output
    .filter((line) => line.type === 'stderr')
    .map((line) => line.data)
    .join('')
  const hasError = Boolean(errorText && !running)

  return (
    <div className="flex flex-col h-[calc(100vh-3.5rem)]">
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
      >
        <div className="flex items-center gap-3">
          <h1 className="text-sm font-semibold" style={{ color: 'var(--color-text)' }}>
            Playground
          </h1>
          <div
            className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
            style={{
              background: connected ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
              color: connected ? 'var(--color-success)' : 'var(--color-error)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {connected ? 'Connected' : 'Disconnected'}
          </div>
        </div>

        <button
          onClick={handleRun}
          disabled={running || !connected}
          className="flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ background: 'var(--color-success)', color: 'white' }}
        >
          {running ? (
            <>
              <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Running…
            </>
          ) : (
            <>▶ Run</>
          )}
        </button>
      </div>

      {/* Editor + Output split */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor */}
        <div className="flex-1 overflow-hidden border-r" style={{ borderColor: 'var(--color-border)' }}>
          <CodeEditor
            language={language}
            code={code}
            onChange={setCode}
            onLanguageChange={handleLanguageChange}
            onMount={(editor) => { editorRef.current = editor }}
            height="100%"
          />
        </div>

        {/* Output */}
        <div className="w-96 flex-shrink-0 overflow-hidden">
          <div className="px-3 py-2 border-b space-y-2" style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}>
            <div className="flex items-center gap-2">
              <button
                onClick={handleAgentSuggest}
                disabled={agentLoading}
                className="flex-1 rounded-md px-3 py-1 text-xs font-semibold transition-all hover:opacity-90 disabled:opacity-40"
                style={{ background: 'var(--color-accent)', color: 'white' }}
              >
                💡 AI Suggest
              </button>
              <button
                onClick={handleAgentDebug}
                disabled={!hasError || agentLoading}
                className="rounded-md px-3 py-1 text-xs font-semibold transition-all hover:opacity-90 disabled:opacity-40"
                style={{ background: hasError ? '#7c3aed' : '#3f3f46', color: 'white' }}
              >
                🐛 Debug Code
              </button>
            </div>
            <p className="text-[11px]" style={{ color: 'var(--color-muted)' }}>
              Select a block in the editor for inline suggestions, or use runtime errors to debug.
            </p>
          </div>

          <OutputPanel
            output={output}
            running={running}
            execMeta={execMeta}
            onClear={clearOutput}
            language={language}
            code={code}
          />

          {(agentResponse || agentError) && (
            <div className="px-3 py-3 border-t space-y-2" style={{ borderColor: 'var(--color-border)', background: '#090b12' }}>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--color-muted)' }}>
                  AI Guide
                </span>
                {agentResponse && extractCodeBlock(agentResponse) && (
                  <button
                    onClick={handleApplySuggestion}
                    className="text-xs font-semibold transition-colors hover:text-white"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Apply suggestion
                  </button>
                )}
              </div>
              {agentError ? (
                <div className="text-sm" style={{ color: '#fca5a5' }}>
                  {agentError}
                </div>
              ) : (
                <pre className="whitespace-pre-wrap break-words text-sm" style={{ color: '#d1d5db' }}>
                  {agentResponse}
                </pre>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
