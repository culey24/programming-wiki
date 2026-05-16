import React, { useState, useRef, useEffect } from 'react';
import './AiTutor.css';

const WELCOME = {
  role: 'assistant',
  content: "Hi! I'm your AI wiki tutor. I know the entire wiki — ask me about any concept or get code explained.",
};

const BACKEND_URL = 'http://localhost:3001';

function renderMessageContent(content: string) {
  const blocks = content.split(/\n{2,}/g)

  return blocks.map((block, index) => {
    const codeFenceMatch = block.match(/^```(\w*)\n([\s\S]*?)\n?```$/)
    if (codeFenceMatch) {
      const [, lang, code] = codeFenceMatch
      return (
        <pre key={index} className="ai-code-block">
          <code className={`language-${lang || 'text'}`}>{code}</code>
        </pre>
      )
    }

    const lines = block.split('\n')
    return (
      <p key={index} className="ai-message-paragraph">
        {lines.map((line, idx) => (
          <React.Fragment key={idx}>
            {line || '\u00A0'}
            {idx < lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    )
  })
}

export default function AiTutor() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen, messages]);

  // Handle global selection message
  useEffect(() => {
    const handleSelectionMsg = (e: CustomEvent) => {
      const { text } = e.detail;
      setIsOpen(true);
      sendMessage(`Please explain this from the documentation:\n\n"${text}"`);
    };
    window.addEventListener('ai-tutor-ask-selection', handleSelectionMsg as any);
    return () => window.removeEventListener('ai-tutor-ask-selection', handleSelectionMsg as any);
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg = { role: 'user', content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
          context: { type: 'docs', page: typeof window !== 'undefined' ? window.location.pathname : 'docs' }
        }),
      });

      if (!response.ok) throw new Error('API error');
      const data = await response.json();
      setMessages([...next, { role: 'assistant', content: data.content }]);
    } catch (err) {
      setMessages([...next, { role: 'assistant', content: '⚠️ Could not reach the AI service. Please make sure the backend is running.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="ai-tutor-button" aria-label="Toggle AI Tutor">
        {isOpen ? '✕' : '🤖'}
      </button>

      {isOpen && (
        <div className="ai-tutor-panel">
          <div className="ai-tutor-header">
            <span style={{ fontSize: '1.25rem' }}>🤖</span>
            <div style={{ flex: 1 }}>
              <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-text)' }}>AI Wiki Tutor</p>
              <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--color-muted)' }}>Powered by Gemini</p>
            </div>
            <button 
              onClick={() => setMessages([WELCOME])}
              style={{ background: 'none', border: 'none', color: 'var(--color-muted)', fontSize: '0.75rem', cursor: 'pointer' }}
            >
              Clear
            </button>
          </div>

          <div className="ai-tutor-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`ai-message ${msg.role === 'user' ? 'ai-message-user' : 'ai-message-assistant'}`}>
                {msg.role === 'assistant' && <span style={{ marginRight: '0.5rem', marginTop: '0.25rem' }}>🤖</span>}
                <div className="ai-message-bubble">{renderMessageContent(msg.content)}</div>
              </div>
            ))}
            {loading && (
              <div className="ai-message ai-message-assistant">
                <span style={{ marginRight: '0.5rem' }}>🤖</span>
                <div className="ai-message-bubble" style={{ color: 'var(--color-muted)' }}>Thinking...</div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="ai-tutor-input-container">
            <div className="ai-tutor-input-wrapper">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about the docs..."
                rows={1}
                className="ai-tutor-textarea"
              />
              <button 
                onClick={() => sendMessage(input)} 
                disabled={!input.trim() || loading}
                className="ai-tutor-send-btn"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
