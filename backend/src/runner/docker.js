import { spawn, execFileSync } from 'child_process'
import { writeFileSync, mkdirSync, rmSync } from 'fs'
import { join, resolve } from 'path'
import { randomUUID } from 'crypto'
import { tmpdir } from 'os'

const TIMEOUT_MS = 10_000
const MEMORY_LIMIT = '256m'
const CPU_LIMIT = '0.5'
const PIDS_LIMIT = '64'

let resolvedDockerBin
/** Absolute path when possible; avoids ENOENT when PATH is minimal in containers. */
function dockerBin() {
  if (resolvedDockerBin) return resolvedDockerBin
  const fromEnv = process.env.DOCKER_BIN || process.env.DOCKER_PATH
  if (fromEnv) {
    resolvedDockerBin = fromEnv
    return resolvedDockerBin
  }
  try {
    const p = execFileSync('which', ['docker'], { encoding: 'utf8' }).trim()
    resolvedDockerBin = p || 'docker'
  } catch {
    resolvedDockerBin = 'docker'
  }
  return resolvedDockerBin
}

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
  const execFolder = `exec-${execId}`

  /*
   * Docker Desktop (Mac/Win): `docker run -v` resolves paths on the *host*, not inside
   * the backend container. /tmp/... from os.tmpdir() is invisible → "mounts denied".
   * When EXEC_SANDBOX_HOST_PATH + EXEC_SANDBOX_CONTAINER_PATH are set (Compose), we
   * write under the bind-mount and pass the host absolute path to `docker run`.
   */
  const hostVolRoot = process.env.EXEC_SANDBOX_HOST_PATH
  const containerVolRoot = process.env.EXEC_SANDBOX_CONTAINER_PATH

  let workDir
  /** Path passed to `docker run -v <here>:/workspace` (must exist on Docker host) */
  let volumeHostPath

  if (hostVolRoot && containerVolRoot) {
    workDir = join(containerVolRoot, execFolder)
    volumeHostPath = resolve(join(hostVolRoot, execFolder))
  } else {
    workDir = join(tmpdir(), execFolder)
    volumeHostPath = resolve(workDir)
  }
  // Docker CLI on Windows accepts forward slashes better for bind sources
  if (process.platform === 'win32') {
    volumeHostPath = volumeHostPath.replace(/\\/g, '/')
  }

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
      // C++/Rust compile to /tmp/program — must allow exec (no `noexec` on /tmp)
      '--tmpfs', '/tmp:rw,nosuid,nodev,size=16m',
      '-v', `${volumeHostPath}:/workspace:ro`,
      '--name', `exec-${execId}`,
      config.image,
    ]

    const proc = spawn(dockerBin(), args, { env: process.env })

    proc.stdout.on('data', (chunk) => onOutput('stdout', chunk.toString()))
    proc.stderr.on('data', (chunk) => onOutput('stderr', chunk.toString()))

    const killTimer = setTimeout(() => {
      timedOut = true
      try {
        execFileSync(dockerBin(), ['kill', `exec-${execId}`], { stdio: 'ignore' })
      } catch {}
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
      let hint =
        'Ensure Docker is running, then run `code-runner/build.sh` on the host for sandbox images.'
      if (err.code === 'ENOENT') {
        hint =
          '`docker` was not found. Rebuild the backend image (Alpine `docker-cli` included), or install Docker Desktop and add it to PATH for local `npm run dev`.'
      }
      onOutput('stderr', `\nExecution error: ${err.message}\n${hint}\n`)
      try { rmSync(workDir, { recursive: true, force: true }) } catch {}
      resolve({ exitCode: -1, duration_ms: Date.now() - startTime, status: 'error' })
    })
  })
}
