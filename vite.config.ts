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
import { LEGAL_DOCUMENTS } from './src/content/legalDocuments.ts'
import type { LegalBlock, LegalDocumentContent } from './src/content/legalTypes.ts'

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const escapeText = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

function headFor(route: RouteSeo): string {
  const canonical = canonicalFor(route.path)
  const robots = route.indexable ? 'index, follow' : 'noindex, nofollow'
  const tags = [
    `<title>${escapeText(route.title)}</title>`,
    `<meta name="description" content="${escapeAttr(route.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    ...(route.indexable ? [`<link rel="canonical" href="${canonical}" />`] : []),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeAttr(SITE_NAME)}" />`,
    `<meta property="og:locale" content="es_CO" />`,
    `<meta property="og:title" content="${escapeAttr(route.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(route.description)}" />`,
    ...(route.indexable ? [`<meta property="og:url" content="${canonical}" />`] : []),
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

function legalBlockHtml(b: LegalBlock): string {
  if (b.type === 'h3') return `<h3>${escapeText(b.text)}</h3>`
  if (b.type === 'list') {
    const items = b.items
      .map((i) => `<li>${escapeText(i.label)} ${i.term ? `<strong>${escapeText(i.term)}:</strong> ` : ''}${escapeText(i.text)}</li>`)
      .join('')
    return `<ol style="list-style:none;padding:0">${items}</ol>`
  }
  if (b.type === 'form') {
    return `<ul>${b.rows.flat().map((l) => `<li>${escapeText(l)}: ____________________</li>`).join('')}</ul>`
  }
  if (b.type === 'facts') {
    return `<ul>${b.items.map((i) => `<li><strong>${escapeText(i.label)}:</strong> ${escapeText(i.value)}</li>`).join('')}</ul>`
  }
  return `<p>${escapeText(b.text)}</p>`
}

// Texto legal completo en el HTML inicial para quien no ejecute JavaScript.
function legalNoscript(doc: LegalDocumentContent): string {
  const toc = doc.sections.map((s) => `<li><a href="#${s.id}">${escapeText(`${s.n}. ${s.title}`)}</a></li>`).join('')
  const sections = doc.sections
    .map((s) => `<section id="${s.id}"><h2>${escapeText(`${s.n}. ${s.title}`)}</h2>${s.blocks.map(legalBlockHtml).join('')}</section>`)
    .join('')
  return `<noscript><main><h1>${escapeText(doc.title)}</h1><p>${escapeText(doc.intro)}</p><nav><ol>${toc}</ol></nav>${sections}<p>Atentamente,<br />${escapeText(doc.signoff)}</p><p><a href="/">Volver al inicio</a></p></main></noscript>`
}

function noscriptFor(route: RouteSeo): string {
  const legal = LEGAL_DOCUMENTS[route.path]
  if (legal) return legalNoscript(legal)
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
        const html = build(route)
        if (route.path === '/') {
          writeFileSync(join(outDir, 'index.html'), html)
        } else {
          const dir = join(outDir, route.path)
          mkdirSync(dir, { recursive: true })
          writeFileSync(join(dir, 'index.html'), html)
        }
      }

      // 404.html: shell SPA con noindex para rutas desconocidas (el servidor debe responder 404 con este archivo)
      writeFileSync(
        join(outDir, '404.html'),
        build({
          path: '/404',
          title: 'Página no encontrada | BMQ',
          description: 'La página que buscas no existe.',
          breadcrumb: 'No encontrada',
          indexable: false,
        }),
      )

      const urls = PUBLIC_ROUTES.filter((r) => r.indexable)
        .map(
          (r) =>
            `  <url>\n    <loc>${canonicalFor(r.path)}</loc>\n    <priority>${(r.priority ?? 0.5).toFixed(1)}</priority>\n  </url>`,
        )
        .join('\n')
      writeFileSync(
        join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      )

      writeFileSync(
        join(outDir, 'robots.txt'),
        `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
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
