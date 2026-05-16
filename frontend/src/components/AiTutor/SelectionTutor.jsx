import { useState, useEffect, useRef } from 'react'
import { useAiTutor } from '../../context/AiTutorContext.jsx'

export default function SelectionTutor() {
  const [position, setPosition] = useState(null)
  const [selectedText, setSelectedText] = useState('')
  const { isOpen, toggle, clearPending, openWithMessage } = useAiTutor()
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleMouseUp = () => {
      setTimeout(() => {
        const selection = window.getSelection()
        const text = selection?.toString().trim()

        if (text && text.length > 5) {
          const range = selection?.getRangeAt(0)
          const rect = range?.getBoundingClientRect()

          if (rect) {
            setSelectedText(text)
            setPosition({
              x: rect.left + rect.width / 2,
              y: rect.top + window.scrollY - 40,
            })
          }
        } else {
          setPosition(null)
        }
      }, 10)
    }

    const handleMouseDown = (e) => {
      if (buttonRef.current && buttonRef.current.contains(e.target)) return
      setPosition(null)
    }

    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  const handleAskAi = () => {
    openWithMessage({ text: `Please explain this concept from the wiki:\n\n"${selectedText}"` })
    setPosition(null)
  }

  if (!position) return null

  return (
    <button
      ref={buttonRef}
      onClick={handleAskAi}
      className="fixed z-50 px-3 py-1.5 rounded-full text-xs font-bold shadow-xl transition-all hover:scale-105 flex items-center gap-1 whitespace-nowrap"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translateX(-50%)',
        background: 'var(--color-accent)',
        color: 'white',
      }}
    >
      ✨ Ask AI
    </button>
  )
}
