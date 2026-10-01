export const PRICING_CONFIG = {
  ivaRate: 0.19,
};

/**
 * Identificadores del catálogo del backend (GET /api/bmq/procedures y validación de
 * POST /api/bmq/coverage-requests). Deben coincidir exactamente: el backend es la fuente de verdad.
 */
export type PricingCategory = 'cirugia' | 'estetica';
export type CoverageType = 'basica' | 'plus';

export const PRICING_CATEGORIES: Record<PricingCategory, { label: string, basica: number, plus: number }> = {
  cirugia: {
    label: 'Cirugía / Cirujanos / Clínicas / IPS',
    basica: 300000,
    plus: 350000,
  },
  estetica: {
    label: 'Medicina Estética / Ácido Hialurónico',
    basica: 100000,
    plus: 150000,
  },
};

export function calculateLiquidation(category: PricingCategory, type: CoverageType) {
  const basePrice = PRICING_CATEGORIES[category][type];
  const ivaAmount = basePrice * PRICING_CONFIG.ivaRate;
  const total = basePrice + ivaAmount;

  return {
    subtotal: basePrice,
    ivaAmount,
    total,
  };
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
