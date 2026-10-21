import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  DEFAULT_OG_IMAGE,
  PRIVATE_ROUTES,
  PUBLIC_ROUTES,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  canonicalFor,
  jsonLdFor,
} from './src/seo/routes.ts'
import type { RouteSeo } from './src/seo/routes.ts'

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const escapeText = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

function headFor(route: RouteSeo): string {
  const canonical = canonicalFor(route.path)
  const robots = route.indexable ? 'index, follow' : 'noindex, nofollow'
  const tags = [
    `<title>${escapeText(route.title)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />`,
    `<meta property="og:locale" content="es_CO" />`,
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${absoluteUrl(DEFAULT_OG_IMAGE)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(route.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(route.description)}" />`,
    `<meta name="twitter:image" content="${absoluteUrl(DEFAULT_OG_IMAGE)}" />`,
  ]
  if (route.indexable) {
    // "<" escapado para que el JSON nunca cierre el <script>
    const json = JSON.stringify(jsonLdFor(route.path)).replace(/</g, '\\u003c')
    tags.push(`<script type="application/ld+json" data-prerender>${json}</script>`)
  }
  return tags.map((t) => `    ${t}`).join('\n')
}

function noscriptFor(route: RouteSeo): string {
  const links = PUBLIC_ROUTES.map((r) => `<li><a href="${r.path}">${escapeText(r.breadcrumb)}</a></li>`).join('')
  return `<noscript><main><h1>${escapeText(route.title)}</h1><p>${escapeText(route.description)}</p><nav><ul>${links}</ul></nav></main></noscript>`
}

/**
 * Genera en el build, a partir de src/seo/routes.ts:
 *  - un index.html por ruta con title, description, canonical, robots, OG y JSON-LD propios
 *  - sitemap.xml (solo URL públicas, indexables y canónicas)
 *  - robots.txt
 * La app sigue siendo una SPA: React toma el control en el navegador (SeoManager mantiene los metadatos al navegar).
 */
function seoPlugin(): Plugin {
  let outDir = 'dist'
  return {
    name: 'bmq-seo',
    apply: 'build',
    configResolved(config) {
      outDir = join(config.root, config.build.outDir)
    },
    closeBundle() {
      const template = readFileSync(join(outDir, 'index.html'), 'utf-8')
      const build = (route: RouteSeo) =>
        template
          .replace(/<title>[\s\S]*?<\/title>\s*/, '')
          .replace('<!--seo-head-->', headFor(route))
          .replace('<!--seo-noscript-->', noscriptFor(route))

      for (const route of [...PUBLIC_ROUTES, ...PRIVATE_ROUTES]) {
        // /portal y /pago/resultado quedan atendidos por el fallback SPA con noindex vía SeoManager
        if (route.path === '/portal') continue
        const html = build(route)
        if (route.path === '/') {
          writeFileSync(join(outDir, 'index.html'), html)
        } else {
          const dir = join(outDir, route.path)
          mkdirSync(dir, { recursive: true })
          writeFileSync(join(dir, 'index.html'), html)
        }
      }

      const today = new Date().toISOString().slice(0, 10)
      const urls = PUBLIC_ROUTES.filter((r) => r.indexable)
        .map(
          (r) =>
            `  <url>\n    <loc>${canonicalFor(r.path)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${(r.priority ?? 0.5).toFixed(1)}</priority>\n  </url>`,
        )
        .join('\n')
      writeFileSync(
        join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )

      writeFileSync(
        join(outDir, 'robots.txt'),
        `User-agent: *\nAllow: /\nDisallow: /portal\nDisallow: /pago/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      )
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    seoPlugin(),
  ],
})
