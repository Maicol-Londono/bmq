import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

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

interface AuthContextType {
  user: User | null;
  login: (email: string, password?: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isInitializing: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Simulate initial session check
    setIsInitializing(false);
  }, []);

  const login = async (email: string, _password?: string) => {
    // Simular un pequeño retraso de red
    await new Promise(resolve => setTimeout(resolve, 600));

    let mockMode: PaymentMode | null = null;
    let frequency: BillingFrequency = null;
    let balance = 0;

    if (email === 'pago@bmq.com') {
      mockMode = 'immediate';
    } else if (email === 'saldo@bmq.com') {
      mockMode = 'balance';
      balance = 5000000;
    } else if (email === 'postpago@bmq.com') {
      mockMode = 'postpaid';
      frequency = 'monthly';
    } else {
      throw new Error('Credenciales inválidas');
    }

    setUser({
      id: `usr_mock_${Math.floor(Math.random() * 10000)}`,
      fullName: 'Dr. Alejandro Posada',
      documentType: 'cc',
      documentNumber: '1020304050',
      email: email,
      profession: 'Médico',
      specialty: 'Cirugía Plástica',
      institution: 'Clínica Las Américas',
      paymentMode: mockMode,
      billingFrequency: frequency,
      balanceAvailable: balance,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, isInitializing }}>
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
