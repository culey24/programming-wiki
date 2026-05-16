import React, { useState, useEffect, useRef } from 'react';

export default function SelectionTutor() {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [selectedText, setSelectedText] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      // Small delay to allow selection to complete
      setTimeout(() => {
        const selection = window.getSelection();
        const text = selection?.toString().trim();

        if (text && text.length > 5) {
          const range = selection?.getRangeAt(0);
          const rect = range?.getBoundingClientRect();

          if (rect) {
            setSelectedText(text);
            setPosition({
              x: rect.left + rect.width / 2,
              y: rect.top + window.scrollY - 40,
            });
          }
        } else {
          setPosition(null);
        }
      }, 10);
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (buttonRef.current && buttonRef.current.contains(e.target as Node)) {
        return;
      }
      setPosition(null);
    };

    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  const handleAskAi = () => {
    window.dispatchEvent(new CustomEvent('ai-tutor-ask-selection', { detail: { text: selectedText } }));
    setPosition(null);
  };

  if (!position) return null;

  return (
    <button
      ref={buttonRef}
      onClick={handleAskAi}
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        transform: 'translateX(-50%)',
        zIndex: 1000,
        background: 'var(--color-accent)',
        color: 'white',
        border: 'none',
        borderRadius: '20px',
        padding: '6px 12px',
        fontSize: '12px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        whiteSpace: 'nowrap'
      }}
    >
      ✨ Ask AI
    </button>
  );
}
