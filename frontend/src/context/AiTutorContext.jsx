import { createContext, useContext, useState, useCallback } from 'react'

const AiTutorContext = createContext(null)

export function AiTutorProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  // Queue of messages injected externally (e.g. from debug button)
  const [pendingMessage, setPendingMessage] = useState(null)

  const openWithMessage = useCallback((message) => {
    setPendingMessage(message)
    setIsOpen(true)
  }, [])

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((v) => !v), [])
  const clearPending = useCallback(() => setPendingMessage(null), [])

  return (
    <AiTutorContext.Provider value={{ isOpen, open, close, toggle, openWithMessage, pendingMessage, clearPending }}>
      {children}
    </AiTutorContext.Provider>
  )
}

export const useAiTutor = () => useContext(AiTutorContext)
