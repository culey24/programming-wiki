import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'

import authRouter from './routes/auth.js'
import docsRouter from './routes/docs.js'
import chatRouter from './routes/chat.js'
import { registerExecutionHandlers } from './socket/execution.js'

const app = express()
const httpServer = createServer(app)

const DOCS_ORIGINS = [
  process.env.DOCS_URL || 'http://localhost:3000',
  'http://localhost:3002',
]

const BACKEND_ORIGINS = [
  process.env.FRONTEND_URL || 'http://localhost:5173',
  ...DOCS_ORIGINS,
]

const io = new Server(httpServer, {
  cors: {
    origin: BACKEND_ORIGINS,
    methods: ['GET', 'POST'],
  },
})

// Middleware
app.use(cors({ origin: BACKEND_ORIGINS }))
app.use(express.json({ limit: '1mb' }))

// Routes
app.use('/api/auth', authRouter)
app.use('/api/docs', docsRouter)
app.use('/api/chat', chatRouter)

app.get('/api/health', (_, res) => res.json({ status: 'ok' }))

// Socket.IO
registerExecutionHandlers(io)

const PORT = parseInt(process.env.PORT, 10) || 3001

httpServer.on('error', (error) => {
  if (error.syscall === 'listen' && error.code === 'EADDRINUSE') {
    console.error(`Backend failed to start: port ${PORT} is already in use.`)
    console.error('Stop the process using that port or set a different PORT in your environment.')
  } else {
    console.error('Backend server error:', error)
  }
  process.exit(1)
})

httpServer.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
