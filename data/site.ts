// URL pública del sitio. Para migrar a un dominio propio (p. ej. https://emanuelmvera.com)
// basta con definir NEXT_PUBLIC_SITE_URL en el build; metadata, sitemap y robots la usan.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://emanuelmvera.github.io").replace(/\/$/, "");

// Rutas públicas (con barra final, coherente con trailingSlash: true).
export const SITE_ROUTES = ["/", "/proyectos/sispasantias/"];
