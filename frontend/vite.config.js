import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// In Docker, backend is `backend:3001`. On your machine, use localhost.
const backendTarget = process.env.VITE_DEV_BACKEND || 'http://localhost:3001'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      '/api': backendTarget,
      '/socket.io': {
        target: backendTarget,
        ws: true,
      },
    },
  },
})
