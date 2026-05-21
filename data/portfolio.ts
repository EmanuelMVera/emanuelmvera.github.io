export const portfolio = {
  name: "Emanuel M. Vera",
  role: "Desarrollador Web",
  email: "emanuel_vera@live.com.ar",
  location: "Guernica, Argentina",
  cvUrl: "/cv/cv-emanuelmvera.pdf",
  links: {
    github: "https://github.com/emanuelmvera",
    linkedin: "https://linkedin.com/in/emanuelmvera",
  },
  hero: {
    badge: "Interfaces claras y soluciones web",
    firstName: "Emanuel",
    lastName: "M. Vera",
    role: "Desarrollador Web",
    description:
      "Construyo interfaces modernas, dashboards y aplicaciones web responsive, priorizando claridad visual, código mantenible y una experiencia de usuario sólida.",
    stackLabel: "Interfaces · APIs · Sistemas web",
    techChips: ["React", "Angular", "Node.js", "PostgreSQL"],
  },
  about: {
    paragraphs: [
      "Soy desarrollador web con formación en Análisis de Sistemas y foco en construir interfaces claras, aplicaciones responsive y soluciones conectadas a APIs.",
      "Actualmente desarrollo proyectos personales y académicos para fortalecer mi criterio técnico, mejorar mi forma de trabajar y resolver problemas reales.",
      "Me interesa aportar valor con código mantenible, buena comunicación y una mirada práctica sobre la experiencia del usuario.",
    ],
    highlights: [
      { icon: "target", label: "Enfoque", value: "Desarrollo frontend y fullstack" },
      { icon: "book", label: "Formación", value: "Aprendizaje continuo y autodidacta" },
      { icon: "lightning", label: "Disponibilidad", value: "Proyectos personales reales" },
    ],
  },
  skillCategories: [
    {
      category: "Frontend",
      icon: "frontend",
      items: ["React", "Angular", "Tailwind CSS", "TypeScript"],
    },
    {
      category: "Backend",
      icon: "backend",
      items: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      category: "Bases de datos",
      icon: "database",
      items: ["PostgreSQL", "SQL", "Sequelize"],
    },
    {
      category: "Tiempo real y bots",
      icon: "realtime",
      items: ["Socket.IO", "Telegraf", "Telegram Bots", "Realtime apps"],
    },
    {
      category: "Game dev",
      icon: "gamedev",
      items: ["Godot", "Pixel Art básico", "Cliente-servidor"],
    },
    {
      category: "Herramientas",
      icon: "tools",
      items: ["Git & GitHub", "VS Code", "Postman"],
    },
    {
      category: "Conceptos",
      icon: "concepts",
      items: ["Roles y permisos", "Sistemas de gestión", "Autenticación", "Arquitectura full stack"],
    },
    {
      category: "IA aplicada al desarrollo",
      icon: "ai",
      items: ["Claude Code", "Cursor", "GitHub Copilot", "Prompting técnico"],
    },
  ],
  projects: [
    {
      title: "App del clima",
      description:
        "Consulta clima actual, pronóstico por horas y próximos días usando APIs externas, con foco en responsive design y experiencia visual.",
      image: "/images/projects/app-clima/thumb.webp",
      chips: ["React", "API externa", "Responsive"],
      repo: "https://github.com/EmanuelMVera/WeatherProject",
      link: "weather-project-psi-ten.vercel.app",
    },
    {
      title: "Billetera virtual",
      description:
        "Aplicación tipo fintech con autenticación, dashboard financiero, transferencias y gestión de movimientos.",
      image: "/images/projects/billetera-virtual/thumb.webp",
      chips: ["React", "Node.js", "PostgreSQL"],
      repo: "https://github.com/EmanuelMVera/virtual-wallet",
      link: "#",
    },
  ],
  wip: [
    {
      title: "Sistema de Gestión de Pasantías",
      description:
        "Plataforma académica para conectar estudiantes con empresas mediante ofertas trainee, junior y pasantías avaladas por el instituto.",
      badge: "Tesis final",
      badgeVariant: "violet",
      chips: ["React", "Node.js", "PostgreSQL", "Roles"],
    },
    {
      title: "Arena Brawler Bot",
      description:
        "Juego multijugador 2D estilo arena brawler con cliente en Godot y backend en Node.js, TypeScript, Telegraf y Socket.IO.",
      badge: "En desarrollo",
      badgeVariant: "blue",
      chips: ["Godot", "TypeScript", "Socket.IO", "Telegraf"],
    },
    {
      title: "Sistema Veterinario",
      description:
        "Sistema para gestionar turnos, historias clínicas y seguimiento de tratamientos entre veterinarios, propietarios y mascotas.",
      badge: "Próximamente",
      badgeVariant: "slate",
      chips: ["Angular", "Node.js", "PostgreSQL", "Gestión"],
    },
  ],
};
