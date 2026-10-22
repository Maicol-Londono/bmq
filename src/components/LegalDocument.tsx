import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { Link } from 'react-router-dom';
import { ChevronDown, Printer } from 'lucide-react';
import type { LegalBlock, LegalDocumentContent } from '../content/legalTypes';

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case 'h3':
      return <h3 className="font-serif text-2xl md:text-[1.7rem] leading-snug text-bmq-black mt-12 mb-5">{block.text}</h3>;
    case 'note':
      return (
        <p className="text-[17px] md:text-[18px] leading-8 text-bmq-black border-l-2 border-bmq-gold pl-5 my-8">
          {block.text}
        </p>
      );
    case 'list':
      return (
        <ol className="list-none space-y-5 my-8 p-0">
          {block.items.map((item) => (
            <li key={item.label} className="grid grid-cols-[2.25rem_1fr] md:grid-cols-[2.75rem_1fr] gap-x-2 text-[17px] md:text-[18px] leading-8 text-bmq-black/85">
              <span className="font-medium text-bmq-blue">{item.label}</span>
              <span>
                {item.term && <strong className="font-semibold text-bmq-black">{item.term}: </strong>}
                {item.text}
              </span>
            </li>
          ))}
        </ol>
      );
    case 'form':
      return (
        <div className="my-8 border border-bmq-black/25">
          {block.rows.map((row, i) => (
            <div key={i} className={`grid ${row.length > 1 ? 'sm:grid-cols-2' : ''} ${i > 0 ? 'border-t border-bmq-black/25' : ''}`}>
              {row.map((label, j) => (
                <div key={label} className={`px-4 py-4 min-h-[4.25rem] text-[0.8rem] tracking-[0.12em] uppercase font-medium text-bmq-black/70 ${j > 0 ? 'sm:border-l border-bmq-black/25 border-t sm:border-t-0' : ''}`}>
                  {label}
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    case 'facts':
      return (
        <dl className="my-8 border-t border-bmq-black/10">
          {block.items.map((item) => (
            <div key={item.label} className="grid sm:grid-cols-[13rem_1fr] gap-x-6 gap-y-1 py-4 border-b border-bmq-black/10 text-[17px] md:text-[18px] leading-7">
              <dt className="font-medium text-bmq-black">{item.label}</dt>
              <dd className={`m-0 break-words ${item.pending ? 'italic text-bmq-black/50' : 'text-bmq-black/85'}`}>{item.value}</dd>
            </div>
          ))}
        </dl>
      );
    default:
      return <p className="text-[17px] md:text-[18px] leading-8 text-bmq-black/85 my-6">{block.text}</p>;
  }
}

const PRINT_CSS = `
@media print {
  @page { margin: 2.2cm 2.5cm; }
  header, footer { display: none !important; }
  html, body, #root > div { background: #fff !important; color: #000 !important; }
  .print-doc { position: relative; font-family: Arial, Helvetica, sans-serif; font-size: 11pt; line-height: 1.3; color: #000; text-align: justify; }
  .print-doc p { margin: 0 0 10pt; }
  .print-doc .print-item { margin: 0 0 6pt 18pt; }
  .print-doc .print-h { font-weight: bold; text-decoration: underline; }
  .print-doc .print-h3 { font-weight: bold; margin: 12pt 0 6pt; }
  .print-doc .print-title { text-align: center; font-weight: bold; text-decoration: underline; font-size: 13pt; margin: 14pt 0 18pt; }
  .print-doc .print-form { width: 100%; border-collapse: collapse; margin: 6pt 0 12pt; text-align: left; }
  .print-doc .print-form td { border: 1px solid #000; padding: 8pt; height: 34pt; width: 50%; vertical-align: top; font-size: 10pt; }
  .print-doc .print-brand { display: block; height: 80pt; width: auto; margin: 0 auto; }
  .print-watermark { position: fixed; top: 50%; left: 50%; width: 9cm; transform: translate(-50%, -50%); opacity: 0.12; z-index: 1; pointer-events: none; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
}
`;

// Versión de impresión: texto básico, como el documento original, con logo y marca de agua.
function PrintDocument({ doc }: { doc: LegalDocumentContent }) {
  return (
    <div className="hidden print:block print-doc">
      <img src="/images/logos/BMQ_dorado.png" alt="" aria-hidden="true" className="print-watermark" />
      <img src="/images/logos/BMQ_dorado.png" alt="Blindaje Médico Quirúrgico" className="print-brand" />
      <p className="print-title">{doc.title.toUpperCase()}</p>
      <p>{doc.intro}</p>
      {doc.sections.map((s) => {
        const [first, ...others] = s.blocks;
        const inline = first.type === 'p';
        const rest = inline ? others : s.blocks;
        const heading = s.ordinal ? `${s.ordinal.toUpperCase()}: ${s.title.toUpperCase()}:` : `${s.title.toUpperCase()}:`;
        return (
          <div key={s.id}>
            <p>
              <span className="print-h">{heading}</span> {inline ? first.text : null}
            </p>
            {rest.map((b, i) => {
              if (b.type === 'list')
                return b.items.map((item) => (
                  <p key={`${i}-${item.label}`} className="print-item">
                    {item.label} {item.term ? `${item.term}: ` : ''}
                    {item.text}
                  </p>
                ));
              if (b.type === 'facts')
                return b.items.map((item) => (
                  <p key={`${i}-${item.label}`} className="print-item">
                    {item.label}: {item.value}
                  </p>
                ));
              if (b.type === 'form')
                return (
                  <table key={i} className="print-form">
                    <tbody>
                      {b.rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((label) => (
                            <td key={label} colSpan={row.length === 1 ? 2 : 1}>
                              {label}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              if (b.type === 'h3') return <p key={i} className="print-h3">{b.text}</p>;
              return <p key={i}>{b.text}</p>;
            })}
          </div>
        );
      })}
      <p>
        Atentamente,
        <br />
        {doc.signoff}
      </p>
    </div>
  );
}

export function LegalDocument({ doc }: { doc: LegalDocumentContent }) {
  const [active, setActive] = useState<string>(doc.sections[0].id);
  const [printing, setPrinting] = useState(false);

  // La versión de impresión solo existe en el DOM mientras se imprime (también con Ctrl+P).
  useEffect(() => {
    const before = () => flushSync(() => setPrinting(true));
    const after = () => setPrinting(false);
    window.addEventListener('beforeprint', before);
    window.addEventListener('afterprint', after);
    return () => {
      window.removeEventListener('beforeprint', before);
      window.removeEventListener('afterprint', after);
    };
  }, []);

  // Mejora progresiva: resalta en el índice el apartado que se está leyendo.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -70% 0px' },
    );
    doc.sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [doc]);

  const toc = (
    <ol className="space-y-1 list-none p-0 m-0">
      {doc.sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            aria-current={active === s.id ? 'location' : undefined}
            className={`flex gap-3 py-2 pl-4 border-l text-[15px] leading-snug transition-colors duration-300 ${
              active === s.id
                ? 'border-bmq-gold text-bmq-black font-medium'
                : 'border-bmq-black/15 text-bmq-black/65 hover:text-bmq-black hover:border-bmq-blue'
            }`}
          >
            <span className="w-5 shrink-0 text-bmq-blue">{s.n}.</span>
            <span>{s.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <style>{PRINT_CSS}</style>
      {printing && <PrintDocument doc={doc} />}
      <div className="w-full print:hidden">
        {/* 1. ENCABEZADO (NEGRO) */}
        <section className="pt-32 pb-16 lg:pt-44 lg:pb-20 bg-bmq-black text-bmq-ivory">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-5xl mx-auto">
              <nav aria-label="Ruta de navegación" className="text-[0.7rem] tracking-[0.15em] uppercase text-bmq-ivory/60 mb-10">
                <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 list-none p-0 m-0">
                  <li>
                    <Link to="/" className="hover:text-bmq-ivory transition-colors">Inicio</Link>
                  </li>
                  <li aria-hidden="true" className="text-bmq-ivory/30">/</li>
                  <li aria-current="page" className="text-bmq-gold">{doc.title}</li>
                </ol>
              </nav>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-bmq-ivory">{doc.title}</h1>
              <p className="text-[17px] md:text-[20px] text-bmq-ivory/80 font-light leading-relaxed max-w-3xl mb-10">{doc.lead}</p>
              {doc.note && (
                <div className="border-l border-bmq-gold/40 pl-6 max-w-3xl">
                  <p className="text-[15px] md:text-[16px] text-bmq-ivory/70 leading-relaxed">
                    <strong className="font-medium text-bmq-ivory">{doc.note.label}</strong> {doc.note.text}
                  </p>
                </div>
              )}
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center border border-white/20 px-6 py-3 text-xs tracking-widest font-medium hover:bg-bmq-ivory hover:text-bmq-black transition-all duration-300"
                >
                  <Printer size={14} className="mr-3" />
                  {doc.printLabel}
                </button>
                <Link
                  to="/"
                  className="inline-flex items-center border border-white/20 px-6 py-3 text-xs tracking-widest font-medium hover:bg-bmq-ivory hover:text-bmq-black transition-all duration-300"
                >
                  VOLVER AL INICIO
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. DOCUMENTO (MARFIL) */}
        <section className="py-16 lg:py-24 bg-bmq-ivory text-bmq-black">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
              {/* Índice */}
              <aside className="mb-12 lg:mb-0" aria-label="Índice del documento">
                <details className="group lg:hidden border border-bmq-black/15 bg-white/50">
                  <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-[0.75rem] tracking-[0.2em] uppercase font-medium">
                    Índice del documento
                    <ChevronDown size={16} className="transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5">{toc}</div>
                </details>
                <div className="hidden lg:block sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto pr-2">
                  <p className="text-[0.7rem] tracking-[0.25em] uppercase text-bmq-black/50 mb-5">Índice del documento</p>
                  {toc}
                </div>
              </aside>

              {/* Contenido legal */}
              <article className="max-w-3xl">
                <p className="text-[17px] md:text-[18px] leading-8 text-bmq-black/85 mb-4">{doc.intro}</p>

                {doc.sections.map((s) => (
                  <section key={s.id} id={s.id} aria-labelledby={`${s.id}-titulo`} className="scroll-mt-28 pt-12 mt-12 border-t border-bmq-black/10 first-of-type:mt-8">
                    {s.ordinal && <p className="text-[0.7rem] tracking-[0.25em] uppercase text-bmq-gold mb-3">{s.ordinal}</p>}
                    <h2 id={`${s.id}-titulo`} className="font-serif text-3xl md:text-4xl leading-[1.2] text-bmq-black mb-6">
                      {s.n}. {s.title}
                    </h2>
                    {s.blocks.map((b, i) => (
                      <Block key={i} block={b} />
                    ))}
                  </section>
                ))}

                <p className="mt-16 pt-8 border-t border-bmq-black/10 text-[17px] md:text-[18px] leading-8 text-bmq-black/85">
                  Atentamente,
                  <br />
                  <strong className="font-semibold">{doc.signoff}</strong>
                </p>

                {/* Misma acción del encabezado, al final para quien termina de leer */}
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="mt-10 inline-flex items-center border border-bmq-black/30 px-6 py-3 text-xs tracking-widest font-medium hover:bg-bmq-black hover:text-bmq-ivory transition-all duration-300"
                >
                  <Printer size={14} className="mr-3" />
                  {doc.printLabel}
                </button>
              </article>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
