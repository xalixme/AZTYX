# Portfolio de Capacidades — Desarrollo de Sistemas Web a Medida

> Documento de evidencias técnicas. Cada capacidad listada está **demostrada en un sistema real
> en producción** (Taberna La Manuela · https://tabernalamanuelacordoba.es), y es **reutilizable
> para cualquier negocio**: comercio local, clínicas, talleres, inmobiliarias, peluquerías,
> hoteles, gimnasios, despachos profesionales, tiendas, etc.

---

## 0. Resumen ejecutivo (para clientes)

Diseño y construyo **plataformas web completas y autogestionables**: una web pública rápida y
bonita + un panel de administración privado donde el dueño edita todo sin tocar código, todo
alojado en infraestructura **de coste 0 €/mes** (capa gratuita de Cloudflare) y con **seguridad
de grado bancario**. Multilingües, optimizadas para Google, con analítica propia respetuosa con la
privacidad (sin banners de cookies molestos) y conformes con la ley española (LSSI/RGPD).

**Caso real:** carta digital de restaurante en 10 idiomas, con panel de gestión, comanda virtual,
optimización de imágenes con IA, analítica avanzada y cumplimiento legal — desplegada y funcionando.

---

## 1. Arquitectura y stack técnico

| Capacidad | Evidencia / cómo |
|---|---|
| **Aplicaciones full-stack con renderizado en servidor (SSR)** | Astro 5 + adaptador Cloudflare → un único Worker sirve web + API |
| **Edge computing (cómputo en el borde, baja latencia global)** | Todo corre en la red de Cloudflare; respuesta cercana al usuario esté donde esté |
| **Base de datos serverless** | Cloudflare D1 (SQLite distribuido) con esquema versionado y migraciones |
| **Almacenamiento de objetos / archivos** | Cloudflare R2 (imágenes subidas por el cliente, sin costes de salida) |
| **API REST propia** | ~20 endpoints (CRUD de productos, categorías, ajustes, media, auth, analítica) |
| **Despliegue continuo (CI/CD)** | `git push` → build y publicación automática, sin servidores que mantener |
| **Infraestructura como código** | Configuración declarativa (`wrangler.toml`), reproducible en cualquier cliente |

**Trasladable a:** reservas de clínica, catálogo de inmobiliaria, panel de pedidos de tienda,
agenda de peluquería, intranet de empresa… cualquier negocio que necesite *datos + panel + web*.

---

## 2. Diseño front-end y experiencia de usuario (UI/UX)

| Capacidad | Evidencia |
|---|---|
| **Identidad visual propia desde cero** | Sistema de diseño "Neo-Artesanal Cordobesa": paleta, tipografías, texturas, sellos, cenefas |
| **Sistema de design tokens** | Variables CSS centralizadas (`:root`) → cambiar toda la marca desde un punto |
| **Animaciones y microinteracciones** | Reveal por scroll, stack sticky, transiciones suaves, estados hover/focus |
| **Responsive y mobile-first** | Layouts que funcionan de móvil a escritorio |
| **Accesibilidad** | Focus visible, `aria-label`, contraste, navegación por teclado |
| **Componentes interactivos sin frameworks pesados** | JS vanilla → menos peso, más velocidad (carrito, filtros, buscador, acordeones) |
| **Soporte RTL** | Diseño que se invierte correctamente para árabe |

**Trasladable a:** cualquier marca. El proceso (tokens → componentes → identidad) se replica para
el estilo de cualquier cliente (minimalista, lujo, corporativo, etc.).

---

## 3. Internacionalización (i18n) — multilingüe real

| Capacidad | Evidencia |
|---|---|
| **Sitio en 10 idiomas** | es, en, fr, de, it, pt, zh, ar, ja, ru |
| **Traducción automática integrada (IA / Google Translate API)** | Los textos se traducen al crear/editar y se guardan; **cero coste por visita** |
| **Detección automática del idioma del visitante** | Por navegador, con preferencia recordada |
| **Motor de traducción en cliente sin recargar** | Cambio de idioma instantáneo |
| **Contenido y datos traducidos** | No solo la interfaz: también los productos y descripciones del negocio |

**Trasladable a:** negocios con clientela internacional o turística (hoteles, tours, comercios en
zonas turísticas, exportadores, clínicas que atienden extranjeros…).

---

## 4. Panel de administración autogestionable

| Capacidad | Evidencia |
|---|---|
| **CMS a medida** | El dueño edita productos, categorías, precios, fotos, textos y ajustes sin tocar código |
| **Gestión de imágenes con subida directa** | Sube fotos desde el móvil → se almacenan y optimizan solas |
| **Multi-precio / variantes** | Tallas, formatos, tamaños por producto |
| **Ordenación y organización del catálogo** | Reordenar, activar/desactivar, destacar |
| **Ajustes globales editables** | Textos, precios especiales, avisos — todo configurable |
| **Registro de auditoría** | Cambios sensibles quedan trazados (quién, qué, cuándo) |

**Trasladable a:** cualquier negocio que cambie su oferta a menudo (cartas, catálogos, tarifas,
stock, servicios, citas).

---

## 5. Creación y optimización de imágenes con IA

| Capacidad | Evidencia |
|---|---|
| **Generación de imágenes con IA** | Imágenes de producto/ambiente creadas con IA para la web |
| **Pipeline de optimización automática** | Conversión a WebP/AVIF, redimensionado 800×800, calidad ajustada |
| **Transformación en el borde bajo demanda** | Cloudflare Image Transformations sirve el formato óptimo por navegador |
| **Ahorro medido real** | Imagen de 2,16 MB → 57 KB (–97 %) sin pérdida visible |
| **Herramienta propia de optimización** | Optimizador local reutilizable para lotes de imágenes |

**Trasladable a:** tiendas con muchas fotos de producto, inmobiliarias, portfolios visuales,
catálogos — donde el peso de las imágenes mata el rendimiento.

---

## 6. Rendimiento (performance)

| Capacidad | Evidencia |
|---|---|
| **Optimización para Lighthouse 100** | Trabajo específico de Core Web Vitals (LCP, CLS, TBT) |
| **Auto-alojado y subset de fuentes** | Material Symbols 319 KB → **13 KB** (–96 %) subseteando solo los iconos usados |
| **Cero peticiones a terceros para fuentes** | Texto vía Cloudflare Fonts + iconos propios → privacidad y velocidad |
| **Eliminación de "forced reflows"** | Refactor de scroll con `requestAnimationFrame` (lecturas/escrituras agrupadas) |
| **Carga diferida y caché agresiva** | Vídeo/imagenes diferidos, assets inmutables, contenido en el borde |
| **Análisis de la cadena crítica de red** | Identificación y reducción de recursos que bloquean la carga |
| **Una sola consulta a BD por página** | Filtrado en SQL → menos datos, menos HTML |

**Trasladable a:** cualquier web donde la velocidad importe (todas) — especialmente e-commerce y
landings, donde cada 100 ms de retraso reduce conversiones.

---

## 7. Métricas y analítica avanzada (sin comprometer la privacidad)

| Capacidad | Evidencia |
|---|---|
| **Analítica propia (first-party) sin cookies** | Tabla a medida: idioma, país, dispositivo, SO, navegador, página, idioma elegido, hora |
| **Sin banner de cookies** | Diseño cookieless y anónimo → cumple LSSI sin molestar al visitante |
| **Panel de estadísticas a medida** | Gráficos y rankings en el propio admin (idiomas, páginas, navegadores, horas pico…) |
| **Integración con analítica de Cloudflare** | Visitantes únicos, países, amenazas, caché, ancho de banda vía API GraphQL |
| **Datos accionables para el negocio** | P. ej. "qué idioma usan de verdad los clientes" para priorizar |

**Trasladable a:** cualquier negocio que quiera entender a sus clientes **sin** GA/cookies ni
problemas legales — clínicas, despachos, comercios sensibles a la privacidad.

---

## 8. Seguridad (grado bancario)

| Capacidad | Evidencia |
|---|---|
| **Autenticación robusta** | JWT firmado (HMAC-SHA256, WebCrypto), cookies `__Host-`, HttpOnly/Secure/SameSite |
| **Doble factor (2FA TOTP)** | Compatible con Google Authenticator |
| **Anti-bots** | Cloudflare Turnstile en el login |
| **Rate limiting progresivo** | Bloqueo escalado tras intentos fallidos (anti fuerza bruta) |
| **Sesiones revocables** | Gestionadas en BD, con caducidad e inactividad |
| **Cabeceras de seguridad completas** | CSP, HSTS, COOP, CORP, X-Frame-Options, etc. |
| **Prevención de inyección** | 100 % consultas preparadas, sanitización estricta de entradas |
| **Pentest defensivo + verificación independiente** | Auditoría de seguridad + re-validación con herramientas tipo Kali |
| **Hardening "fail-closed"** | Si falta una protección crítica en producción, el sistema deniega por defecto |

**Trasladable a:** **imprescindible** en cualquier panel privado, área de clientes, datos
personales o pagos — clínicas (datos de salud), despachos, cualquier login.

---

## 9. SEO y posicionamiento local

| Capacidad | Evidencia |
|---|---|
| **SEO técnico centralizado** | Componente único de SEO (meta, canonical, robots) |
| **Datos estructurados (Schema.org / JSON-LD)** | Restaurant + Menu con precios, dietas, NAP, horarios, idiomas |
| **SEO local (Local Pack / Google Maps)** | NAP consistente, Place ID, integración Google Business Profile |
| **Sitemap y robots gestionados** | Indexación correcta; bloqueo de bots no deseados |
| **Integración con Google Search Console** | Diagnóstico y corrección de errores de indexación |
| **Open Graph / Twitter Cards** | Vistas previas correctas al compartir en redes |

**Trasladable a:** cualquier negocio local que quiera salir en Google Maps y búsquedas
("dentista en…", "abogado en…", "taller en…").

---

## 10. Cumplimiento legal (LSSI / RGPD)

| Capacidad | Evidencia |
|---|---|
| **Auditoría de cookies y rastreo** | Diagnóstico de qué se almacena y si obliga a banner |
| **Diseño "privacy-first"** | Eliminación de cookies no esenciales → web legal sin banner |
| **Textos legales a medida y multilingües** | Aviso Legal, Política de Privacidad y de Cookies en 9 idiomas, veraces con lo que la web hace |
| **Base jurídica y derechos RGPD** | Finalidades, conservación, encargados, transferencias, ejercicio de derechos, AEPD |

**Trasladable a:** **todos** los negocios con web en España/UE. Es un requisito legal y un sello
de confianza.

---

## 11. Funcionalidades de negocio a medida

| Capacidad | Evidencia |
|---|---|
| **Carrito / comanda 100 % cliente** | Pedido sin backend ni pago; resumen bilingüe (cliente + personal) |
| **Resolución de barreras de idioma en el punto de venta** | El cliente muestra su pedido traducido al personal |
| **Sistemas adaptables por contexto** | Misma base reutilizada para variantes (p. ej. carta normal vs. Halal) |
| **Lógica de dietas/atributos** | Etiquetas, alérgenos por nivel, filtros dinámicos, buscador |

**Trasladable a:** reservas, presupuestos online, configuradores de producto, sistemas de cita
previa, listas de la compra, formularios complejos.

---

## 12. Documentación y proceso profesional

| Capacidad | Evidencia |
|---|---|
| **Documentación de handoff** | Contextos técnicos para front-end y back-end (división de trabajo) |
| **Mapa de arquitectura y BD** | Esquema, endpoints, integraciones documentados |
| **Verificación antes de entregar** | Pruebas reales en navegador y en build equivalente a producción |
| **Trabajo guiado por evidencias** | Cada cambio medido (peso, HTTP, render) — nada "a ojo" |

---

## 13. Tecnologías y herramientas dominadas

**Lenguajes/Framework:** TypeScript, JavaScript (vanilla), Astro, HTML, CSS, Tailwind, SQL (SQLite).
**Infraestructura:** Cloudflare (Pages, Workers, D1, R2, Image Transformations, Turnstile, Web
Analytics, GraphQL Analytics API), Git/GitHub, Wrangler.
**Seguridad:** WebCrypto (JWT/HMAC/PBKDF2), TOTP 2FA, CSP/HSTS, rate limiting, pentest defensivo.
**IA:** generación de imágenes con IA, traducción automática vía API, optimización de assets.
**SEO/Legal:** Schema.org/JSON-LD, Search Console, Google Business Profile, LSSI/RGPD.
**Rendimiento:** Lighthouse/Core Web Vitals, subsetting de fuentes, fonttools, análisis de cadena crítica.

---

## 14. Tipos de negocio a los que aplica directamente

- **Hostelería:** cartas digitales, reservas, menús del día (✔ demostrado).
- **Comercio local / tiendas:** catálogo, stock, precios, fotos autogestionables.
- **Salud (clínicas, dentistas, fisios):** cita previa, área privada, RGPD estricto.
- **Servicios profesionales (abogados, gestorías, arquitectos):** web corporativa + SEO local + legal.
- **Belleza/bienestar (peluquerías, gimnasios, spas):** agenda, servicios, bonos.
- **Inmobiliarias / automoción:** catálogos con muchas imágenes optimizadas y filtros.
- **Turismo (hoteles, casas rurales, guías):** multilingüe + SEO + reservas.

---

## 15. Propuesta de valor diferencial (el "por qué yo")

1. **Coste de operación ~0 €/mes** — infraestructura en capa gratuita, sin servidores que mantener.
2. **El cliente es autónomo** — edita su web sin depender de mí para cada cambio.
3. **Rápido de verdad** — optimización medida, no promesas (Lighthouse, Core Web Vitals).
4. **Seguro y legal de fábrica** — seguridad de grado bancario + RGPD/LSSI desde el día uno.
5. **Multilingüe y local** — pensado para captar clientela internacional y posicionar en su ciudad.
6. **Privacidad como ventaja** — analítica útil sin cookies ni banners molestos.
7. **Diseño con identidad** — nada de plantillas genéricas; marca propia.

---

*Todas las capacidades anteriores están respaldadas por un sistema real en producción. Disponible
para adaptar este mismo nivel a cualquier sector.*
