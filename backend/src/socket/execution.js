import { runInDocker } from '../runner/docker.js'
import { query } from '../db/index.js'
import jwt from 'jsonwebtoken'

const SUPPORTED_LANGUAGES = ['python', 'javascript', 'cpp', 'java', 'rust']

export function registerExecutionHandlers(io) {
  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`)

    // Optionally identify user via JWT handshake
    let userId = null
    const token = socket.handshake.auth?.token
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        userId = decoded.id
      } catch {}
    }

    socket.on('execute', async ({ language, code }) => {
      if (!language || !code) {
        socket.emit('done', { exitCode: 1, duration_ms: 0, status: 'error' })
        return
      }
      if (!SUPPORTED_LANGUAGES.includes(language)) {
        socket.emit('output', { type: 'stderr', data: `Unsupported language: ${language}\n` })
        socket.emit('done', { exitCode: 1, duration_ms: 0, status: 'error' })
        return
      }

      let fullOutput = ''
      const onOutput = (type, data) => {
        fullOutput += data
        socket.emit('output', { type, data })
      }

      try {
        const result = await runInDocker(language, code, onOutput)
        socket.emit('done', result)

        // Persist submission to DB (fire-and-forget)
        query(
          `INSERT INTO code_submissions (user_id, language, code, output, status, duration_ms)
           VALUES ($1, $2, $3, $4, $5, $6)`,
          [userId, language, code, fullOutput.slice(0, 10000), result.status, result.duration_ms]
        ).catch((err) => console.error('Failed to persist submission:', err))
      } catch (err) {
        socket.emit('output', { type: 'stderr', data: `\nRunner error: ${err.message}\n` })
        socket.emit('done', { exitCode: -1, duration_ms: 0, status: 'error' })
      }
    })

    socket.on('disconnect', () => {
      console.log(`Socket disconnected: ${socket.id}`)
    })
  })
}
