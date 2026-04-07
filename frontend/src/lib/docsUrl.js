/** Docusaurus origin (no trailing slash). */
export const DOCS_ORIGIN = (import.meta.env.VITE_DOCS_URL || 'http://localhost:3000').replace(/\/$/, '')

/** Full URL for a doc path like `/docs/intro` or `docs/Python/Chapter_1`. */
export function docsUrl(docPath) {
  const p = docPath.startsWith('/') ? docPath : `/${docPath}`
  const withDocs = p.startsWith('/docs') ? p : `/docs${p}`
  return `${DOCS_ORIGIN}${withDocs}`
}
