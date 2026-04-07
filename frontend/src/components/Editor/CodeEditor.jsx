import { useRef } from 'react'
import MonacoEditor from '@monaco-editor/react'

const LANGUAGE_MAP = {
  python: 'python',
  javascript: 'javascript',
  cpp: 'cpp',
  java: 'java',
  rust: 'rust',
}

const LANGUAGE_LABELS = {
  python: 'Python',
  javascript: 'JavaScript',
  cpp: 'C++',
  java: 'Java',
  rust: 'Rust',
}

const DEFAULT_CODE = {
  python: `# Python example\nprint("Hello, World!")\n\nfor i in range(5):\n    print(f"Count: {i}")`,
  javascript: `// JavaScript example\nconsole.log("Hello, World!");\n\nconst nums = [1, 2, 3, 4, 5];\nnums.forEach(n => console.log("Num:", n));`,
  cpp: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    for (int i = 0; i < 5; i++) {\n        cout << "Count: " << i << endl;\n    }\n    return 0;\n}`,
  java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n        for (int i = 0; i < 5; i++) {\n            System.out.println("Count: " + i);\n        }\n    }\n}`,
  rust: `fn main() {\n    println!("Hello, World!");\n    for i in 0..5 {\n        println!("Count: {}", i);\n    }\n}`,
}

export default function CodeEditor({
  language,
  code,
  onChange,
  onLanguageChange,
  languages = ['python', 'javascript', 'cpp', 'java', 'rust'],
  height = '100%',
  showLanguageTabs = true,
}) {
  const editorRef = useRef(null)

  const handleMount = (editor) => {
    editorRef.current = editor
  }

  const handleLanguageChange = (lang) => {
    if (onLanguageChange) onLanguageChange(lang)
    if (onChange) onChange(DEFAULT_CODE[lang] || '')
  }

  return (
    <div className="flex flex-col h-full" style={{ background: '#1e2130' }}>
      {showLanguageTabs && (
        <div
          className="flex items-center gap-1 px-3 py-2 border-b"
          style={{ borderColor: 'var(--color-border)', background: 'var(--color-surface)' }}
        >
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className="px-3 py-1 rounded text-xs font-mono font-medium transition-colors"
              style={{
                background: language === lang ? 'var(--color-accent)' : 'transparent',
                color: language === lang ? 'white' : 'var(--color-muted)',
              }}
            >
              {LANGUAGE_LABELS[lang]}
            </button>
          ))}
        </div>
      )}
      <div className="flex-1 overflow-hidden">
        <MonacoEditor
          height={height}
          language={LANGUAGE_MAP[language] || language}
          value={code}
          onChange={onChange}
          onMount={handleMount}
          theme="vs-dark"
          options={{
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', Menlo, monospace",
            fontLigatures: true,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            lineNumbers: 'on',
            renderLineHighlight: 'gutter',
            padding: { top: 12, bottom: 12 },
            automaticLayout: true,
            tabSize: 4,
            insertSpaces: true,
            bracketPairColorization: { enabled: true },
            smoothScrolling: true,
          }}
        />
      </div>
    </div>
  )
}

export { DEFAULT_CODE, LANGUAGE_LABELS }
