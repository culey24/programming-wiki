import { spawn, execSync } from 'child_process'
import { writeFileSync, mkdirSync, rmSync, existsSync } from 'fs'
import { join } from 'path'
import { randomUUID } from 'crypto'
import { tmpdir } from 'os'

const TIMEOUT_MS = 10_000
const MEMORY_LIMIT = '256m'
const CPU_LIMIT = '0.5'
const PIDS_LIMIT = '64'

const LANGUAGE_CONFIG = {
  python:     { image: 'programming-wiki-python',     file: 'code.py',   ext: 'py' },
  javascript: { image: 'programming-wiki-javascript', file: 'code.js',   ext: 'js' },
  cpp:        { image: 'programming-wiki-cpp',        file: 'code.cpp',  ext: 'cpp' },
  java:       { image: 'programming-wiki-java',       file: 'Main.java', ext: 'java' },
  rust:       { image: 'programming-wiki-rust',       file: 'code.rs',   ext: 'rs' },
}

/**
 * Run code in a sandboxed Docker container.
 * @param {string} language
 * @param {string} code
 * @param {(type: 'stdout'|'stderr', data: string) => void} onOutput
 * @returns {Promise<{ exitCode: number, duration_ms: number, status: 'success'|'error'|'timeout' }>}
 */
export async function runInDocker(language, code, onOutput) {
  const config = LANGUAGE_CONFIG[language]
  if (!config) throw new Error(`Unsupported language: ${language}`)

  const execId = randomUUID()
  const workDir = join(tmpdir(), `exec-${execId}`)
  mkdirSync(workDir, { recursive: true })
  writeFileSync(join(workDir, config.file), code, 'utf-8')

  const startTime = Date.now()
  let timedOut = false
  let exitCode = -1

  return new Promise((resolve) => {
    const args = [
      'run', '--rm',
      '--network', 'none',
      `--memory=${MEMORY_LIMIT}`,
      `--cpus=${CPU_LIMIT}`,
      `--pids-limit=${PIDS_LIMIT}`,
      '--read-only',
      '--tmpfs', '/tmp:rw,noexec,nosuid,size=16m',
      '-v', `${workDir}:/workspace:ro`,
      '--name', `exec-${execId}`,
      config.image,
    ]

    const proc = spawn('docker', args)

    proc.stdout.on('data', (chunk) => onOutput('stdout', chunk.toString()))
    proc.stderr.on('data', (chunk) => onOutput('stderr', chunk.toString()))

    const killTimer = setTimeout(() => {
      timedOut = true
      try { execSync(`docker kill exec-${execId}`, { stdio: 'ignore' }) } catch {}
      proc.kill('SIGKILL')
    }, TIMEOUT_MS)

    proc.on('close', (code) => {
      clearTimeout(killTimer)
      exitCode = code ?? -1
      const duration_ms = Date.now() - startTime

      // Cleanup workspace
      try { rmSync(workDir, { recursive: true, force: true }) } catch {}

      const status = timedOut ? 'timeout' : exitCode === 0 ? 'success' : 'error'
      resolve({ exitCode, duration_ms, status })
    })

    proc.on('error', (err) => {
      clearTimeout(killTimer)
      onOutput('stderr', `\nExecution error: ${err.message}\nMake sure Docker is running and images are built.\n`)
      try { rmSync(workDir, { recursive: true, force: true }) } catch {}
      resolve({ exitCode: -1, duration_ms: Date.now() - startTime, status: 'error' })
    })
  })
}
