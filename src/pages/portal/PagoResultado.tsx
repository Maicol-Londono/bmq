import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { AlertCircle, Check, Clock } from 'lucide-react';
import { getJson } from '../../lib/api';
import {
  clearPendingPayment,
  payWithWompi,
  readPendingPayment,
  refreshPayment,
  type OnlinePayment,
} from '../../lib/payments';

/** Campos de GET /coverage-requests/{id} que usa esta página. */
interface RequestStatus {
  status: string;
  status_label: string;
  request_code: string | null;
}

type Phase =
  | { kind: 'verifying' }
  | { kind: 'missing' }
  | { kind: 'error'; message: string }
  | { kind: 'done'; payment: OnlinePayment };

/** Tras aprobarse el pago se consulta la solicitud hasta ver la póliza emitida (máx. ~1 min). */
const POLL_MS = 4000;
const MAX_POLLS = 15;

/**
 * Retorno del checkout de Wompi (/pago/resultado?id=<transacción>).
 * Nunca da el pago por bueno por la URL: le pide al backend que lo verifique con Wompi.
 */
export function PagoResultado() {
  const [searchParams] = useSearchParams();
  const transactionId = searchParams.get('id');
  const pending = readPendingPayment();
  const [phase, setPhase] = useState<Phase>(pending ? { kind: 'verifying' } : { kind: 'missing' });
  const [request, setRequest] = useState<RequestStatus | null>(null);
  const [polls, setPolls] = useState(0);
  const [retrying, setRetrying] = useState(false);
  const startedRef = useRef(false);

  const verify = useCallback(async () => {
    if (!pending) return;
    setPhase({ kind: 'verifying' });
    try {
      const payment = await refreshPayment(pending.requestId, pending.paymentUuid, transactionId);
      setPhase({ kind: 'done', payment });
      if (payment.status === 'APPROVED') clearPendingPayment();
    } catch (err) {
      setPhase({ kind: 'error', message: err instanceof Error ? err.message : 'No pudimos verificar el pago.' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionId]);

  // Verificación automática al llegar (una sola vez, incluso en StrictMode).
  useEffect(() => {
    if (startedRef.current || !pending) return;
    startedRef.current = true;
    void verify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pago aprobado: seguimos el estado de la solicitud hasta que el CRM emita la póliza.
  const approved = phase.kind === 'done' && phase.payment.status === 'APPROVED';
  const issued = request?.status === 'policy_issued';
  useEffect(() => {
    if (!approved || issued || polls >= MAX_POLLS || !pending) return;
    const timer = window.setTimeout(async () => {
      try {
        const result = await getJson<{ data: RequestStatus }>(`/coverage-requests/${pending.requestId}`);
        setRequest(result.data);
      } catch (err) {
        console.error(err);
      } finally {
        setPolls((n) => n + 1);
      }
    }, polls === 0 ? 0 : POLL_MS);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [approved, issued, polls]);

  const retryPayment = async () => {
    if (!pending || retrying) return;
    setRetrying(true);
    try {
      await payWithWompi(pending.requestId, pending.requestCode);
    } catch (err) {
      setRetrying(false);
      setPhase({ kind: 'error', message: err instanceof Error ? err.message : 'No pudimos iniciar el pago.' });
    }
  };

  const code = request?.request_code ?? pending?.requestCode;

  // --- Contenido según el estado ---
  let icon = <Clock size={32} className="text-bmq-gold" />;
  let title = 'Verificando el pago…';
  let text = 'Estamos confirmando la transacción con Wompi. No cierres esta página.';
  let actions: ReactNode = null;

  if (phase.kind === 'missing') {
    icon = <AlertCircle size={32} className="text-bmq-gold" />;
    title = 'No encontramos el pago en curso';
    text = 'Si ya realizaste el pago, revisa el estado de tu solicitud en Mis Pólizas en unos minutos.';
  } else if (phase.kind === 'error') {
    icon = <AlertCircle size={32} className="text-red-400" />;
    title = 'No pudimos verificar el pago';
    text = phase.message;
    actions = (
      <button onClick={() => void verify()} className="bg-bmq-ivory text-bmq-black px-10 py-4 text-xs tracking-[0.2em] font-medium hover:bg-white transition-colors">
        REINTENTAR VERIFICACIÓN
      </button>
    );
  } else if (phase.kind === 'done') {
    const { status } = phase.payment;
    if (status === 'APPROVED') {
      icon = <Check size={32} className="text-bmq-gold" />;
      title = issued ? 'Póliza emitida' : 'Pago aprobado';
      text = issued
        ? 'Tu pago fue confirmado y la póliza ya fue emitida. El certificado estará disponible en Mis Pólizas.'
        : polls >= MAX_POLLS
          ? 'Tu pago fue confirmado. La póliza se está emitiendo; revisa Mis Pólizas en unos minutos.'
          : 'Tu pago fue confirmado. Estamos aprobando la solicitud y emitiendo la póliza…';
    } else if (status === 'PENDING') {
      title = 'Pago en proceso';
      text = 'Wompi aún no confirma la transacción. Consulta de nuevo en unos segundos.';
      actions = (
        <button onClick={() => void verify()} className="bg-bmq-ivory text-bmq-black px-10 py-4 text-xs tracking-[0.2em] font-medium hover:bg-white transition-colors">
          CONSULTAR DE NUEVO
        </button>
      );
    } else {
      icon = <AlertCircle size={32} className="text-red-400" />;
      title = 'Pago no aprobado';
      text = 'La transacción no fue aprobada. Puedes intentar el pago nuevamente.';
      actions = (
        <button onClick={() => void retryPayment()} disabled={retrying} className="bg-bmq-gold text-bmq-black px-10 py-4 text-xs tracking-[0.2em] font-medium hover:bg-white transition-colors disabled:opacity-50">
          {retrying ? 'REDIRIGIENDO...' : 'INTENTAR DE NUEVO'}
        </button>
      );
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-24 text-center">
      <div className="w-20 h-20 bg-bmq-gold/10 rounded-full flex items-center justify-center mx-auto mb-12">{icon}</div>
      <h1 className="font-serif text-4xl lg:text-5xl mb-6">{title}</h1>
      <p className="text-lg text-bmq-ivory/70 font-light max-w-xl mx-auto mb-16">{text}</p>

      {code && (
        <div className="border border-white/10 bg-bmq-charcoal/30 p-8 max-w-md mx-auto mb-16">
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-bmq-ivory/50 block mb-4">Número de Solicitud</span>
          <span className="font-serif text-3xl tracking-widest text-bmq-gold">{code}</span>
          {request && <p className="text-xs text-bmq-ivory/40 mt-4 font-light">Estado: {request.status_label}</p>}
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
        {actions}
        <Link to="/portal/polizas" className="border border-white/20 text-bmq-ivory px-10 py-4 text-xs tracking-[0.2em] font-medium hover:border-bmq-ivory transition-colors">
          VER MIS PÓLIZAS
        </Link>
      </div>
    </div>
  );
}
