// Contenido del caso de estudio. Cada afirmación está respaldada por el repo
// EmanuelMVera/pasantias (código, docs/ROLES-Y-PERMISOS.md, docs/DEPLOYMENT.md, CI).

export const sispasantias = {
  title: "SisPasantías",
  subtitle: "Portal institucional de empleo y pasantías",
  context: "Proyecto final académico · Full Stack",
  summary:
    "Bolsa de empleo y pasantías para un instituto terciario: conecta alumnos y egresados con empresas, mientras el instituto aprueba a quién participa, modera lo que se publica y audita cada acción relevante.",
  demo: "https://sispasantias.vercel.app",
  repo: "https://github.com/EmanuelMVera/pasantias",
  images: {
    thumb: "/images/projects/sispasantias/thumb.webp",
    desktop: "/images/projects/sispasantias/desktop.webp",
    mobile: "/images/projects/sispasantias/mobile.webp",
  },
  stack: ["React", "Node.js", "Express", "PostgreSQL", "Sequelize", "Jest", "Playwright"],

  problem: [
    "Alumnos y egresados necesitan un lugar confiable donde acceder a sus primeras oportunidades laborales y pasantías.",
    "Las empresas necesitan publicar ofertas y gestionar sus procesos de selección con más de una persona del equipo.",
    "El instituto necesita controlar quién participa y qué se publica, con trazabilidad de lo que ocurre.",
    "Había que separar el gobierno institucional de la operación diaria del reclutamiento.",
  ],

  roles: [
    {
      icon: "admin",
      title: "Administrador del Sistema",
      description:
        "Gobierna la plataforma: aprueba empresas y reclutadores, modera ofertas, gestiona usuarios, importa alumnos por CSV y consulta auditoría y estadísticas.",
    },
    {
      icon: "company",
      title: "Administrador de Empresa",
      description:
        "Gestiona la cuenta de la empresa: equipo, perfil, responsable de cada oferta y pausa o cierre de publicaciones. No crea ofertas: gobierna.",
    },
    {
      icon: "recruiter",
      title: "Reclutador",
      description:
        "Crea y edita sus ofertas, revisa candidatos, avanza el pipeline de selección con notas internas y conversa con postulantes por chat.",
    },
    {
      icon: "student",
      title: "Alumno / Egresado",
      description:
        "Completa su perfil y CV, explora ofertas recomendadas y filtradas, se postula y sigue el estado de cada postulación.",
    },
  ],

  flow: [
    "Empresa solicita registro",
    "Instituto aprueba",
    "Reclutador crea oferta",
    "Moderación",
    "Alumno se postula",
    "Proceso de selección",
    "Chat",
    "Contratación",
  ],

  architecture: {
    main: [
      { layer: "Frontend", tech: "React + Vite", host: "Vercel" },
      { layer: "Backend", tech: "Node.js + Express", host: "Render" },
      { layer: "Base de datos", tech: "PostgreSQL", host: "Neon" },
    ],
    connectors: ["REST API · proxy de Vercel", "Sequelize · migraciones"],
    services: [
      { name: "Archivos", tech: "Cloudflare R2", note: "Bucket privado para CVs y público para imágenes" },
      { name: "Email", tech: "Brevo", note: "Notificaciones y recuperación de contraseña" },
      { name: "CI/CD", tech: "GitHub Actions", note: "Migraciones, tests, lint y build en cada push a main y PR" },
    ],
  },

  security: [
    { title: "JWT en cookie HttpOnly", detail: "Sesión fuera del alcance de JavaScript y revocable por versión de token." },
    { title: "Protección CSRF", detail: "Patrón double-submit: cookie y header deben coincidir." },
    { title: "RBAC en dos niveles", detail: "Rol global (admin, alumno, egresado, empresa) + rol interno de empresa." },
    { title: "Helmet, CSP y CORS", detail: "Cabeceras estrictas y lista blanca de orígenes, sin comodines." },
    { title: "Rate limiting", detail: "Límites separados para autenticación, escrituras y exportaciones." },
    { title: "Contraseñas con bcrypt", detail: "Hash con costo 12; nunca se almacenan en texto plano." },
    { title: "Validación front y back", detail: "El frontend guía al usuario; el backend es la autoridad." },
    { title: "Archivos privados", detail: "CVs servidos solo a usuarios autorizados; tipo verificado por MIME y magic bytes." },
    { title: "Auditoría", detail: "Registro de acciones sensibles con filtros y exportación a CSV, Excel y PDF." },
  ],

  quality: {
    tools: ["Jest", "Supertest", "Playwright", "ESLint", "OpenAPI", "GitHub Actions"],
    points: [
      "Suite de tests de backend con Jest y Supertest sobre la API y sus reglas de negocio.",
      "Tests E2E con Playwright para los flujos de cada rol, sesión, notificaciones y vistas responsive.",
      "CI que aplica migraciones, verifica que sean reversibles, detecta desvíos del esquema, corre los tests y valida lint y build.",
      "API documentada con OpenAPI; el CI controla que la especificación esté actualizada.",
    ],
  },

  deployment: [
    { label: "Frontend", value: "Vercel" },
    { label: "Backend", value: "Render" },
    { label: "Base de datos", value: "Neon" },
    { label: "Archivos", value: "Cloudflare R2" },
    { label: "Email", value: "Brevo" },
  ],

  participation: {
    intro:
      "Proyecto académico desarrollado en equipo (cuatro integrantes) para Prácticas Profesionalizantes III. En la propuesta original mi rol fue backend y arquitectura.",
    body:
      "Durante el desarrollo fui el principal contribuidor del código del repositorio y participé en la evolución técnica de toda la plataforma:",
    areas: [
      "Backend: API REST, reglas de negocio y permisos por rol",
      "Frontend: pantallas por rol y refinamiento de la experiencia de usuario",
      "Base de datos: modelo, migraciones y consistencia de datos",
      "Seguridad de sesión, archivos privados y auditoría",
      "Testing con Jest, Supertest y Playwright",
      "CI con GitHub Actions y despliegue multi-servicio",
    ],
  },

  challenges: [
    {
      title: "RBAC entre roles globales e internos",
      detail:
        "Combinar el rol del usuario en la plataforma con su rol dentro de la empresa, aplicando los permisos en el backend y no solo en la interfaz.",
    },
    {
      title: "Separar gobierno y operación",
      detail:
        "Definir qué decide el administrador de empresa y qué hace el reclutador, para que cada uno vea y modifique solo lo que le corresponde.",
    },
    {
      title: "Seguridad de sesión",
      detail:
        "Manejar la sesión con cookies HttpOnly implicó resolver CSRF, CORS con credenciales y un proxy de Vercel hacia la API para mantener el mismo origen.",
    },
    {
      title: "Migraciones confiables",
      detail:
        "Evolucionar el esquema con migraciones reversibles y un chequeo en CI que detecta diferencias entre la base y el esquema esperado.",
    },
    {
      title: "Despliegue multi-servicio",
      detail:
        "Coordinar Vercel, Render, Neon, Cloudflare R2 y Brevo con variables de entorno y CORS consistentes entre entornos.",
    },
    {
      title: "Crecer sin romper",
      detail:
        "Sostener una base de código grande apoyándose en tests de backend y E2E por rol antes de cada cambio importante.",
    },
  ],
};
