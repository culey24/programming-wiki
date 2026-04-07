import { useEffect, useRef, useState, useCallback } from 'react'
import { io } from 'socket.io-client'

export function useExecution() {
  const socketRef = useRef(null)
  const [connected, setConnected] = useState(false)
  const [output, setOutput] = useState([])
  const [running, setRunning] = useState(false)
  const [execMeta, setExecMeta] = useState(null)

  useEffect(() => {
    const socket = io('/', { path: '/socket.io', transports: ['websocket'] })
    socketRef.current = socket

    socket.on('connect', () => setConnected(true))
    socket.on('disconnect', () => setConnected(false))

    socket.on('output', ({ type, data }) => {
      setOutput((prev) => [...prev, { type, data }])
    })

    socket.on('done', (meta) => {
      setExecMeta(meta)
      setRunning(false)
    })

    return () => socket.disconnect()
  }, [])

  const execute = useCallback((language, code) => {
    if (!socketRef.current || !connected) return
    setOutput([])
    setExecMeta(null)
    setRunning(true)
    socketRef.current.emit('execute', { language, code })
  }, [connected])

  const clearOutput = useCallback(() => {
    setOutput([])
    setExecMeta(null)
  }, [])

  return { execute, output, running, execMeta, connected, clearOutput }
}
