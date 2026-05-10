// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN CENTRAL DEL SITIO
// Busca "{{" para encontrar todos los placeholders a reemplazar.
// Ver también: docs/content-replacement-checklist.md
// ─────────────────────────────────────────────────────────────────────────────

const NOMBRE_COMPLETO = "Emanuel M. Vera";
const TITULO_PROFESIONAL = "Desarrollador Web Junior";
const EMAIL = "emanuel_vera@live.com.ar";
const GITHUB_URL = "https://github.com/emanuelmvera";
const LINKEDIN_URL = "https://linkedin.com/in/emanuelmvera";
const CV_FILENAME = "cv-emanuelmvera.pdf"; // TODO: nombre del PDF en public/cv/
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://emanuelmvera.github.io/"; // TODO: URL de Vercel o dominio propio
const INSTITUTO = "Instituto Tecnológico Beltrán";
const EDUCACION_ANIOS = "2020 – actual"; // TODO: ej. "2021 – 2024"

export const siteConfig = {
  fullName: NOMBRE_COMPLETO,
  professionalTitle: TITULO_PROFESIONAL,
  email: EMAIL,
  phone: "2224499021", // Opcional
  location: "Guernica", // TODO: ciudad, país
  githubUrl: GITHUB_URL,
  linkedinUrl: LINKEDIN_URL,
  cvUrl: `/cv/${CV_FILENAME}`,
  siteUrl: SITE_URL,
  socialOgImage: "/images/og/placeholder-og.png",

  nav: [
    { href: "#proyectos", label: "Proyectos" },
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#contacto", label: "Contacto" },
  ],

  hero: {
    eyebrow: "Portfolio personal",
    name: NOMBRE_COMPLETO,
    role: TITULO_PROFESIONAL,
    tagline:
      "Construyo interfaces claras, dashboards y formularios conectados a APIs con React, Angular, Node.js y PostgreSQL.",
    support:
      "Construyo proyectos personales para mejorar criterio de interfaz y trabajar cada entrega con enfoque de producto. Busco una primera oportunidad para aprender dentro de un equipo y aportar compromiso desde el día uno.",
    availability: "Buscando mi primera oportunidad como desarrollador web",
    techPills: ["React", "Angular", "Node.js", "PostgreSQL", "Perfil junior"],
    cta: {
      primary: { label: "Ver proyectos", href: "#proyectos" },
      secondary: { label: "Descargar CV", href: `/cv/${CV_FILENAME}` },
      tertiary: { label: "Contacto", href: "#contacto" },
    },
  },

  projects: {
    heading: "Proyectos destacados",
    intro:
      "Estos proyectos representan mi proceso de aprendizaje, mi forma de resolver interfaces reales y mi interés por construir productos web claros, útiles y bien presentados.",
  },

  about: {
    heading: "Sobre mí",
    paragraphs: [
      `Soy ${NOMBRE_COMPLETO}, desarrollador web junior. Trabajo principalmente con React o Angular en el frontend y con Node.js, Express, Sequelize y PostgreSQL en el backend.`,
      "También estudié Java, PHP, SQL y C++ durante mi formación. Aún no tengo experiencia laboral formal como programador, pero sí experiencia práctica construyendo proyectos personales y aprendiendo a convertir ideas en interfaces claras y funcionales.",
      "Mi objetivo actual es conseguir mi primer trabajo en desarrollo web, seguir creciendo técnicamente y aportar valor desde el primer día dentro de un equipo de producto o desarrollo.",
    ],
    timeline: [
      "Formación técnica",
      "Bases de frontend con React y Angular",
      "Bases de backend con Node.js, Express y PostgreSQL",
      "Proyectos personales para practicar producto e interfaz",
      "Objetivo actual: primer trabajo como desarrollador",
    ],
    education: `${INSTITUTO} · ${EDUCACION_ANIOS}`,
  },

  skills: {
    heading: "Formación y stack",
    intro:
      "Estas son las tecnologías con las que trabajo hoy y las bases que fui construyendo durante mi formación.",
    groups: [
      {
        name: "Frontend",
        skills: [
          "React",
          "Next.js",
          "Angular",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
        ],
      },
      {
        name: "Backend",
        skills: ["Node.js", "Express", "Sequelize", "REST APIs"],
      },
      {
        name: "Base de datos",
        skills: ["PostgreSQL", "SQL"],
      },
      {
        name: "Herramientas",
        skills: ["Git", "GitHub", "Vercel", "pnpm", "Docker (base)", "CI/CD básico"],
      },
      {
        name: "Tecnologías estudiadas",
        skills: ["Java", "PHP", "C++"],
      },
    ],
  },

  contact: {
    heading: "Contacto",
    intro:
      "Si crees que mi perfil puede encajar en tu equipo, me encantaría conversar. Puedes escribirme desde este formulario o contactarme directamente por email o LinkedIn.",
    privacy:
      "Los datos enviados por este formulario se usarán únicamente para responder tu mensaje y no se compartirán con terceros.",
    form: {
      fields: {
        name: { label: "Nombre", placeholder: "Tu nombre" },
        email: { label: "Email", placeholder: "tu@email.com" },
        subject: { label: "Asunto", placeholder: "Motivo del mensaje" },
        message: {
          label: "Mensaje",
          placeholder: "Cuéntame sobre la oportunidad o tu consulta",
        },
      },
      submit: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Gracias! Tu mensaje fue enviado correctamente. Te responderé lo antes posible.",
      error: `No pude enviar el mensaje en este momento. Por favor intenta de nuevo o escríbeme a ${EMAIL}.`,
    },
  },

  footer: {
    tagline: `Hecho con Next.js, TypeScript y Tailwind CSS.`,
    available: "Disponible para oportunidades junior.",
  },

  ui: {
    projectStatusLabels: {
      live: "En vivo",
      wip: "En progreso",
      archived: "Archivado",
      "coming-soon": "Próximamente",
    },
    hero: {
      floatingBadges: ["React", "Angular", "Node.js", "PostgreSQL", "Perfil junior"],
      opportunityBadge: "Buscando primera oportunidad",
      avatarAlt: "Foto de perfil de Emanuel M. Vera",
    },
    about: {
      objectiveHighlight:
        "Objetivo actual: conseguir mi primera oportunidad como desarrollador web junior.",
      highlights: [
        { title: "Frontend", detail: "React · Angular · TypeScript" },
        { title: "Backend", detail: "Node.js · Express · PostgreSQL" },
        { title: "Objetivo", detail: "Primera oportunidad junior" },
      ],
      timelineTitle: "Trayectoria",
    },
    skills: {
      sectionSubtitle:
        "Stack principal orientado a desarrollo web full stack con foco en frontend.",
      groupDescription: "Base práctica orientada a proyectos web reales.",
      coreSkills: ["React", "Angular", "TypeScript", "Node.js", "PostgreSQL"],
    },
    projects: {
      imageMeta: {
        "app-clima": {
          src: "/images/projects/app-clima/thumb.webp",
          alt: "Vista promocional de la aplicación del clima Buen Tiempo",
        },
        "billetera-virtual": {
          src: "/images/projects/billetera-virtual/thumb.webp",
          alt: "Vista promocional de la aplicación Billetera Virtual",
        },
      },
      comingSoonLabel: "En construcción",
    },
  },

  meta: {
    defaultTitle: `${NOMBRE_COMPLETO} | ${TITULO_PROFESIONAL}`,
    titleTemplate: `%s | ${NOMBRE_COMPLETO}`,
    description:
      "Construyo interfaces claras, dashboards y formularios conectados a APIs con React, Angular, Node.js y PostgreSQL.",
  },
};
