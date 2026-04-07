import { useState } from 'react'
import CodeEditor, { DEFAULT_CODE } from '../components/Editor/CodeEditor.jsx'
import OutputPanel from '../components/Editor/OutputPanel.jsx'
import { useExecution } from '../hooks/useExecution.js'

export default function Playground() {
  const [language, setLanguage] = useState('python')
  const [code, setCode] = useState(DEFAULT_CODE.python)
  const { execute, output, running, execMeta, connected, clearOutput } = useExecution()

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    setCode(DEFAULT_CODE[lang] || '')
    clearOutput()
  }

  const handleRun = () => {
    execute(language, code)
  }

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
            height="100%"
          />
        </div>

        {/* Output */}
        <div className="w-96 flex-shrink-0 overflow-hidden">
          <OutputPanel
            output={output}
            running={running}
            execMeta={execMeta}
            onClear={clearOutput}
            language={language}
            code={code}
          />
        </div>
      </div>
    </div>
  )
}
