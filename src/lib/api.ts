/**
 * Cliente HTTP mínimo hacia Wellezy Hub.
 * La URL base se configura con la variable de entorno VITE_API_BASE_URL (ver .env.example).
 */
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/+$/, '');

export const TOKEN_STORAGE_KEY = 'bmq_token';

/**
 * Error HTTP con el estado y el mensaje legible que devuelve Laravel
 * (primer error de validación o `message`).
 */
/**
 * Póliza BMQ tal como la devuelve GET /policies y GET /policies/{id} (BmqPolicyResource).
 * `id` es el id de la póliza; el de la solicitud de origen va en `coverage_request.id`.
 */
export interface BmqPolicy {
  id: string;
  status: string;
  status_label: string;
  issued_at: string | null;
  valid_from: string | null;
  valid_until: string | null;
  has_pdf: boolean;
  affiliation_id: string | null;
  coverage_request: {
    id: string;
    request_code: string | null;
    patient_name: string | null;
    procedure_name: string | null;
    procedure_category_label: string | null;
    coverage_type_label: string | null;
    total_amount: string;
    room_entry_date: string | null;
    status: string;
    status_label: string;
  } | null;
}

export class ApiError extends Error {
  readonly status: number;
  readonly body: unknown;

  constructor(status: number, message: string, body: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.body = body;
  }
}

function readableMessage(status: number, body: unknown): string {
  if (body && typeof body === 'object') {
    const { errors, message } = body as { errors?: Record<string, unknown>; message?: unknown };
    if (errors) {
      const first = Object.values(errors)[0];
      if (Array.isArray(first) && typeof first[0] === 'string') return first[0];
    }
    if (typeof message === 'string' && message) return message;
  }
  return `Error de comunicación con el servidor (HTTP ${status}).`;
}

export async function getJson<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_BASE_URL) {
    throw new Error('VITE_API_BASE_URL no está configurada.');
  }

  const headers = new Headers(init?.headers);
  headers.set('Accept', 'application/json');
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const url = path.startsWith('/api/public')
    ? `${API_BASE_URL.replace(/\/api\/bmq\/v1$/, '')}${path}`
    : `${API_BASE_URL}${path}`;

  const response = await fetch(url, {
    ...init,
    headers,
  });

  if (!response.ok) {
    const text = await response.text();
    let body: unknown = text;
    try {
      body = text ? JSON.parse(text) : null;
    } catch {
      // Respuesta no JSON: se conserva el texto.
    }
    throw new ApiError(response.status, readableMessage(response.status, body), body);
  }

  return (await response.json()) as T;
}

/**
 * Abre el certificado PDF de una póliza en una pestaña nueva.
 * El endpoint exige el token del Portal, por eso no puede ser un simple <a href>: se descarga como blob autenticado.
 */
export async function openPolicyPdf(requestId: string): Promise<void> {
  if (!API_BASE_URL) {
    throw new Error('VITE_API_BASE_URL no está configurada.');
  }

  // La pestaña se abre de inmediato (gesto del usuario) para que el bloqueador de ventanas no la descarte.
  const win = window.open('', '_blank');

  try {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    const response = await fetch(`${API_BASE_URL}/policies/${requestId}/certificate.pdf`, {
      headers: {
        Accept: 'application/json, application/pdf',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    if (!response.ok) {
      throw new ApiError(
        response.status,
        response.status === 404
          ? 'El certificado aún no está disponible.'
          : `No se pudo abrir el certificado (HTTP ${response.status}).`,
        null,
      );
    }

    const url = URL.createObjectURL(await response.blob());
    if (win) {
      win.location.href = url;
    } else {
      window.open(url, '_blank');
    }
  } catch (err) {
    win?.close();
    throw err;
  }
}

export async function postJson<T>(path: string, body: unknown, init?: RequestInit): Promise<T> {
  return getJson<T>(path, {
    method: 'POST',
    body: JSON.stringify(body),
    ...init,
  });
}
