# Portfolio de Capacidades — Desarrollo de Sistemas Web a Medida

> Documento de evidencias técnicas. Cada capacidad listada está **demostrada en un sistema real
> en producción** (Taberna La Manuela · https://tabernalamanuelacordoba.es), y es **reutilizable
> para cualquier negocio**: comercio local, clínicas, talleres, inmobiliarias, peluquerías,
> hoteles, gimnasios, despachos profesionales, tiendas, etc.

---

## 0. Resumen ejecutivo (para clientes)

Diseño y construyo **plataformas web completas y autogestionables**: una web pública rápida y
bonita + un panel de administración privado donde el dueño edita todo sin tocar código, alojado en
infraestructura **de coste 0 €/mes** (capa gratuita de Cloudflare) y con **seguridad de grado
bancario**. Multilingües, conformes con la ley española (LSSI/RGPD) y con analítica propia
respetuosa con la privacidad (sin banners de cookies molestos).

Pero construir la web es solo la mitad del trabajo. También me encargo de que **la encuentren**: en
Google, en Google Maps y —cada vez más— en los asistentes de IA (ChatGPT, Perplexity, Gemini,
Copilot), que es por donde ya llegan muchos clientes. Y voy un paso más allá: **audito y diagnostico
la presencia digital completa del negocio** —ficha de Google, reseñas, perfiles de terceros,
identidad de marca— y digo con datos dónde está el verdadero cuello de botella, **aunque eso
signifique menos horas facturadas para mí**.

**Caso real:** carta digital de restaurante en 10 idiomas, en producción, con panel de gestión,
comanda virtual, optimización de imágenes con IA, analítica avanzada, cumplimiento legal y un trabajo
específico de visibilidad tanto en buscadores como en IA generativa.

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

## 6. Rendimiento y caché en el edge

| Capacidad | Evidencia / resultado |
|---|---|
| **Diagnóstico de por qué la web no se cacheaba** | Las páginas enviaban una cabecera `Set-Cookie` que impedía a Cloudflare guardarlas en caché. Moví esa cookie al lado cliente: mismas funciones, páginas ya cacheables y más rápidas |
| **Caché en el edge con invalidación automática** | Al guardar un plato en el panel, el sistema purga la caché vía API de Cloudflare y el cambio se ve **al instante en los 10 idiomas**. Antes tardaba hasta 4 horas |
| **Criterio contra la optimización prematura** | El cliente temía superar el límite de su base de datos. Medí el uso real —**994.740 lecturas/mes** frente a un límite de **5.000.000 diarias** (un 0,6 %)— y le dije que no había riesgo, en vez de venderle una optimización innecesaria |
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

## 9. SEO técnico avanzado y posicionamiento local

| Capacidad | Evidencia / resultado |
|---|---|
| **Canonicalización de URLs** | Unifiqué la barra final entre canonical, `hreflang`, sitemap y redirecciones 301, eliminando el contenido duplicado que Search Console reportaba en 9 idiomas |
| **Sitemap con fecha real de modificación** | `lastmod` extraído de la base de datos: Google sabe qué ha cambiado sin tener que re-rastrear el sitio entero |
| **Corrección de un bloqueo invisible a la IA** | Cloudflare inyectaba un `robots.txt` que **prohibía la entrada a GPTBot, ClaudeBot y Google-Extended** —lo contrario de lo que el cliente quería—. Lo sustituí por uno propio que invita a los motores de IA y mantiene protegido el panel |
| **Corrección de una regresión propia** | Un `Disallow: /api/` bloqueaba, sin querer, las fotos de los platos para Google Imágenes. Detectado auditando y corregido |
| **IndexNow** | Al editar la carta, el sistema avisa automáticamente a Bing y Copilot para que re-indexen, sin esperar a su ciclo natural |
| **Datos estructurados (Schema.org / JSON-LD)** | Restaurant + Menu con precios, dietas, horarios e idiomas (identidad de entidad ampliada en §11) |
| **SEO local (Local Pack / Google Maps)** | NAP consistente, Place ID e integración con Google Business Profile |
| **Search Console + Open Graph** | Diagnóstico y corrección de errores de indexación; vistas previas correctas al compartir en redes |

**Trasladable a:** cualquier negocio local que quiera salir en Google Maps y en búsquedas
("dentista en…", "abogado en…", "taller en…") sin arrastrar errores técnicos que lo penalicen.

---

## 10. GEO — visibilidad en asistentes de IA (ChatGPT, Perplexity, Gemini, Copilot)

Cada vez más clientes ya no buscan en Google: le preguntan a un asistente de IA *"¿dónde como bien
cerca de la Mezquita?"*. GEO (*Generative Engine Optimization*) es lograr que esos asistentes
**conozcan, entiendan y recomienden** el negocio.

| Capacidad | Evidencia / resultado |
|---|---|
| **`llms.txt` y `llms.md` en vivo desde la base de datos** | La carta completa —**205 platos** con precio, alérgenos y dieta— más los datos del negocio, en 10 idiomas y en el formato que los agentes de IA leen y reutilizan. Se actualiza solo al editar la carta |
| **Negociación de contenido para agentes** | La web responde en Markdown cuando un agente lo pide (`Accept: text/markdown`) y sigue sirviendo HTML normal a las personas. Implementado a medida, sin depender del plan de pago que ofrece esa función |
| **Descubrimiento por agentes según estándares** | Cabeceras `Link` (RFC 8288) y catálogo de API (RFC 9727) para que un agente encuentre los recursos sin adivinar direcciones |
| **Criterio para decir que no** | Una herramienta de auditoría recomendó 10 mejoras. Implementé 3 y **rechacé 5**: exigían publicar metadatos de servicios que no existen (OAuth, servidores MCP, registro de agentes), lo que habría enviado a los agentes a direcciones que no responden. Al cliente se le explicó el porqué |
| **Metodología de pruebas GEO** | Batería de consultas **sin mencionar la marca** para medir si los asistentes descubren el negocio solos, con prompts adaptados a cada sistema y una escala de puntuación |

**Trasladable a:** cualquier negocio local o con catálogo que quiera aparecer cuando un cliente le
pregunta a una IA por una recomendación (restaurantes, alojamientos, clínicas, tiendas, servicios).

---

## 11. Ingeniería semántica de entidad

Que un buscador o una IA sepa **qué es** exactamente el negocio, con qué palabra lo busca cada
cliente y que todos sus perfiles son **una sola entidad**. Es la diferencia entre aparecer en la
búsqueda correcta o no aparecer.

| Capacidad | Evidencia / resultado |
|---|---|
| **Análisis semántico de la competencia** | Estudié cómo se declaran los competidores directos: todos dicen explícitamente "restaurante", mientras el cliente se presentaba solo como "taberna". Consecuencia: quedaba fuera de la búsqueda *"restaurante cerca de la Mezquita"*, la que hace todo el mundo |
| **Reconstrucción de la identidad en 10 idiomas** | Texto **redactado a mano en cada idioma** (no traducción automática), con la palabra que un turista de ese país realmente busca: `Restaurant`, `Ristorante`, `餐厅`, `مطعم`, `レストラン`, `ресторан`… |
| **El nombre comercial no se traduce** | La marca aparecía como "La Manuela Tavern", "Taverne La Manuela" o 拉玛努埃拉酒馆 según el idioma, destruyendo el reconocimiento de marca. **26 casos corregidos** |
| **Datos estructurados avanzados (Schema.org)** | Frase de desambiguación por idioma, tipos de cocina corregidos, fecha de actualización de la carta como señal de frescura y enlace entre todos los perfiles del negocio para que buscadores y agentes entiendan que son **una sola entidad** |

**Trasladable a:** cualquier negocio cuya categoría real se malinterprete (una "clínica" catalogada
como "consulta", un "taller" como "tienda") o cuyo nombre de marca se esté traduciendo o confundiendo.

---

## 12. Calidad lingüística multiidioma

Una mala traducción no es un detalle: cuesta clientes y credibilidad. Reviso el idioma como parte
del producto, no como un extra.

| Capacidad | Evidencia / resultado |
|---|---|
| **Errores de polisemia que ninguna herramienta señala** | "Carta" (de restaurante) se traducía como *carta postal* — "letter", "Brief", "lettera", "письмо", "手紙" — en 4 textos × 9 idiomas |
| **Protección de nombres gastronómicos culturales** | "Mazamorra" (crema fría de almendra) salía como "porridge", "Haferbrei" o "каша" (= gachas): además de destruir la identidad del plato, era factualmente falso |
| **Arreglo en la fuente, no parche en la salida** | Implementé un glosario en el motor de traducción que marca los términos culturales como no traducibles, de modo que el error **no puede reaparecer** cuando el dueño edite un plato en el futuro |
| **Errores de usabilidad por traducción literal** | El botón "Vaciar" se mostraba como el adjetivo "Empty" / "Leer" / "Vide" en vez de la acción. **Más de 100 valores corregidos** |

**Trasladable a:** cualquier web multiidioma. La traducción automática sin revisión humana es un
riesgo de marca que casi nadie audita.

---

## 13. Seguridad alimentaria y datos sin contradicciones

Cuando un dato es una **declaración legal** (un "sin gluten" lo es), el sistema debe estar diseñado
para que no pueda ser falso. Aquí no basta con que "funcione".

| Capacidad | Evidencia / resultado |
|---|---|
| **Migraciones en base de datos de producción con protocolo** | Copia de seguridad exportada, punto de restauración anotado, verificación previa del alcance, ejecución y comprobación posterior de integridad. **Cero incidencias** |
| **Eliminación de una fuente de errores humanos** | El panel permitía marcar "sin gluten" un plato que declaraba gluten. Lo sustituí por una **derivación automática** a partir de los alérgenos ya declarados: el dueño no marca nada y el dato nunca se contradice |
| **Iteración del criterio junto al cliente** | Mi primera regla era demasiado estricta y dejaba sin etiquetar una cerveza sin gluten certificada. El cliente lo discutió, revisé la evidencia y **le di la razón** — pero solo tras corregir la única ficha peligrosa (una cerveza normal marcada como sin gluten). Resultado: de **75 a 123 platos** correctamente etiquetados, con verificación automática de que ningún plato con gluten queda marcado como apto |
| **Conciencia normativa** | La información de alérgenos es obligatoria (Reglamento UE 1169/2011) y un "sin gluten" es una declaración de seguridad alimentaria, no una etiqueta de marketing. El sistema está diseñado para no poder afirmarla sin respaldo |

**Trasladable a:** hostelería, obradores, tiendas de alimentación, cosmética — cualquier negocio que
haga afirmaciones que la ley le obliga a poder sostener.

---

## 14. Consultoría de negocio y presencia digital (más allá del código)

Lo que más me diferencia: **no me limito a lo que se puede programar**. Cuando la web ya está bien,
el problema del negocio suele estar fuera de ella — y ahí también entro.

**Auditoría de la ficha de Google Business Profile, con evidencia.** Diagnóstico:

1. El negocio estaba catalogado como **"bar"** y no como "restaurante", lo que lo dejaba fuera de las
   búsquedas con intención "restaurante cerca de…".
2. **Nota de 4,0 frente a 4,3–4,8** de todos los competidores que sí aparecían recomendados. Los
   asistentes filtran por nota: por debajo de ~4,3 no entras en la lista.
3. **Ficha duplicada en TripAdvisor**, partiendo las reseñas en dos y hundiendo el ranking
   (**puesto 191 de 987**).

| Capacidad | Evidencia / resultado |
|---|---|
| **Guía de optimización escrita para el dueño** | Pasos numerados por orden de impacto, textos listos para copiar y pegar, y una lista explícita de **lo que NO debe hacer** (no meter palabras clave en el nombre del negocio, no comprar reseñas, no marcar atributos falsos) porque puede acarrear la suspensión de la ficha |
| **Detección de una página obsoleta de un tercero** | Una carta de 2019 alojada en el dominio de un antiguo proveedor competía con la web oficial y **publicaba un precio equivocado** (18,50 € cuando el menú cuesta 19,50 €). Plan: solicitar redirección 301 o retirada y, mientras tanto, reforzar las señales de frescura de la web oficial |
| **Honestidad por encima de la venta** | Tras medir con pruebas reales, le dije al cliente que **el cuello de botella ya no era la web**, sino su ficha de Google y su nota de reseñas. Es más fácil cobrar por seguir tocando código; es más útil decir dónde está el problema de verdad |
| **Medición honesta de resultados** | Monté una batería de pruebas de descubrimiento y reporté el resultado real (**0 de 5**) con su diagnóstico, en lugar de enseñar solo las métricas favorables |

**Trasladable a:** cualquier negocio local que ya tenga web pero "no aparezca". El problema rara vez
es solo el código, y saber distinguirlo ahorra dinero al cliente.

---

## 15. Cumplimiento legal (LSSI / RGPD)

| Capacidad | Evidencia |
|---|---|
| **Auditoría de cookies y rastreo** | Diagnóstico de qué se almacena y si obliga a banner |
| **Diseño "privacy-first"** | Eliminación de cookies no esenciales → web legal sin banner |
| **Textos legales a medida y multilingües** | Aviso Legal, Política de Privacidad y de Cookies en 9 idiomas, veraces con lo que la web hace |
| **Base jurídica y derechos RGPD** | Finalidades, conservación, encargados, transferencias, ejercicio de derechos, AEPD |

**Trasladable a:** **todos** los negocios con web en España/UE. Es un requisito legal y un sello
de confianza.

---

## 16. Funcionalidades de negocio a medida

| Capacidad | Evidencia |
|---|---|
| **Carrito / comanda 100 % cliente** | Pedido sin backend ni pago; resumen bilingüe (cliente + personal) |
| **Resolución de barreras de idioma en el punto de venta** | El cliente muestra su pedido traducido al personal |
| **Sistemas adaptables por contexto** | Misma base reutilizada para variantes (p. ej. carta normal vs. Halal) |
| **Lógica de dietas/atributos** | Etiquetas, alérgenos por nivel, filtros dinámicos, buscador |

**Trasladable a:** reservas, presupuestos online, configuradores de producto, sistemas de cita
previa, listas de la compra, formularios complejos.

---

## 17. Documentación, proceso y depuración

| Capacidad | Evidencia |
|---|---|
| **Documentación de handoff** | Contextos técnicos para front-end y back-end (división de trabajo) |
| **Mapa de arquitectura y BD** | Esquema, endpoints, integraciones documentados |
| **Verificación antes de entregar** | Pruebas reales en navegador y en build equivalente a producción |
| **Trabajo guiado por evidencias** | Cada cambio medido (peso, HTTP, render) — nada "a ojo" |
| **Detección de fallos que las herramientas no ven** | 44 platos con saltos de línea en la descripción rompían el formato del fichero para IA y dejaban los alérgenos en una línea suelta que un agente no asocia al plato. Invisible para el ojo humano y para cualquier validador |
| **Corrección de un filtro que inducía a error** | Al filtrar alérgenos, las cabeceras de grupo mostraban el total de platos en vez de los aptos y los grupos vacíos seguían visibles: un cliente celíaco veía "4 opciones" donde solo 1 lo era |
| **Validación de código que el compilador no cubre** | Ciertos scripts del panel no pasan por el compilador; un error de sintaxis rompería el panel entero sin avisar en el build. Añadí una comprobación manual de esos scripts antes de cada despliegue |

---

## 18. Tecnologías y herramientas dominadas

**Lenguajes/Framework:** TypeScript, JavaScript (vanilla), Astro, HTML, CSS, Tailwind, SQL (SQLite).
**Infraestructura:** Cloudflare (Pages, Workers, D1, R2, Image Transformations, Turnstile, Web
Analytics, GraphQL Analytics API, purga de caché por API), Git/GitHub, Wrangler.
**Seguridad:** WebCrypto (JWT/HMAC/PBKDF2), TOTP 2FA, CSP/HSTS, rate limiting, pentest defensivo.
**IA:** generación de imágenes con IA, traducción automática vía API, optimización de assets.
**SEO técnico:** Schema.org/JSON-LD, canonicalización + `hreflang`, sitemap dinámico (`lastmod`), IndexNow, Search Console.
**GEO / IA generativa:** `llms.txt`/`llms.md`, negociación de contenido (`Accept: text/markdown`), `robots.txt` para motores de IA (GPTBot, ClaudeBot, Google-Extended), cabeceras `Link` (RFC 8288), catálogo de API (RFC 9727), pruebas de descubrimiento.
**Presencia digital y negocio:** auditoría de Google Business Profile, análisis semántico de competencia, identidad de marca multiidioma, gestión de reseñas y perfiles (TripAdvisor, etc.).
**Legal:** LSSI/RGPD, Reglamento UE 1169/2011 (alérgenos).
**Rendimiento:** Lighthouse/Core Web Vitals, subsetting de fuentes, fonttools, análisis de cadena crítica.

---

## 19. Tipos de negocio a los que aplica directamente

- **Hostelería:** cartas digitales, reservas, menús del día (✔ demostrado).
- **Comercio local / tiendas:** catálogo, stock, precios, fotos autogestionables.
- **Salud (clínicas, dentistas, fisios):** cita previa, área privada, RGPD estricto.
- **Servicios profesionales (abogados, gestorías, arquitectos):** web corporativa + SEO local + legal.
- **Belleza/bienestar (peluquerías, gimnasios, spas):** agenda, servicios, bonos.
- **Inmobiliarias / automoción:** catálogos con muchas imágenes optimizadas y filtros.
- **Turismo (hoteles, casas rurales, guías):** multilingüe + SEO + reservas.

---

## 20. Propuesta de valor diferencial (el "por qué yo")

Cuando me contrata, contrata a alguien que hace las cuatro cosas:

1. **Construye** el producto — web, panel autogestionable, multiidioma y seguridad de grado bancario.
2. **Lo hace descubrible** — en Google, en Google Maps y en los asistentes de IA (ChatGPT,
   Perplexity, Gemini, Copilot), que es por donde ya llegan muchos clientes.
3. **Audita y diagnostica** la presencia digital completa — ficha de Google, reseñas, perfiles de
   terceros e identidad de marca —, incluida la parte que no depende del código.
4. **Dice la verdad** — cuando el problema no es la web, lo digo, aunque eso signifique menos horas
   facturadas para mí.

Y todo sobre una base que ya de por sí diferencia:

- **Coste de operación ~0 €/mes** — infraestructura en capa gratuita, sin servidores que mantener.
- **El cliente es autónomo** — edita su web sin depender de mí para cada cambio.
- **Rápido de verdad** — optimización medida, no promesas (Lighthouse, Core Web Vitals).
- **Multilingüe y local** — pensado para captar clientela internacional y posicionar en su ciudad.
- **Seguro y legal de fábrica** — grado bancario + RGPD/LSSI desde el día uno.
- **Privacidad como ventaja** — analítica útil sin cookies ni banners molestos.
- **Diseño con identidad** — nada de plantillas genéricas; marca propia.

---

*Todas las capacidades anteriores están respaldadas por un sistema real en producción. Disponible
para adaptar este mismo nivel a cualquier sector.*
