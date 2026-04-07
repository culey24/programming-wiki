import { Router } from 'express'
import { optionalAuth } from '../middleware/auth.js'
import { query } from '../db/index.js'

const router = Router()

const AGENT_URL = process.env.AGENT_SERVICE_URL || 'http://localhost:8000'

async function proxyToAgent(path, body) {
  const response = await fetch(`${AGENT_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!response.ok) {
    const err = await response.text()
    throw new Error(`Agent service error (${response.status}): ${err}`)
  }
  return response.json()
}

// POST /api/chat — wiki-grounded conversational agent
router.post('/', optionalAuth, async (req, res) => {
  const { messages, context } = req.body
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required.' })
  }

  try {
    const data = await proxyToAgent('/chat', { messages, context: context || {} })

    // Persist to DB when authenticated
    if (req.user && data.content) {
      try {
        const session = await query(
          `INSERT INTO chat_sessions (user_id, title) VALUES ($1, $2) RETURNING id`,
          [req.user.id, messages[0]?.content?.slice(0, 60) || 'Chat']
        )
        const sessionId = session.rows[0].id
        for (const msg of [...messages.slice(-10), { role: 'assistant', content: data.content }]) {
          await query(
            'INSERT INTO chat_messages (session_id, role, content) VALUES ($1, $2, $3)',
            [sessionId, msg.role, msg.content]
          )
        }
      } catch (dbErr) {
        console.error('Failed to persist chat:', dbErr)
      }
    }

    return res.json({ content: data.content })
  } catch (err) {
    console.error('Chat proxy error:', err.message)
    return res.status(502).json({ error: 'Agent service unavailable. Make sure it is running.' })
  }
})

// POST /api/debug — code error diagnosis
router.post('/debug', optionalAuth, async (req, res) => {
  const { code, language, error, context } = req.body
  if (!code || !language || !error) {
    return res.status(400).json({ error: 'code, language, and error are required.' })
  }

  try {
    const data = await proxyToAgent('/debug', { code, language, error, context: context || {} })
    return res.json({ content: data.content })
  } catch (err) {
    console.error('Debug proxy error:', err.message)
    return res.status(502).json({ error: 'Agent service unavailable.' })
  }
})

export default router
