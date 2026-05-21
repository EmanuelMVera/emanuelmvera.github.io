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
      items: ["PostgreSQL", "SQL", "Prisma"],
    },
    {
      category: "Herramientas",
      icon: "tools",
      items: ["Git & GitHub", "VS Code", "Figma", "Postman"],
    },
  ],
  projects: [
    {
      title: "App del clima",
      description:
        "Consulta del clima actual y pronóstico responsive con una experiencia moderna.",
      image: "/images/projects/app-clima/thumb.webp",
      chips: ["React", "API", "Responsive"],
      repo: "https://github.com/emanuelmvera",
      link: "#",
    },
    {
      title: "Billetera virtual",
      description:
        "Aplicación fintech con dashboard, transferencias y gestión de movimientos en tiempo real.",
      image: "/images/projects/billetera-virtual/thumb.webp",
      chips: ["React", "Node.js", "PostgreSQL"],
      repo: "https://github.com/emanuelmvera",
      link: "#",
    },
  ],
  wip: [
    {
      title: "TaskFlow",
      description: "Gestor de tareas colaborativo con tableros y equipos.",
    },
    {
      title: "DevBlog",
      description: "Blog personal para compartir artículos y experiencias.",
    },
  ],
};
