# BMQ Design System — V1.0

Este documento constituye la fuente de verdad para la identidad visual y los *Design Tokens* oficiales del proyecto **Blindaje Médico Quirúrgico (BMQ)**.

## Paleta Institucional Oficial

La combinación visual oficial de BMQ es: `BLACK` / `CHARCOAL` / `BMQ BLUE` / `CHAMPAGNE GOLD` / `IVORY` / `WHITE`.

### 1. NEGRO
- **HEX:** `#050505`
- **Variable CSS:** `--color-bmq-black`
- **Uso:** Fondos principales oscuros, hero, secciones premium, superficies de máxima profundidad visual.

### 2. CARBÓN
- **HEX:** `#0B0D0F`
- **Variable CSS:** `--color-bmq-charcoal`
- **Uso:** Fondos secundarios, superficies oscuras, cards y bloques de contraste, separación entre secciones oscuras.

### 3. AZUL BMQ
- **HEX:** `#167BCB`
- **Variable CSS:** `--color-bmq-blue`
- **Uso:** Color corporativo principal, CTAs, enlaces, indicadores activos, elementos interactivos, acentos relacionados con la identidad médica/institucional.

### 4. DORADO CHAMPAGNE
- **HEX:** `#C8A96B`
- **Variable CSS:** `--color-bmq-gold`
- **Uso:** Acentos premium, *eyebrow labels*, líneas decorativas, detalles de alto valor, elementos relacionados con BMQ+, estados destacados.
- **Regla Estricta:** NO debe utilizarse como color dominante. Funciona exclusivamente como acento de lujo sobrio e institucional.

### 5. MARFIL
- **HEX:** `#F4F1EA`
- **Variable CSS:** `--color-bmq-ivory`
- **Uso:** Fondos claros, secciones editoriales, bloques de lectura, contraste con fondos oscuros.

### 6. BLANCO
- **HEX:** `#FFFFFF`
- **Variable CSS:** `--color-bmq-white`
- **Uso:** Texto principal sobre fondos oscuros, elementos de máxima legibilidad, headings cuando corresponda, controles sobre superficies oscuras.

## Tipografía Oficial
- **Playfair Display** (o serif editorial equivalente): Utilizada exclusivamente para titulares (headings) para aportar elegancia, clasicismo y autoridad.
- **Inter / Manrope** (o sans-serif geométrica equivalente): Utilizada para cuerpo de texto (body), interfaz de usuario (UI), etiquetas pequeñas (eyebrows) y detalles funcionales, asegurando máxima legibilidad y modernidad.

## Concepto Visual y Posicionamiento

**"QUIET POWER / EDITORIAL PREMIUM"**

Inspiración conceptual del diseño:
- Medicina de alto nivel.
- Firma jurídica especializada (Elite Legal).
- Private banking (Banca privada).
- Editorial de lujo.

**Regla Estricta (Lo que NO somos):**
La interfaz y la comunicación visual NO deben parecer literalmente:
- Una aseguradora tradicional o masiva.
- Un bufete jurídico genérico.
- Una plataforma SaaS (Software as a Service).
- Un e-commerce convencional.

## Reglas Visuales

La dirección estética debe mantenerse:
- **Premium**
- **Institucional**
- **Médica**
- **Jurídica**
- **Sobria**
- **Editorial**

### Lo que se debe evitar:
- Dorado excesivo.
- Gradientes innecesarios o sombras pesadas.
- Colores adicionales sin justificación absoluta en las reglas de negocio.
- Estética genérica de aseguradora tradicional.
- Estética SaaS (Software as a Service) o apariencia de plantilla genérica.

## Implementación Técnica

Estos tokens están implementados en el archivo raíz de estilos (`src/index.css`) utilizando la directiva `@theme` de Tailwind CSS v4, lo que permite utilizarlos nativamente mediante clases como `bg-bmq-charcoal`, `text-bmq-gold` o `border-bmq-blue`.
