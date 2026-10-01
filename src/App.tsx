import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { PortalLayout } from './layouts/PortalLayout';
import { Home } from './pages/Home';
import { Proteccion } from './pages/Proteccion';
import { Procedimientos } from './pages/Procedimientos';
import { Coberturas } from './pages/Coberturas';
import { CoberturasBasica } from './pages/CoberturasBasica';
import { CoberturasPlus } from './pages/CoberturasPlus';
import { Nosotros } from './pages/Nosotros';
import { Contacto } from './pages/Contacto';

// Portal
import { Login } from './pages/Login';
import { Dashboard } from './pages/portal/Dashboard';
import { SolicitarPoliza } from './pages/portal/SolicitarPoliza';
import { MisPacientes } from './pages/portal/MisPacientes';
import { MisPolizas } from './pages/portal/MisPolizas';
import { PolizaDetail } from './pages/portal/PolizaDetail';
import { Perfil } from './pages/portal/Perfil';
import { useAuth, AuthProvider } from './contexts/AuthContext';

function SolicitarCoberturaRedirect() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Navigate to="/portal/solicitar-poliza" replace />;
  }
  return <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="proteccion" element={<Proteccion />} />
            <Route path="procedimientos" element={<Procedimientos />} />
            <Route path="coberturas" element={<Coberturas />} />
            <Route path="coberturas/basica" element={<CoberturasBasica />} />
            <Route path="coberturas/plus" element={<CoberturasPlus />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="solicitar-cobertura" element={<SolicitarCoberturaRedirect />} />
          </Route>

          {/* Auth Route (No Header/Footer) */}
          <Route path="/login" element={<Login />} />

          {/* Portal Routes */}
          <Route path="/portal" element={<PortalLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="solicitar-poliza" element={<SolicitarPoliza />} />
            <Route path="pacientes" element={<MisPacientes />} />
            <Route path="polizas" element={<MisPolizas />} />
            <Route path="polizas/:id" element={<PolizaDetail />} />
            <Route path="perfil" element={<Perfil />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
