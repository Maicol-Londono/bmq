/**
 * Pagos en línea con Wompi (API BMQ v1, solo modalidad EMISIÓN).
 *
 * Flujo (el backend es la autoridad):
 *   1. startCheckout: el backend crea el intento de pago y devuelve SOLO datos públicos del checkout.
 *   2. Se redirige el navegador al checkout web de Wompi.
 *   3. Wompi devuelve a /pago/resultado?id=<transacción>.
 *   4. refreshPayment: el backend CONSULTA la transacción a Wompi (la redirección sola no aprueba nada).
 *   5. Pago aprobado → el backend registra el pago y el CRM aprueba y emite la póliza.
 *
 * PayPal: descartado por ahora; no existe en el backend.
 */
import { getJson, postJson } from './api';

export type OnlinePaymentStatus = 'PENDING' | 'APPROVED' | 'DECLINED' | 'VOIDED' | 'ERROR';

/** OnlinePaymentResource del backend. */
export interface OnlinePayment {
  uuid: string;
  reference: string;
  status: OnlinePaymentStatus;
  amount_cents: number;
  currency: string;
  provider_transaction_id: string | null;
  paid_at: string | null;
  created_at: string | null;
}

/** Datos públicos del checkout de Wompi (nunca llaves privadas). */
export interface WompiCheckout {
  public_key: string;
  reference: string;
  amount_in_cents: number;
  currency: string;
  signature_integrity: string;
  redirect_url: string | null;
}

/** Ruta a la que Wompi devuelve al usuario. El dominio debe estar registrado en la línea BMQ. */
export const PAYMENT_RETURN_PATH = '/pago/resultado';

/** Pago en curso, guardado para retomarlo al volver de Wompi (la redirección solo trae el id de la transacción). */
const PENDING_PAYMENT_KEY = 'bmq_pending_payment';

export interface PendingPayment {
  requestId: string;
  paymentUuid: string;
  requestCode: string | null;
}

export function savePendingPayment(pending: PendingPayment): void {
  sessionStorage.setItem(PENDING_PAYMENT_KEY, JSON.stringify(pending));
}

export function readPendingPayment(): PendingPayment | null {
  try {
    const raw = sessionStorage.getItem(PENDING_PAYMENT_KEY);
    return raw ? (JSON.parse(raw) as PendingPayment) : null;
  } catch {
    return null;
  }
}

export function clearPendingPayment(): void {
  sessionStorage.removeItem(PENDING_PAYMENT_KEY);
}

/** Inicia (o reutiliza) el intento de pago. El importe lo fija el backend. */
export function startCheckout(requestId: string) {
  return postJson<{ payment: OnlinePayment; checkout: WompiCheckout }>(
    `/coverage-requests/${requestId}/checkout`,
    { redirect_url: `${window.location.origin}${PAYMENT_RETURN_PATH}` },
  );
}

/** Pide al backend verificar la transacción con Wompi y aplicarla. */
export async function refreshPayment(requestId: string, paymentUuid: string, transactionId?: string | null) {
  const result = await postJson<{ data: OnlinePayment }>(
    `/coverage-requests/${requestId}/payments/${paymentUuid}/refresh`,
    transactionId ? { transaction_id: transactionId } : {},
  );
  return result.data;
}

export async function listPayments(requestId: string) {
  const result = await getJson<{ data: OnlinePayment[] }>(`/coverage-requests/${requestId}/payments`);
  return result.data;
}

/** URL del checkout web de Wompi con los datos públicos que devolvió el backend. */
export function buildWompiCheckoutUrl(checkout: WompiCheckout): string {
  const params: [string, string][] = [
    ['public-key', checkout.public_key],
    ['currency', checkout.currency],
    ['amount-in-cents', String(checkout.amount_in_cents)],
    ['reference', checkout.reference],
    ['signature:integrity', checkout.signature_integrity],
  ];
  if (checkout.redirect_url) params.push(['redirect-url', checkout.redirect_url]);
  const query = params.map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');
  return `https://checkout.wompi.co/p/?${query}`;
}

/**
 * Inicia el pago de una solicitud y lleva el navegador al checkout de Wompi.
 * La página se abandona: al volver, /pago/resultado retoma con lo guardado.
 */
export async function payWithWompi(requestId: string, requestCode: string | null): Promise<void> {
  const { payment, checkout } = await startCheckout(requestId);
  savePendingPayment({ requestId, paymentUuid: payment.uuid, requestCode });
  window.location.assign(buildWompiCheckoutUrl(checkout));
}
