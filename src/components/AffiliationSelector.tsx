import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Building2, Stethoscope } from 'lucide-react';
import type { AffiliationKind, PortalAffiliation } from '../contexts/AuthContext';

interface Props {
  affiliations: PortalAffiliation[];
  onSelect: (affiliationId: string) => Promise<void>;
  onCancel: () => void;
}

const KIND_COPY: Record<AffiliationKind, { title: string; description: string; listTitle: string }> = {
  professional: {
    title: 'Profesional de la salud',
    description: 'Accede a tus afiliaciones como profesional.',
    listTitle: 'Selecciona tu afiliación profesional',
  },
  institution: {
    title: 'Institución',
    description: 'Accede a las instituciones que administras.',
    listTitle: 'Selecciona una institución',
  },
};

/**
 * Selección de afiliación tras el login (multi-afiliación).
 * Solo organiza visualmente la lista que envió el backend; la autorización real
 * se vuelve a validar en POST /api/bmq/v1/affiliations/select.
 */
export function AffiliationSelector({ affiliations, onSelect, onCancel }: Props) {
  const kinds = Array.from(new Set(affiliations.map((a) => a.kind)));
  const hasBothKinds = kinds.length > 1;

  const [kind, setKind] = useState<AffiliationKind | null>(hasBothKinds ? null : kinds[0] ?? null);
  const [selectingId, setSelectingId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSelect = async (id: string) => {
    setSelectingId(id);
    setErrorMsg('');
    try {
      await onSelect(id);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'No fue posible seleccionar la afiliación.');
      setSelectingId(null);
    }
  };

  const visible = kind ? affiliations.filter((a) => a.kind === kind) : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-bmq-charcoal/80 backdrop-blur-sm border border-white/5 p-12"
    >
      {kind === null ? (
        <>
          <div className="text-center mb-10">
            <h1 className="font-serif text-2xl text-bmq-ivory mb-3 tracking-wide">¿CÓMO DESEAS INGRESAR?</h1>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-bmq-ivory/50">Tu usuario tiene varias afiliaciones</p>
          </div>
          <div className="space-y-4">
            {(['professional', 'institution'] as AffiliationKind[])
              .filter((k) => kinds.includes(k))
              .map((k) => {
                const Icon = k === 'institution' ? Building2 : Stethoscope;
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setKind(k)}
                    className="w-full text-left border border-white/10 hover:border-bmq-ivory/60 p-6 transition-colors group flex items-start"
                  >
                    <Icon size={18} className="mr-4 mt-0.5 text-bmq-gold shrink-0" />
                    <span>
                      <span className="block text-xs tracking-[0.2em] uppercase text-bmq-ivory mb-2">{KIND_COPY[k].title}</span>
                      <span className="block text-xs font-light text-bmq-ivory/50">{KIND_COPY[k].description}</span>
                    </span>
                  </button>
                );
              })}
          </div>
        </>
      ) : (
        <>
          {hasBothKinds && (
            <button
              type="button"
              onClick={() => setKind(null)}
              className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase text-bmq-ivory/50 hover:text-bmq-ivory transition-colors mb-6"
            >
              <ArrowLeft size={12} className="mr-2" />
              Cambiar tipo de ingreso
            </button>
          )}
          <div className="text-center mb-10">
            <h1 className="font-serif text-2xl text-bmq-ivory mb-3 tracking-wide uppercase">{KIND_COPY[kind].listTitle}</h1>
            <p className="text-[0.65rem] uppercase tracking-[0.2em] text-bmq-ivory/50">Elige con cuál deseas operar</p>
          </div>
          <ul className="space-y-3">
            {visible.map((a) => (
              <li key={a.id}>
                <button
                  type="button"
                  disabled={selectingId !== null}
                  onClick={() => handleSelect(a.id)}
                  className="w-full text-left border border-white/10 hover:border-bmq-ivory/60 p-5 transition-colors flex items-center disabled:opacity-50"
                >
                  {a.image ? (
                    <img src={a.image} alt="" className={`w-10 h-10 object-cover mr-4 shrink-0 ${a.kind === 'professional' ? 'rounded-full' : ''}`} />
                  ) : (
                    <span className="w-10 h-10 mr-4 shrink-0 flex items-center justify-center border border-white/10 text-bmq-ivory/40">
                      {a.kind === 'institution' ? <Building2 size={16} /> : <Stethoscope size={16} />}
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block text-sm text-bmq-ivory truncate">{a.name}</span>
                    {a.document && (
                      <span className="block text-[0.65rem] tracking-widest uppercase text-bmq-ivory/40 mt-1">
                        {a.document_label} {a.document}
                      </span>
                    )}
                  </span>
                  {selectingId === a.id && (
                    <span className="ml-auto text-[0.6rem] tracking-[0.2em] text-bmq-ivory/50">INGRESANDO...</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      {errorMsg && <div className="text-red-400 text-xs text-center mt-6">{errorMsg}</div>}

      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onCancel}
          className="text-[0.65rem] tracking-[0.1em] text-bmq-ivory/40 hover:text-bmq-ivory transition-colors"
        >
          Cerrar sesión
        </button>
      </div>
    </motion.div>
  );
}
