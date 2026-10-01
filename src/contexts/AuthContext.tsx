import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { ApiError, getJson, postJson, TOKEN_STORAGE_KEY as TOKEN_KEY } from '../lib/api';

export type PaymentMode = 'immediate' | 'balance' | 'postpaid';
export type BillingFrequency = 'weekly' | 'biweekly' | 'monthly' | null;

export interface User {
  id: string;
  fullName: string;
  documentType: string;
  documentNumber: string;
  email: string;
  profession: string;
  specialty: string;
  institution: string;
  paymentMode: PaymentMode;
  billingFrequency: BillingFrequency;
  balanceAvailable: number;
}

export type AffiliationKind = 'professional' | 'institution';

/**
 * Afiliación autorizada devuelta por el backend (BmqUser → BmqUserAccess → BmqAffiliation).
 * El tipo (kind) solo sirve para filtrar en la interfaz; la autorización la hace el backend.
 */
export interface PortalAffiliation {
  id: string;
  type: string;
  kind: AffiliationKind;
  name: string;
  document_label: string;
  document: string | null;
  image: string | null;
  role: string;
  /** Contrato del backend (PortalAffiliationContext); se normaliza en buildUser. */
  payment_mode?: 'immediate' | 'balance' | 'postpago';
  billing_frequency?: 'SEMANAL' | 'QUINCENAL' | 'MENSUAL' | null;
  /** String decimal con 2 cifras (p. ej. "100000000.00"). */
  balance_available?: string;
}

interface PortalUser {
  id: string;
  email: string;
  full_name?: string;
}

interface MeResponse extends PortalUser {
  active_affiliation: PortalAffiliation | null;
}

interface LoginResponse {
  token: string;
  user: PortalUser;
  affiliations: PortalAffiliation[];
  requires_selection: boolean;
  active_affiliation: PortalAffiliation | null;
}

export interface LoginResult {
  requiresSelection: boolean;
}

interface AuthContextType {
  user: User | null;
  affiliations: PortalAffiliation[];
  activeAffiliation: PortalAffiliation | null;
  login: (email: string, password?: string) => Promise<LoginResult>;
  selectAffiliation: (affiliationId: string) => Promise<void>;
  logout: () => Promise<void>;
  /** Sesión válida con afiliación activa: puede entrar al Portal. */
  isAuthenticated: boolean;
  /** Token emitido pero con varias afiliaciones: falta elegir con cuál operar. */
  isPendingSelection: boolean;
  isInitializing: boolean;
}

const ACTIVE_AFFILIATION_KEY = 'bmq_active_affiliation';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function errorMessage(err: unknown, fallback: string): string {
  return err instanceof ApiError ? err.message : fallback;
}

const PAYMENT_MODE_MAP: Record<NonNullable<PortalAffiliation['payment_mode']>, PaymentMode> = {
  immediate: 'immediate',
  balance: 'balance',
  postpago: 'postpaid',
};

const BILLING_FREQUENCY_MAP: Record<NonNullable<PortalAffiliation['billing_frequency']>, Exclude<BillingFrequency, null>> = {
  SEMANAL: 'weekly',
  QUINCENAL: 'biweekly',
  MENSUAL: 'monthly',
};

function buildUser(portalUser: PortalUser, affiliation: PortalAffiliation): User {
  return {
    id: portalUser.id,
    fullName: affiliation.name,
    documentType: affiliation.document_label,
    documentNumber: affiliation.document ?? '',
    email: portalUser.email,
    profession: affiliation.kind === 'institution' ? 'Institución' : 'Profesional de la salud',
    specialty: affiliation.kind === 'institution' ? 'Institución' : 'Profesional de la salud',
    institution: affiliation.name,
    paymentMode: (affiliation.payment_mode && PAYMENT_MODE_MAP[affiliation.payment_mode]) || 'immediate',
    billingFrequency: (affiliation.billing_frequency && BILLING_FREQUENCY_MAP[affiliation.billing_frequency]) || null,
    balanceAvailable: Number(affiliation.balance_available ?? 0) || 0,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [portalUser, setPortalUser] = useState<PortalUser | null>(null);
  const [affiliations, setAffiliations] = useState<PortalAffiliation[]>([]);
  const [activeAffiliation, setActiveAffiliation] = useState<PortalAffiliation | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  const clearSession = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ACTIVE_AFFILIATION_KEY);
    setPortalUser(null);
    setAffiliations([]);
    setActiveAffiliation(null);
  };

  // Restauración al recargar: se reutiliza el token guardado y el backend dice
  // cuál es la afiliación activa (vive en el token). Token revocado/expirado → sesión limpia.
  useEffect(() => {
    let cancelled = false;

    const restore = async () => {
      if (!localStorage.getItem(TOKEN_KEY)) {
        localStorage.removeItem(ACTIVE_AFFILIATION_KEY);
        return;
      }
      try {
        const [me, list] = await Promise.all([
          getJson<MeResponse>('/me'),
          getJson<PortalAffiliation[]>('/affiliations'),
        ]);
        if (cancelled) return;
        setPortalUser({ id: me.id, email: me.email, full_name: me.full_name });
        setAffiliations(list);
        if (me.active_affiliation) {
          localStorage.setItem(ACTIVE_AFFILIATION_KEY, me.active_affiliation.id);
          setActiveAffiliation(me.active_affiliation);
        } else {
          localStorage.removeItem(ACTIVE_AFFILIATION_KEY);
        }
      } catch (err) {
        if (cancelled) return;
        console.error(err);
        if (err instanceof ApiError && (err.status === 401 || err.status === 403)) {
          // Token revocado o inválido: la sesión termina y se vuelve al login.
          clearSession();
        }
        // Error de red u otro: se conserva el token para reintentar en la próxima recarga,
        // pero no se da acceso al Portal sin confirmar la sesión con el backend.
      }
    };

    restore().finally(() => {
      if (!cancelled) setIsInitializing(false);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const activate = (affiliation: PortalAffiliation) => {
    localStorage.setItem(ACTIVE_AFFILIATION_KEY, affiliation.id);
    setActiveAffiliation(affiliation);
  };

  const login = async (email: string, password?: string): Promise<LoginResult> => {
    // Nunca se reutiliza el contexto de una sesión anterior.
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ACTIVE_AFFILIATION_KEY);
    setActiveAffiliation(null);

    let response: LoginResponse;
    try {
      response = await postJson<LoginResponse>('/auth/login', { email, password });
    } catch (err) {
      console.error(err);
      throw new Error(errorMessage(err, 'Credenciales inválidas o error de conexión'));
    }

    localStorage.setItem(TOKEN_KEY, response.token);
    setPortalUser(response.user);
    setAffiliations(response.affiliations);

    // Solo el backend decide si hay una única afiliación; nunca se toma "la primera".
    if (!response.requires_selection && response.active_affiliation) {
      activate(response.active_affiliation);
      return { requiresSelection: false };
    }

    return { requiresSelection: true };
  };

  const selectAffiliation = async (affiliationId: string) => {
    try {
      const response = await postJson<{ active_affiliation: PortalAffiliation }>(
        '/affiliations/select',
        { affiliation_id: affiliationId },
      );
      activate(response.active_affiliation);
    } catch (err) {
      console.error(err);
      throw new Error(errorMessage(err, 'No fue posible seleccionar la afiliación.'));
    }
  };

  const logout = async () => {
    if (localStorage.getItem(TOKEN_KEY)) {
      try {
        // Revoca el token en el servidor (y con él la afiliación activa).
        await postJson('/auth/logout', {});
      } catch (err) {
        // Aunque falle la red, la sesión local se cierra igualmente.
        console.error(err);
      }
    }
    clearSession();
  };

  const user = portalUser && activeAffiliation ? buildUser(portalUser, activeAffiliation) : null;

  return (
    <AuthContext.Provider
      value={{
        user,
        affiliations,
        activeAffiliation,
        login,
        selectAffiliation,
        logout,
        isAuthenticated: !!user,
        isPendingSelection: !!portalUser && !activeAffiliation,
        isInitializing,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
