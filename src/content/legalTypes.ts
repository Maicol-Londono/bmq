// Tipos comunes de los documentos legales públicos (política de tratamiento de datos, aviso de privacidad).
// Este archivo no debe importar nada de React ni del DOM: lo consume también vite.config.ts.

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'note'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'list'; items: { label: string; term?: string; text: string }[] }
  // Formato imprimible con campos en blanco (filas de 1 o 2 etiquetas). No recoge datos en la web.
  | { type: 'form'; rows: string[][] }
  // Ficha de datos (etiqueta/valor). `pending` marca datos que el responsable del negocio aún debe confirmar.
  | { type: 'facts'; items: { label: string; value: string; pending?: boolean }[] };

export interface LegalSection {
  n: number;
  id: string;
  /** Etiqueta ordinal opcional ("Primero", "Segundo"...). */
  ordinal?: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocumentContent {
  /** Ruta pública del documento. */
  path: string;
  /** Título (H1, breadcrumb y encabezado de impresión). */
  title: string;
  /** Texto del botón de impresión. */
  printLabel: string;
  /** Texto de apoyo bajo el H1. */
  lead: string;
  /** Nota destacada bajo el texto de apoyo (p. ej. fecha del documento original). */
  note?: { label: string; text: string };
  /** Párrafo con el que abre el texto legal. */
  intro: string;
  sections: LegalSection[];
  signoff: string;
}
