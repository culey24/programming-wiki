import { Router } from 'express'
import { readFile, readdir } from 'fs/promises'
import { join, resolve } from 'path'
import { fileURLToPath } from 'url'

const router = Router()

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const CONTENT_DIR = resolve(__dirname, '../../../../content')

// Sanitize path to prevent directory traversal
function sanitizePath(input) {
  return input.replace(/\.\./g, '').replace(/[^a-zA-Z0-9/_-]/g, '')
}

// GET /api/docs/:path(*) — serve a markdown file
router.get('/*', async (req, res) => {
  const rawPath = req.params[0] || 'intro'
  const safePath = sanitizePath(rawPath)
  const filePath = join(CONTENT_DIR, `${safePath}.md`)

  // Prevent escaping content dir
  if (!filePath.startsWith(CONTENT_DIR)) {
    return res.status(400).json({ error: 'Invalid path.' })
  }

  try {
    const content = await readFile(filePath, 'utf-8')
    return res.json({ content, path: safePath })
  } catch (err) {
    if (err.code === 'ENOENT') {
      return res.status(404).json({ error: 'Document not found.' })
    }
    console.error('Docs error:', err)
    return res.status(500).json({ error: 'Failed to read document.' })
  }
})

export default router
