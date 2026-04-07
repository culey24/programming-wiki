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

const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
})

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }))
app.use(express.json({ limit: '1mb' }))

// Routes
app.use('/api/auth', authRouter)
app.use('/api/docs', docsRouter)
app.use('/api/chat', chatRouter)

app.get('/api/health', (_, res) => res.json({ status: 'ok' }))

// Socket.IO
registerExecutionHandlers(io)

const PORT = process.env.PORT || 3001
httpServer.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
