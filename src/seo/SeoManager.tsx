import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  canonicalFor,
  jsonLdFor,
  seoForPath,
} from './routes';

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(data: object | null) {
  const id = 'bmq-jsonld';
  document.getElementById(id)?.remove();
  // Elimina el JSON-LD prerenderizado para no duplicarlo tras navegar en cliente.
  document.head.querySelectorAll('script[type="application/ld+json"][data-prerender]').forEach((n) => n.remove());
  if (!data) return;
  const s = document.createElement('script');
  s.id = id;
  s.type = 'application/ld+json';
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
}

/** Mantiene title, description, canonical, robots, Open Graph y JSON-LD en sincronía con la ruta. */
export function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = seoForPath(pathname);
    const canonical = canonicalFor(seo.path);

    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'robots', seo.indexable ? 'index, follow' : 'noindex, nofollow');
    if (seo.indexable) upsertCanonical(canonical);
    else document.head.querySelector('link[rel="canonical"]')?.remove();

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:locale', 'es_CO');
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', absoluteUrl(DEFAULT_OG_IMAGE));
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', absoluteUrl(DEFAULT_OG_IMAGE));

    setJsonLd(seo.indexable ? jsonLdFor(seo.path) : null);
  }, [pathname]);

  return null;
}
