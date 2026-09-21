# Reglas de Negocio y Arquitectura BMQ — V1.1 (Cierre Web Pública)

Este documento registra las decisiones, estado actual y directrices oficiales de negocio que rigen la arquitectura pública y privada de la plataforma. La Web Pública V1 se considera visual y funcionalmente completa.

## 1. Estado General
- **[OBSERVADO]** La Web Pública BMQ V1 ha alcanzado un estado funcional y visualmente aprobado.
- **[DECISIÓN]** Rutas públicas aprobadas:
  - `/` (Home)
  - `/proteccion`
  - `/coberturas`
  - `/coberturas/basica`
  - `/coberturas/plus`
  - `/procedimientos`
  - `/nosotros`
  - `/contacto`
  - `/solicitar-cobertura`
  - `/login`
- **[DECISIÓN]** Rutas privadas reservadas (Portal congelado):
  - `/portal`
  - `/portal/solicitar-poliza`
  - `/portal/polizas`
  - `/portal/polizas/:id`
  - `/portal/perfil`
- **[DECISIÓN]** El desarrollo del Portal Médico (frontend) está congelado. No se continuará desarrollando lógica de Portal hasta que exista la arquitectura backend correspondiente en Wellezy Hub.

## 2. Posicionamiento y Concepto
- **[DECISIÓN]** Frase central: *"Protección jurídica especializada y respaldo para profesionales de la salud."*
- **[DECISIÓN]** Arquitectura conceptual de la protección (secuencia inalterable): `PREVENIR → DOCUMENTAR → ACOMPAÑAR → DEFENDER → RESPALDAR`.
- **[DECISIÓN]** La diferenciación clave de los productos:
  - **BMQ (Básica):** Protección jurídica.
  - **BMQ+:** Protección jurídica + respaldo económico.

## 3. Servicios y Componentes
- **[DECISIÓN]** Servicios oficiales BMQ: Responsabilidad Civil, Responsabilidad Penal, Responsabilidad Disciplinaria, Actuaciones Administrativas, Acompañamiento preventivo, Documentación, Defensa jurídica, Defensa Digital, Kit de Prevención y Blindaje Jurídico, y Respaldo económico (exclusivo BMQ+).
- **[DECISIÓN]** **Defensa Digital:** Definida como *"Protección jurídica de la reputación profesional frente a contenidos calumniosos en entornos digitales."* Contempla Instagram, TikTok, Facebook, Google Maps. NO es un servicio de ciberseguridad ni garantiza eliminación absoluta.
- **[DECISIÓN]** **Kit de Prevención y Blindaje Jurídico:** Herramienta preventiva. Incluye contratos a medida, consentimientos informados y capacitación. No garantiza resultados procesales ni elimina demandas por sí solo.
- **[DECISIÓN]** **Procedimientos:** No existe un catálogo público exhaustivo de cirugías (no inventar listas). Se utilizan categorías: procedimientos quirúrgicos, tratamientos estéticos, atención posoperatoria.

## 4. Reglas Comerciales
- **[DECISIÓN]** Afiliación única, obligatoria y gratuita (realizada una sola vez). Cobertura individual por paciente/procedimiento. El precio no depende del paciente.
- **[DECISIÓN]** Precios actuales:
  - **BMQ:** Cirugía/clínicas ($300.000 + IVA) | Estética ($100.000 + IVA).
  - **BMQ+:** Cirugía/clínicas ($350.000 + IVA) | Estética ($150.000 + IVA).
- **[DECISIÓN]** **Respaldo Económico (BMQ+):** HASTA $250.000.000. Se presenta estrictamente como: *"Ante una eventual condena y conforme a las condiciones de la cobertura."* NO es un pago automático ni indemnización garantizada.
- **[DECISIÓN]** **Modalidades de pago:** NO se publican en la Web Pública las modalidades configuradas en el CRM.
- **[DECISIÓN]** **Regla Operativa Interna:** La anticipación para solicitar cobertura (1 o 2 horas antes) es información operativa interna y **NO debe publicarse en la Web Pública** como una restricción rígida.

## 5. Lineamientos de Contenido (Web Pública)
- **[DECISIÓN]** **Regla estricta:** No inventar información comercial. No usar estadísticas falsas, testimonios ficticios, cifras de clientes/médicos irreales, premios no verificados o afirmaciones no sustentadas.
- **[DECISIÓN]** Toda afirmación institucional debe estar sustentada por material oficial de BMQ.
- **[DECISIÓN]** **Contacto Oficial:** Edificio One Plaza (Carrera 43 # 5A – 113, Oficina 702, Medellín). Email: `contact@blindajemedicoquirurgico.com`. Teléfono principal: `+57 301 654 6268` (existe también `+57 316 482 1047` pero no reemplaza al principal).

## 6. Componente Reutilizable: BMQ Network
- **[OBSERVADO]** `BmqNetworkCarousel.tsx` creado para `Home` y `Nosotros`.
- **[DECISIÓN]** Mensaje oficial: *"Profesionales e instituciones que confían en BMQ"*.
- **[DECISIÓN]** La card solo muestra imagen/logo y nombre.
- **[DECISIÓN]** Utiliza movimiento horizontal continuo (infinite loop) con pausa al hover y controles manuales (← →) híbridos que no rompen el CSS. Respeta `prefers-reduced-motion`.
- **[OBSERVADO]** Actualmente utiliza un dataset MOCK. Está preparado arquitectónicamente para consumir una API del CRM.

## 7. Pendientes de Integración y Próximos Pasos
Quedan explícitamente marcados como **[PENDIENTE]**:
1. **Integración CRM → Web Network:** Reemplazar mocks del carrusel por API real.
2. **Switch de visibilidad:** Implementar en CRM el flag *"Mostrar en sitio web público"*.
3. **Modelo de datos públicos:** API para profesionales e instituciones aliadas.
4. **Autorización para publicación:** Definir mecanismo legal donde BMQ obtiene/autentica el permiso explícito del médico/clínica para aparecer en la web. La relación comercial no implica autorización automática.
5. **Autenticación Real:** Integración del Portal con Wellezy Hub.
6. **Backend general:** Solicitudes de cobertura, emisión de pólizas, estados comerciales.
7. **Validación legal definitiva:** Revisión final de textos contractuales publicados.

## 8. Resumen de Decisiones Estructurales
- **[DECISIÓN]** Web Pública se mantiene separada del CRM.
- **[DECISIÓN]** BmqNetworkCarousel es el estándar reutilizable para exhibir aliados.
- **[DECISIÓN]** CRM será la única fuente de verdad futura para aliados y usuarios.
- **[DECISIÓN]** Defensa Digital es un servicio transversal/complementario.
- **[DECISIÓN]** La identidad visual, el tono editorial (Quiet Power) y las restricciones de contenido son reglas inviolables para la evolución del sitio.
