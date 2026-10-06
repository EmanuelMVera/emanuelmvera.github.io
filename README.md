# Emanuel M. Vera — Portfolio

Portfolio personal de Emanuel M. Vera, desarrollador full stack. Presenta proyectos, skills y datos de contacto, e incluye un caso de estudio de **SisPasantías**, el proyecto principal.

Sitio publicado: <https://emanuelmvera.github.io/>

## Stack

| Uso | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router, `output: "export"`) |
| UI | React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS 4 |
| Íconos | Lucide React |
| Hosting | GitHub Pages (deploy con GitHub Actions) |

Es un sitio 100 % estático: no tiene backend, API routes, base de datos ni variables de entorno.

## Estructura

```
app/
  layout.tsx                    Layout raíz y metadata (SEO / Open Graph)
  page.tsx                      Home: Hero, Proyectos, Sobre mí + Skills, Contacto
  globals.css                   Tokens de color, fondo y animación de los badges del hero
  proyectos/sispasantias/
    page.tsx                    Caso de estudio de SisPasantías
components/                     Header, Hero, Projects, About, Skills, Contact, Footer…
data/
  portfolio.ts                  Contenido general (textos, proyectos, skills, links)
  sispasantias.ts               Contenido del caso de estudio
public/
  images/                       Avatar, capturas de proyectos (WebP) e imagen Open Graph
  icons/                        Íconos del sitio
  cv/                           CV en PDF
.github/workflows/deploy.yml    Build y deploy a GitHub Pages
```

Para cambiar textos, proyectos o skills se edita `data/portfolio.ts`; los componentes solo leen esos datos.

## Desarrollo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev         # servidor de desarrollo en http://localhost:3000
npm run lint        # ESLint
npm run typecheck   # TypeScript sin emitir (tsc --noEmit)
npm run build       # export estático en out/
```

## Deploy

Cada push a `main` ejecuta `.github/workflows/deploy.yml`: instala dependencias, corre `npm run build` y publica la carpeta `out/` en GitHub Pages.

Notas del export:

- Es un *user site* (`emanuelmvera.github.io`), así que no usa `basePath` ni `assetPrefix`.
- `trailingSlash: true` genera `out/proyectos/sispasantias/index.html`, de modo que `/proyectos/sispasantias/` funciona con acceso directo.
- `images.unoptimized: true`, porque GitHub Pages no tiene servidor de optimización. Las imágenes se publican ya optimizadas en WebP.
- El contenido es visible desde el HTML generado: ninguna sección depende de JavaScript ni de animaciones para mostrarse.

## Contacto

El formulario de contacto no envía mensajes desde la web: arma un enlace `mailto:` y abre la aplicación de correo del visitante con el asunto y el mensaje completos.
