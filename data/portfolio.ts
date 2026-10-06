export type Project = {
  title: string;
  kind: string;
  description: string;
  image?: string;
  chips: string[];
  repo?: string;
  demo?: string;
};

export type FeaturedProject = {
  title: string;
  subtitle: string;
  team: string;
  description: string;
  image: string;
  desktopImage: string;
  mobileImage: string;
  highlights: string[];
  stack: string[];
  repo: string;
  demo: string;
  caseStudy: string;
};

export const portfolio = {
  name: "Emanuel M. Vera",
  role: "Analista de Sistemas | Desarrollador Full Stack",
  email: "emanuel_vera@live.com.ar",
  location: "Guernica, Argentina",
  cvUrl: "/cv/cv-emanuelmvera.pdf",
  links: {
    github: "https://github.com/emanuelmvera",
    linkedin: "https://linkedin.com/in/emanuelmvera",
  },
  hero: {
    badge: "Aplicaciones web completas y mantenibles",
    firstName: "Emanuel",
    lastName: "M. Vera",
    roleParts: ["Analista de Sistemas", "Desarrollador Full Stack"],
    description:
      "Desarrollo aplicaciones web completas, desde el análisis y el modelado hasta la implementación, el testing, la seguridad y el despliegue.",
    stackLabel: "APIs · Seguridad · Sistemas web",
    techChips: ["React", "Node.js", "PostgreSQL", "Testing"],
  },
  about: {
    paragraphs: [
      "Soy desarrollador full stack y estoy próximo a finalizar la Tecnicatura Superior en Análisis de Sistemas. Trabajo con React, Node.js y PostgreSQL construyendo aplicaciones web completas: desde el análisis de requerimientos y el modelado de datos hasta la implementación, el testing, la seguridad y el despliegue.",
      "En mi proyecto final de carrera, desarrollado en un equipo de cuatro integrantes, participo en SisPasantías: una plataforma institucional multirrol con reglas de negocio, control de permisos, moderación, chat, notificaciones, auditoría, archivos privados y procesos de selección. Ahí trabajé en el diseño de la base de datos, las APIs, la autenticación y autorización, el testing, la documentación y el despliegue.",
      "Me interesa seguir creciendo en proyectos donde pueda combinar desarrollo, análisis de sistemas y calidad de software.",
    ],
    highlights: [
      { icon: "target", label: "Enfoque", value: "Análisis y desarrollo full stack" },
      { icon: "book", label: "Formación", value: "Tec. Sup. en Análisis de Sistemas · próximo a finalizar" },
      { icon: "project", label: "Proyecto principal", value: "SisPasantías · plataforma multirrol" },
    ],
  },
  strengths: [
    {
      title: "Trabajo en equipo",
      detail:
        "Proyecto académico de cuatro integrantes, coordinando desarrollo, documentación y evolución funcional.",
    },
    {
      title: "Comunicación técnica",
      detail:
        "Explico decisiones con documentación funcional, casos de uso, diagramas y especificaciones.",
    },
    {
      title: "Resolución de problemas",
      detail:
        "Reglas de negocio, permisos, seguridad, flujos multirrol e integración entre frontend y backend.",
    },
    {
      title: "Adaptabilidad",
      detail:
        "Evoluciono una solución a medida que aparecen nuevos requerimientos sin perder consistencia técnica.",
    },
    {
      title: "Aprendizaje continuo",
      detail:
        "Incorporé prácticas de testing, seguridad, CI/CD y despliegue durante el desarrollo de mis proyectos.",
    },
  ],
  process: [
    {
      step: "Analizo",
      icon: "analyze",
      detail: "Requerimientos, casos de uso, reglas de negocio y necesidades del usuario.",
    },
    {
      step: "Diseño",
      icon: "design",
      detail: "Arquitectura, modelos de datos, roles, permisos y flujos del sistema.",
    },
    {
      step: "Desarrollo",
      icon: "develop",
      detail: "Frontend, APIs, base de datos, seguridad e integración.",
    },
    {
      step: "Valido",
      icon: "validate",
      detail: "Testing funcional, de integración y E2E, revisión de calidad y despliegue.",
    },
  ],
  primarySkills: ["React", "TypeScript", "JavaScript", "Node.js", "Express", "PostgreSQL"],
  skillCategories: [
    {
      category: "Frontend",
      icon: "frontend",
      items: ["React", "TypeScript", "JavaScript", "Vite", "Responsive UI", "Tailwind CSS"],
    },
    {
      category: "Backend & APIs",
      icon: "backend",
      items: ["Node.js", "Express", "REST APIs", "OpenAPI"],
    },
    {
      category: "Bases de datos",
      icon: "database",
      items: ["PostgreSQL", "SQL", "Sequelize", "Migraciones"],
    },
    {
      category: "Testing & calidad",
      icon: "testing",
      items: ["Jest", "Supertest", "Playwright", "ESLint"],
    },
    {
      category: "Seguridad",
      icon: "security",
      items: ["JWT", "Cookies HttpOnly", "CSRF", "RBAC", "Validación", "Rate limiting"],
    },
    {
      category: "Deploy & DevOps",
      icon: "deploy",
      items: ["Git", "GitHub", "GitHub Actions", "Vercel", "Render", "Neon"],
    },
    {
      category: "Herramientas",
      icon: "tools",
      items: ["Postman", "VS Code", "pgAdmin", "Claude Code", "GitHub Copilot"],
    },
    {
      category: "Otros",
      icon: "other",
      items: ["Socket.IO", "Telegram Bots", "Godot"],
    },
  ],
  featuredProject: {
    title: "SisPasantías",
    subtitle: "Portal institucional de empleo y gestión de pasantías",
    team: "Proyecto académico en equipo",
    description:
      "Plataforma full stack multirrol que conecta alumnos y egresados con empresas y permite al instituto administrar, moderar y auditar el proceso completo de selección.",
    image: "/images/projects/sispasantias/thumb.webp",
    desktopImage: "/images/projects/sispasantias/desktop.webp",
    mobileImage: "/images/projects/sispasantias/mobile.webp",
    highlights: [
      "Cuatro experiencias con permisos por rol global y rol interno de empresa",
      "Ofertas con moderación institucional y pipeline de selección con historial",
      "Chat, notificaciones in-app y por email, CV y archivos privados",
      "Auditoría, importación CSV y estadísticas para el instituto",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Jest", "Playwright", "GitHub Actions"],
    repo: "https://github.com/EmanuelMVera/pasantias",
    demo: "https://sispasantias.vercel.app",
    caseStudy: "/proyectos/sispasantias/",
  } satisfies FeaturedProject,
  projects: [
    {
      title: "Billetera virtual",
      kind: "Proyecto personal",
      description:
        "Aplicación full stack tipo fintech: autenticación con JWT, saldo, transferencias entre usuarios e historial de transacciones, con frontend en React y una API en Express sobre PostgreSQL.",
      image: "/images/projects/billetera-virtual/thumb.webp",
      chips: ["React", "TypeScript", "Node.js", "PostgreSQL", "JWT"],
      repo: "https://github.com/EmanuelMVera/virtual-wallet",
      demo: "https://virtual-wallet-iota.vercel.app",
    },
    {
      title: "App del clima",
      kind: "Proyecto personal",
      description:
        "Consume una API meteorológica externa para mostrar el clima actual, el pronóstico por horas y los próximos días, con diseño responsive.",
      image: "/images/projects/app-clima/thumb.webp",
      chips: ["React", "API externa", "Responsive"],
      repo: "https://github.com/EmanuelMVera/WeatherProject",
      demo: "https://weather-project-psi-ten.vercel.app",
    },
  ] satisfies Project[],
  experiments: [
    {
      title: "Arena Brawler",
      kind: "Proyecto experimental",
      description:
        "Prototipo de juego multijugador en tiempo real estilo arena: cliente en Godot y servidor en Node.js con TypeScript y Socket.IO, integrado con un bot de Telegram. No es un producto terminado.",
      chips: ["Godot", "TypeScript", "Node.js", "Socket.IO", "Telegram"],
      repo: "https://github.com/EmanuelMVera/telegram-arena-game",
    },
  ] satisfies Project[],
};
