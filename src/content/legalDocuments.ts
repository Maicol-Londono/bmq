import type { LegalDocumentContent } from './legalTypes.ts';
import { POLITICA_TRATAMIENTO_DATOS } from './politicaTratamientoDatos.ts';
import { AVISO_PRIVACIDAD } from './avisoPrivacidad.ts';
import { AUTORIZACION_TRATAMIENTO_DATOS } from './autorizacionTratamientoDatos.ts';

// Documentos legales públicos, por ruta. Los usa vite.config.ts para incluir el texto completo en el HTML inicial.
export const LEGAL_DOCUMENTS: Record<string, LegalDocumentContent> = {
  [POLITICA_TRATAMIENTO_DATOS.path]: POLITICA_TRATAMIENTO_DATOS,
  [AVISO_PRIVACIDAD.path]: AVISO_PRIVACIDAD,
  [AUTORIZACION_TRATAMIENTO_DATOS.path]: AUTORIZACION_TRATAMIENTO_DATOS,
};
