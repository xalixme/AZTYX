// Diccionario ES — fuente de la verdad de la estructura del contenido.
// El tipo Dict (en index.ts) se deriva de este objeto, así que en.ts debe replicar la forma.
export const es = {
  meta: {
    lang: "es",
    title: "AZTYX — Sysadmin & Full-Stack · Producto real, rápido",
    description:
      "AZTYX: administración de sistemas + desarrollo full-stack. Envío software de producción a gran velocidad emparejando criterio técnico con IA de vanguardia (Claude / agentic coding).",
  },

  nav: {
    demo: "Demo",
    work: "Cómo trabajo",
    skills: "Skills",
    case: "Caso",
    services: "Servicios",
    descubrible: "Visibilidad",
    contact: "Contacto",
    toContact: "Hablemos",
    skipToContent: "Saltar al contenido",
    langLabel: "Idioma",
    menu: "Menú",
  },

  status: {
    available: "Disponible para proyectos",
  },

  hero: {
    kicker: "Estudio de producto digital · Web + Panel + Reservas + IA",
    // Cada elemento es una línea del titular; la última se pinta en ultramar.
    title: ["Tu negocio merece", "más que una web:", "un sistema."],
    lead: "Cada segundo de carga y cada cuota mensual te cuestan clientes. Yo construyo plataformas completas — web, panel autogestionable, reservas y analítica sin cookies de seguimiento — en el edge de Cloudflare: tuyas para siempre, rápidas de verdad y con coste de operación desde 0 €.",
    ctaPrimary: "Probar la demo en vivo",
    ctaSecondary: "Hablemos de tu proyecto",
    chipsLabel: "Elige tu sector y pruébalo",
    specsLabel: "Ficha",
    specs: [
      { k: "Ubicación", v: "España · remoto" },
      { k: "Coste operación", v: "desde 0 €/mes" },
      { k: "Idiomas", v: "hasta 9 · RTL" },
      { k: "Legal", v: "RGPD · sin banner" },
    ],
    axesLabel: "Tres ejes · un vector",
    axes: [
      { k: "X", v: "Velocidad" },
      { k: "Y", v: "Inteligencia" },
      { k: "Z", v: "Seguridad" },
    ],
  },

  showroom: {
    num: "01",
    title: "Pruébalo: tu sector, en vivo",
    lead: "No es una maqueta: son los módulos que construyo, funcionando — reservas, multi-idioma con RTL, analítica sin cookies de seguimiento. Cambia de sector, cambia de idioma, reserva. Lo que tocas aquí es lo que instalo en tu negocio: pruébalo antes de que hablemos de dinero.",
    modulesLabel: "Módulos activos",
    signalsLabel: "Señales captadas",
    signalsNote: "analítica first-party · 0 cookies de seguimiento",
    perfLabel: "Esta misma página · HTML desde el edge en",
    hint: "Cada clic ahí dentro es una señal medible — la misma analítica, sin cookies, que te dirá qué funciona en tu negocio.",
    sectors: [
      { id: "restaurante", label: "Restaurante" },
      { id: "clinica", label: "Clínica" },
      { id: "hotel", label: "Alojamiento" },
      { id: "belleza", label: "Belleza" },
      { id: "comercio", label: "Comercio" },
    ],
  },

  work: {
    num: "02",
    title: "Cómo trabajo",
    lead: "La IA no sustituye el criterio: lo multiplica. Yo decido la arquitectura y dónde no se cede; el agente acelera la ejecución. El resultado es producto en producción en una fracción del tiempo.",
    humanTitle: "El humano decide",
    human: [
      "Arquitectura, modelo de datos y límites del sistema.",
      "Dónde NO se cede: seguridad, rendimiento, accesibilidad.",
      "Revisión crítica de cada línea antes de enviarla.",
      "Diagnóstico de incidencias reales en producción.",
    ],
    agentTitle: "El agente ejecuta",
    agent: [
      "Andamiaje, refactors y migraciones repetitivas.",
      "Extracción y automatización de datos.",
      "Borradores de UI y exploración de variantes.",
      "Pruebas, documentación y tareas de soporte.",
    ],
    noCedeTitle: "Donde no cedo",
    noCede: [
      { k: "Seguridad", v: "Prepared statements al 100%, validación whitelist-first, 2FA TOTP, sesiones revocables, audit log." },
      { k: "Rendimiento", v: "SSR/estático, cero scripts de terceros, imágenes optimizadas, caché. Lighthouse alto siempre." },
      { k: "Accesibilidad", v: "ARIA, teclado, contraste AA, prefers-reduced-motion. Para todo el mundo, no de adorno." },
    ],
  },

  skills: {
    num: "02",
    title: "Qué sé hacer",
    lead: "Inventario real, no aspiracional. Cada bloque está respaldado por código en producción.",
    groups: [
      {
        k: "Frontend / UI-UX",
        tags: [
          "Astro 5 (SSR/híbrido)",
          "JS vanilla (sin framework pesado)",
          "Tailwind + design tokens",
          "View Transitions · FLIP",
          "IntersectionObserver",
          "SVG procedural · sin stock",
          "Accesibilidad AA",
          "i18n 9 idiomas · RTL",
        ],
      },
      {
        k: "Backend / Full-stack",
        tags: [
          "Cloudflare Workers/Pages",
          "D1 (SQLite serverless)",
          "R2 (object storage)",
          "Motor de reservas nativo",
          "Pagos / señal (Stripe · Redsys)",
          "APIs REST · validación",
          "JWT (HMAC) · sesiones",
          "2FA TOTP (RFC 6238)",
          "Turnstile · rate-limiting",
          "Migraciones aditivas",
        ],
      },
      {
        k: "DevOps / Sysadmin · Martech",
        tags: [
          "Cloudflare (Workers · DNS · Cron)",
          "Cloudflare Zaraz (martech edge)",
          "Analítica first-party sin cookies",
          "Proxmox · Ceph (clúster HA)",
          "Redes · cableado Cat 5e/6",
          "wrangler CLI · CI/CD por push",
          "Linux · Windows Server",
          "Bash / PowerShell",
          "Incidencias en producción",
          "Optimización de rendimiento",
        ],
      },
      {
        k: "IA / Agentic coding",
        tags: [
          "Claude Code · flujos agentic",
          "Modo plan · diseño asistido",
          "Revisión de código con IA",
          "Extracción/automatización",
          "Criterio de arquitectura",
          "IA como multiplicador",
          "Prompt + contexto efectivos",
          "Velocidad sin perder control",
        ],
      },
    ],
  },

  trayectoria: {
    num: "03",
    title: "Trayectoria",
    lead: "De la administración de sistemas al desarrollo web full-stack. Una base técnica real, medida en producción.",
    expLabel: "Experiencia",
    experience: [
      {
        period: "Feb 2026 — Actualidad",
        role: "Desarrollador Web Jamstack & Administrador de Sistemas",
        org: "Freelance",
        bullets: [
          "Despliegue de infraestructura digital completa (Astro + Cloudflare) y webs en producción para clientes de hostelería.",
          "Carta digital dinámica con traducción multilingüe automatizada vía API (ver caso destacado).",
        ],
      },
      {
        period: "Mar — May 2024",
        role: "Administrador de Sistemas / Técnico de Soporte",
        org: "MZC (ONG)",
        bullets: [
          "Reducción de tiempos de inactividad en servicios empresariales y despliegue de red (cableado estructurado Cat 5e/6).",
          "Estandarización de procesos: inventariado en SharePoint y elaboración de guías técnicas para usuarios.",
        ],
      },
      {
        period: "2019 — 2021",
        role: "Técnico de Soporte Híbrido IT",
        org: "Freelance",
        bullets: [
          "Gestión integral del ciclo de vida del hardware: validación, puesta en marcha y mantenimiento.",
          "Resolución de incidencias complejas en entornos remotos y presenciales.",
        ],
      },
    ],
    eduLabel: "Formación",
    education: [
      {
        period: "2025 — 2026",
        title: "Diseño de Aplicaciones Web y Multimedia (IMSV01 · 480h)",
        org: "Grupo Fidsoft / SEPE",
        note: "",
      },
      {
        period: "2024",
        title: "Técnico Superior en ASIR (Admin. de Sistemas Informáticos en Red)",
        org: "C.D.P. Ramón y Cajal, Córdoba",
        note: "Proyecto final: clúster físico de alta disponibilidad (3 nodos) con Proxmox y Ceph.",
      },
      {
        period: "2021",
        title: "Bachillerato Tecnológico",
        org: "I.E.S. Averroes, Córdoba",
        note: "",
      },
    ],
    certLabel: "Certificaciones",
    certs: ["Diploma Oficial IMSV01 · Desarrollo Web y Multimedia — Ministerio de Trabajo / SEPE (2026)"],
    langLabel: "Idiomas",
    languages: [
      { k: "Español", v: "Nativo" },
      { k: "Inglés", v: "Fluido · técnico avanzado" },
    ],
  },

  case: {
    num: "03",
    kicker: "Caso de estudio · Producto en producción",
    title: "Taberna La Manuela",
    place: "Córdoba, junto a la Mezquita-Catedral",
    lead: "Plataforma de carta digital + panel de administración sobre Astro + Cloudflare (D1, R2). No es una promesa: está en producción, sirviendo a clientes reales cada día — segura, internacional y rápida.",
    metricsTitle: "Capacidades",
    metrics: [
      { k: "9", v: "idiomas con traducción automática y RTL (árabe)" },
      { k: "3 niveles", v: "sistema de alérgenos (UE 1169/2011) con audit log legal" },
      { k: "2FA", v: "login del panel con TOTP (RFC 6238 · WebCrypto)" },
      { k: "0", v: "cookies de terceros — analítica propia" },
    ],
    featuresTitle: "Qué incluye",
    features: [
      "Carta SSR con categorías dinámicas y multiprecio por tamaño.",
      "Filtros dietéticos (vegano/vegetariano/sin gluten) con sincronización bidireccional.",
      "Carta Halal separada con su propia experiencia.",
      "Menú del día y reordenación visual de platos.",
      "Panel admin con sesiones revocables y rate-limiting progresivo.",
      "Design system artesanal con texturas SVG y micro-animaciones.",
    ],
    stackTitle: "Stack",
    stack: ["Astro 5", "Cloudflare Pages", "D1", "R2", "Tailwind", "TypeScript"],
    capability:
      "+ Capacidad lista para integrar: motor de reservas nativo (agenda, recordatorios, control de no-shows) — sin cookies y multi-idioma.",
    linkLive: "Ver en vivo",
    linkRepo: "Código",
  },

  services: {
    num: "04",
    title: "En qué puedo ayudarte",
    lead: "No hago webs: construyo el sistema operativo de tu negocio — reservas que entran solas, clientes que te entienden en su idioma, datos que dicen qué funciona. Sin cuotas de plataforma: tu presupuesto va a construir, no a alquilar.",
    items: [
      { k: "Plataforma a medida", v: "Web pública + panel que gestionas tú, sin depender de nadie para cada cambio. Multilingüe, rápida, segura — y tuya, sin cuotas de plataforma." },
      { k: "Reservas y cita previa", v: "Agenda, recordatorios anti no-show, lista de espera y señal/depósito. Menos huecos vacíos y menos plantones: mesas, citas, salas, habitaciones o pistas." },
      { k: "Privacidad + Martech", v: "Analítica first-party sin cookies de seguimiento + Cloudflare Zaraz: mide campañas y conversiones desde el edge, sin banners que espantan ni scripts que frenan tu web." },
      { k: "Aceleración con IA", v: "Flujos agentic (Claude) con criterio humano: la velocidad de un equipo con la agilidad de uno, sin perder el control técnico." },
    ],
    sectorsLabel: "Sectores",
    sectors: [
      "Hostelería",
      "Comercio local",
      "Salud / clínicas",
      "Servicios profesionales",
      "Belleza / bienestar",
      "Turismo / alojamiento",
      "Inmobiliaria / automoción",
      "Educación / formación",
      "Eventos / ocio",
    ],
  },

  descubrible: {
    num: "05",
    title: "Que te encuentren",
    lead: "Construir la web es la mitad del trabajo. La otra mitad es que te encuentren — en Google y en los asistentes de IA — y saber dónde está el cuello de botella de verdad, aunque no sea la web.",
    items: [
      { k: "SEO técnico", v: "Canonical, sitemap con fecha real, un robots que invita a la IA en vez de bloquearla. Sin errores técnicos que te penalicen en Google." },
      { k: "GEO · visibilidad en IA", v: "Que ChatGPT, Perplexity o Gemini conozcan y recomienden tu negocio: contenido que los agentes leen y reutilizan, no solo páginas para humanos." },
      { k: "Ingeniería de entidad", v: "Que Google y la IA entiendan qué eres exactamente y que todos tus perfiles son uno solo — con la palabra que busca cada cliente, en su idioma." },
      { k: "Auditoría de presencia", v: "Ficha de Google, reseñas, perfiles de terceros. Te digo con datos qué falla y qué NO debes hacer — aunque el problema no sea el código." },
    ],
    note: "Y si el cuello de botella no es la web, te lo digo — aunque sean menos horas facturadas para mí.",
  },

  contact: {
    num: "06",
    title: "Trabajemos juntos",
    lead: "Cuéntame tu proyecto y te enseño qué ganaría tu negocio — sin compromiso. Respondo a todos los mensajes.",
    form: {
      name: "Nombre",
      namePh: "Cómo te llamas",
      email: "Email",
      emailPh: "tu@email.com",
      message: "Mensaje",
      messagePh: "En qué estás pensando…",
      send: "Enviar mensaje",
      sending: "Enviando…",
      success: "Mensaje enviado. Te respondo pronto.",
      error: "No se pudo enviar. Inténtalo de nuevo o escríbeme directamente.",
      invalid: "Revisa los campos marcados.",
    },
    directTitle: "Directo",
    email: "{{EMAIL}}",
    linkedinLabel: "LinkedIn",
    linkedin: "{{LINKEDIN}}",
    githubLabel: "GitHub",
    github: "github.com/xalixme",
  },

  footer: {
    tagline: "Humano + IA, a cuatro manos.",
    builtWith: "Construido con Astro + Cloudflare. Sin plantilla.",
    rights: "Todos los derechos reservados.",
    backToTop: "Volver arriba",
  },
} as const;
