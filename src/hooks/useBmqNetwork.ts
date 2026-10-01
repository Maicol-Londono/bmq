import { useEffect, useState } from 'react';
import { getJson } from '../lib/api';
import type { BmqNetworkItem } from '../components/BmqNetworkCarousel';

type NetworkApiItem = {
  type: 'professional' | 'institution';
  id: string;
  name: string;
  image: string | null;
};

export type BmqNetworkState =
  | { status: 'loading'; items: BmqNetworkItem[] }
  | { status: 'ready'; items: BmqNetworkItem[] }
  | { status: 'error'; items: BmqNetworkItem[] };

/**
 * Carga el directorio público BMQ desde Wellezy Hub (GET /api/public/bmq/network).
 * Sin fallback a datos mock: si la API falla, el estado queda en 'error' con la lista vacía.
 */
export function useBmqNetwork(enabled = true): BmqNetworkState {
  const [state, setState] = useState<BmqNetworkState>({ status: 'loading', items: [] });

  useEffect(() => {
    if (!enabled) return;

    const controller = new AbortController();

    getJson<{ data: NetworkApiItem[] }>('/api/public/bmq/network', { signal: controller.signal })
      .then(({ data }) => {
        setState({
          status: 'ready',
          items: data.map((item) => ({
            id: item.id,
            name: item.name,
            image: item.image,
            type: item.type,
            // Los logos institucionales se muestran completos; las fotografías cubren la tarjeta.
            imageFit: item.type === 'institution' ? 'contain' : 'cover',
          })),
        });
      })
      .catch((error: unknown) => {
        if (controller.signal.aborted) return;
        if (import.meta.env.DEV) {
          console.error('[BMQ Network] No se pudo cargar el directorio público:', error);
        }
        setState({ status: 'error', items: [] });
      });

    return () => controller.abort();
  }, [enabled]);

  return state;
}
