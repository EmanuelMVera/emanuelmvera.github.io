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
  role: "Desarrollador Full Stack",
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
    role: "Desarrollador Full Stack",
    description:
      "Desarrollo aplicaciones web completas con React, Node.js y PostgreSQL: desde la interfaz y las APIs hasta la seguridad, el testing, la base de datos y el despliegue.",
    stackLabel: "APIs · Seguridad · Sistemas web",
    techChips: ["React", "Node.js", "PostgreSQL", "Testing"],
  },
  about: {
    paragraphs: [
      "Soy desarrollador full stack con formación en Análisis de Sistemas. Trabajo con React, Node.js y PostgreSQL construyendo aplicaciones web completas: desde la interfaz y las APIs hasta la autenticación, los permisos, el testing y el despliegue.",
      "En mi proyecto final trabajé en SisPasantías, una plataforma institucional multirol desarrollada en equipo, con moderación de ofertas, procesos de selección, chat, notificaciones, archivos privados y auditoría.",
      "Me interesa seguir creciendo en proyectos donde pueda combinar desarrollo, análisis de sistemas y calidad de software.",
    ],
    highlights: [
      { icon: "target", label: "Enfoque", value: "Desarrollo Full Stack" },
      { icon: "book", label: "Formación", value: "Análisis de Sistemas" },
      { icon: "lightning", label: "Fortalezas", value: "Desarrollo · Testing · Resolución de problemas" },
    ],
    contributions: [
      "Desarrollo de funcionalidades de extremo a extremo",
      "Código mantenible y reglas de negocio validadas",
      "Testing y atención a la calidad",
      "Comunicación y aprendizaje continuo",
    ],
  },
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
    description:
      "Plataforma full stack multirol que conecta alumnos y egresados con empresas y permite al instituto administrar, moderar y auditar el proceso completo de selección.",
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
        "Aplicación tipo fintech con registro e inicio de sesión, carga de saldo simulada, transferencias entre usuarios e historial de movimientos.",
      image: "/images/projects/billetera-virtual/thumb.webp",
      chips: ["React", "TypeScript", "Node.js", "PostgreSQL", "JWT"],
      repo: "https://github.com/EmanuelMVera/virtual-wallet",
      demo: "https://virtual-wallet-iota.vercel.app",
    },
    {
      title: "App del clima",
      kind: "Proyecto personal",
      description:
        "Consulta clima actual, pronóstico por horas y próximos días consumiendo una API externa, con foco en diseño responsive.",
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
        "Prototipo de juego multijugador 2D estilo arena: cliente en Godot y servidor en Node.js con TypeScript, Socket.IO y un bot de Telegram.",
      chips: ["Godot", "TypeScript", "Socket.IO", "Telegraf"],
      repo: "https://github.com/EmanuelMVera/telegram-arena-game",
    },
  ] satisfies Project[],
};
