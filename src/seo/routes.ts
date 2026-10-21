// Fuente única de metadatos SEO. La consumen:
//  - el cliente (hook useSeo)  -> actualiza <head> al navegar
//  - vite.config.ts            -> genera HTML por ruta, sitemap.xml y robots.txt en el build
// Este archivo no debe importar nada de React ni del DOM.

export const SITE_URL = 'https://bmq.wellezyhub.com';
export const SITE_NAME = 'Blindaje Médico Quirúrgico';
export const SITE_SHORT_NAME = 'BMQ';
export const DEFAULT_OG_IMAGE = '/images/pages/home/home_cinematic.png';
export const LOGO_URL = '/images/logos/BMQ_H-D-T.png';

// Datos verificados en BUSINESS_RULES.md §5 y en la página /contacto.
export const CONTACT = {
  email: 'contact@blindajemedicoquirurgico.com',
  telephone: '+57 301 654 6268',
  streetAddress: 'Carrera 43 # 5A – 113, Oficina 702, Edificio One Plaza',
  locality: 'Medellín',
  country: 'CO',
};

export interface RouteSeo {
  path: string;
  title: string;
  description: string;
  /** Nombre corto para migas de pan (BreadcrumbList). */
  breadcrumb: string;
  /** Si es false la ruta lleva noindex y no entra al sitemap. */
  indexable: boolean;
  /** Prioridad orientativa para sitemap. */
  priority?: number;
}

export const PUBLIC_ROUTES: RouteSeo[] = [
  {
    path: '/',
    title: 'Cobertura Médica para Médicos | Blindaje Médico Quirúrgico',
    description:
      'Protección jurídica especializada y respaldo para médicos y profesionales de la salud en Colombia que realizan procedimientos quirúrgicos, estéticos e invasivos. Conoce BMQ y BMQ+.',
    breadcrumb: 'Inicio',
    indexable: true,
    priority: 1.0,
  },
  {
    path: '/proteccion',
    title: 'Protección Jurídica para Médicos y Profesionales de la Salud | BMQ',
    description:
      'Cómo funciona el sistema BMQ: acompañamiento preventivo, documentación y defensa jurídica frente a reclamaciones civiles, penales, disciplinarias y administrativas del ejercicio médico.',
    breadcrumb: 'Protección',
    indexable: true,
    priority: 0.9,
  },
  {
    path: '/coberturas',
    title: 'Coberturas BMQ y BMQ+: Protección Profesional para Médicos',
    description:
      'Compara los dos niveles de protección de BMQ: protección jurídica (BMQ) y protección jurídica con respaldo económico (BMQ+), según las condiciones de cada cobertura.',
    breadcrumb: 'Coberturas',
    indexable: true,
    priority: 0.9,
  },
  {
    path: '/coberturas/basica',
    title: 'Cobertura Básica BMQ: Protección Jurídica para Médicos',
    description:
      'Alcance de la Garantía Básica BMQ: asesoría, acompañamiento y defensa jurídica en responsabilidad civil, penal, disciplinaria y administrativa para profesionales de la salud.',
    breadcrumb: 'Garantía Básica',
    indexable: true,
    priority: 0.8,
  },
  {
    path: '/coberturas/plus',
    title: 'Cobertura PLUS BMQ+: Protección Jurídica y Respaldo Económico',
    description:
      'Garantía Plus BMQ+: la protección jurídica de BMQ más respaldo económico de hasta $250.000.000 COP ante una eventual condena, conforme a las condiciones de la cobertura.',
    breadcrumb: 'Garantía Plus',
    indexable: true,
    priority: 0.8,
  },
  {
    path: '/procedimientos',
    title: 'Procedimientos Quirúrgicos y Estéticos: Alcance de la Protección BMQ',
    description:
      'Protección alrededor de procedimientos quirúrgicos, tratamientos estéticos y atención posoperatoria: qué contempla BMQ, cómo se solicita la cobertura por procedimiento y sus límites.',
    breadcrumb: 'Procedimientos',
    indexable: true,
    priority: 0.7,
  },
  {
    path: '/nosotros',
    title: 'Quiénes Somos | Blindaje Médico Quirúrgico (BMQ)',
    description:
      'Conoce a Blindaje Médico Quirúrgico: nuestra propuesta de protección jurídica especializada para profesionales e instituciones del sector salud en Colombia.',
    breadcrumb: 'Nosotros',
    indexable: true,
    priority: 0.6,
  },
  {
    path: '/contacto',
    title: 'Contacto | Blindaje Médico Quirúrgico en Medellín, Colombia',
    description:
      'Comunícate con BMQ por WhatsApp, correo o en nuestras oficinas en Medellín para recibir orientación sobre coberturas de protección jurídica para médicos.',
    breadcrumb: 'Contacto',
    indexable: true,
    priority: 0.7,
  },
];

// Rutas existentes que NO deben indexarse.
export const PRIVATE_ROUTES: RouteSeo[] = [
  {
    path: '/login',
    title: 'Acceso al Portal Médico | BMQ',
    description: 'Acceso para profesionales afiliados a Blindaje Médico Quirúrgico.',
    breadcrumb: 'Portal',
    indexable: false,
  },
  {
    path: '/portal',
    title: 'Portal Médico | BMQ',
    description: 'Área privada para profesionales afiliados a BMQ.',
    breadcrumb: 'Portal',
    indexable: false,
  },
  {
    path: '/pago/resultado',
    title: 'Resultado del pago | BMQ',
    description: 'Resultado del pago de una cobertura BMQ.',
    breadcrumb: 'Pago',
    indexable: false,
  },
  {
    // /solicitar-cobertura solo redirige (a /login o al portal): no es contenido indexable.
    path: '/solicitar-cobertura',
    title: 'Solicitar cobertura | BMQ',
    description: 'Solicita tu cobertura BMQ desde el portal médico.',
    breadcrumb: 'Solicitar cobertura',
    indexable: false,
  },
];

const ALL = [...PUBLIC_ROUTES, ...PRIVATE_ROUTES];

export function canonicalFor(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

/** Devuelve el SEO de la ruta; rutas desconocidas o del portal -> noindex. */
export function seoForPath(pathname: string): RouteSeo {
  const path = normalizePath(pathname);
  const exact = ALL.find((r) => r.path === path);
  if (exact) return exact;
  const parent = PRIVATE_ROUTES.find((r) => r.path !== '/' && path.startsWith(`${r.path}/`));
  if (parent) return { ...parent, path };
  return {
    path,
    title: 'Página no encontrada | BMQ',
    description: 'La página que buscas no existe.',
    breadcrumb: 'No encontrada',
    indexable: false,
  };
}

// ---------- JSON-LD (solo datos verificables) ----------

export function organizationJsonLd() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: SITE_SHORT_NAME,
    url: `${SITE_URL}/`,
    logo: absoluteUrl(LOGO_URL),
    description:
      'Protección jurídica especializada y respaldo para profesionales de la salud en Colombia.',
    email: CONTACT.email,
    telephone: CONTACT.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.streetAddress,
      addressLocality: CONTACT.locality,
      addressCountry: CONTACT.country,
    },
    areaServed: { '@type': 'Country', name: 'Colombia' },
  };
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: 'es-CO',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function breadcrumbJsonLd(path: string) {
  const home = PUBLIC_ROUTES[0];
  const items: { name: string; path: string }[] = [{ name: home.breadcrumb, path: '/' }];
  if (path.startsWith('/coberturas/')) {
    items.push({ name: 'Coberturas', path: '/coberturas' });
  }
  if (path !== '/') {
    const r = PUBLIC_ROUTES.find((x) => x.path === path);
    if (r) items.push({ name: r.breadcrumb, path: r.path });
  }
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: canonicalFor(it.path),
    })),
  };
}

// Descripciones de servicio: se limitan a lo documentado en BUSINESS_RULES.md.
const SERVICES: Record<string, { name: string; description: string }> = {
  '/coberturas/basica': {
    name: 'Cobertura Básica BMQ',
    description:
      'Protección jurídica para profesionales de la salud: asesoría, acompañamiento preventivo y defensa en responsabilidad civil, penal, disciplinaria y actuaciones administrativas.',
  },
  '/coberturas/plus': {
    name: 'Cobertura PLUS BMQ+',
    description:
      'Protección jurídica de BMQ con respaldo económico de hasta $250.000.000 COP ante una eventual condena, conforme a las condiciones de la cobertura.',
  },
};

export function serviceJsonLd(path: string) {
  const s = SERVICES[path];
  if (!s) return null;
  return {
    '@type': 'Service',
    '@id': `${canonicalFor(path)}#service`,
    name: s.name,
    description: s.description,
    url: canonicalFor(path),
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'Colombia' },
    audience: { '@type': 'Audience', audienceType: 'Médicos y profesionales de la salud' },
  };
}

/** Grafo JSON-LD completo para una ruta pública indexable. */
export function jsonLdFor(path: string) {
  const graph: object[] = [];
  if (path === '/') {
    graph.push(organizationJsonLd(), websiteJsonLd());
  } else {
    graph.push(breadcrumbJsonLd(path));
    const svc = serviceJsonLd(path);
    if (svc) graph.push(svc);
    if (path === '/contacto' || path === '/nosotros') graph.push(organizationJsonLd());
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
