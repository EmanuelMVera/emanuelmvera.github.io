// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN CENTRAL DEL SITIO
// Busca "{{" para encontrar todos los placeholders a reemplazar.
// Ver también: docs/content-replacement-checklist.md
// ─────────────────────────────────────────────────────────────────────────────

const NOMBRE_COMPLETO = "{{NOMBRE_COMPLETO}}"; // TODO: tu nombre completo
const TITULO_PROFESIONAL = "Desarrollador Web Junior";
const EMAIL = "{{EMAIL}}"; // TODO: tu@email.com
const GITHUB_URL = "{{GITHUB_URL}}"; // TODO: https://github.com/tu-usuario
const LINKEDIN_URL = "{{LINKEDIN_URL}}"; // TODO: https://linkedin.com/in/tu-usuario
const CV_FILENAME = "{{CV_FILENAME}}"; // TODO: nombre del PDF en public/cv/
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://{{SITE_URL}}"; // TODO: URL de Vercel o dominio propio
const INSTITUTO = "{{INSTITUTO}}"; // TODO: nombre del instituto
const EDUCACION_ANIOS = "{{EDUCACION_ANIOS}}"; // TODO: ej. "2021 – 2024"

export const siteConfig = {
  fullName: NOMBRE_COMPLETO,
  professionalTitle: TITULO_PROFESIONAL,
  email: EMAIL,
  phone: "", // Opcional
  location: "{{LOCALIDAD}}", // TODO: ciudad, país
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
    eyebrow: "Portafolio personal",
    name: NOMBRE_COMPLETO,
    role: TITULO_PROFESIONAL,
    tagline:
      "Construyo interfaces claras, dashboards y formularios conectados a APIs con React, Angular, Node.js y PostgreSQL.",
    support:
      "Estoy desarrollando proyectos personales para consolidar mi perfil frontend con base full stack y busco mi primera oportunidad para aportar, aprender rápido y crecer dentro de un equipo de desarrollo.",
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
      success:
        "¡Gracias! Tu mensaje fue enviado correctamente. Te responderé lo antes posible.",
      error: `No pude enviar el mensaje en este momento. Por favor intenta de nuevo o escríbeme a ${EMAIL}.`,
    },
  },

  footer: {
    tagline: `Hecho con Next.js, TypeScript y Tailwind CSS.`,
    available: "Disponible para oportunidades junior.",
  },

  meta: {
    defaultTitle: `${NOMBRE_COMPLETO} | ${TITULO_PROFESIONAL}`,
    titleTemplate: `%s | ${NOMBRE_COMPLETO}`,
    description:
      "Construyo interfaces claras, dashboards y formularios conectados a APIs con React, Angular, Node.js y PostgreSQL.",
  },
};
