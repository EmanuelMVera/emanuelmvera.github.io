export const portfolio = {
  name: "Emanuel M. Vera",
  role: "Desarrollador Web Junior",
  email: "emanuel_vera@live.com.ar",
  location: "Guernica, Argentina",
  cvUrl: "/cv/cv-emanuelmvera.pdf",
  links: {
    github: "https://github.com/emanuelmvera",
    linkedin: "https://linkedin.com/in/emanuelmvera",
  },
  hero: {
    badge: "Buscando primera oportunidad",
    firstName: "Emanuel",
    lastName: "M. Vera",
    role: "Desarrollador Web Junior",
    description:
      "Me apasiona construir interfaces modernas, aplicaciones web funcionales y experiencias digitales claras. Siempre aprendiendo, siempre mejorando.",
    techChips: ["React", "Angular", "Node.js", "PostgreSQL"],
  },
  about: {
    paragraphs: [
      "Soy desarrollador web junior con formación en Análisis de Sistemas y muchas ganas de crecer profesionalmente. Disfruto transformar ideas en productos digitales útiles, escribiendo código limpio y pensando en la experiencia del usuario.",
      "Me considero una persona proactiva, curiosa y comprometida a aprender y aportar valor en equipo.",
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
  ],
  projects: [
    {
      title: "App del clima",
      description:
        "Consulta del clima actual y pronóstico responsive con una experiencia moderna.",
      image: "/images/projects/app-clima/thumb.webp",
      chips: ["React", "API", "Responsive"],
      repo: "https://github.com/EmanuelMVera/WeatherProject",
      link: "weather-project-psi-ten.vercel.app",
    },
    {
      title: "Billetera virtual",
      description:
        "Aplicación fintech con dashboard, transferencias y gestión de movimientos en tiempo real.",
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
