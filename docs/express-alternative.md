# Cuándo separar la API en Express

El portfolio usa Next.js Route Handlers para el formulario de contacto y el endpoint de proyectos. Esta decisión es correcta para el caso de uso actual. Este documento explica cuándo tendría sentido separar la API en un servidor Express independiente.

## Estado actual: Next.js Route Handlers

**Estructura actual:**
```
app/api/contact/route.ts   → POST /api/contact
app/api/projects/route.ts  → GET /api/projects
```

**Ventajas para este proyecto:**
- Un solo repositorio, un solo deploy
- Vercel gestiona el serverless automáticamente
- No hay estado compartido entre requests
- Las dos rutas son simples y sin lógica de negocio compleja

## Cuándo migrar a Express independiente

### Señales de que llegó el momento:

1. **Más de 5-6 endpoints** con lógica de negocio real (autenticación, roles, operaciones complejas en DB)
2. **WebSockets** o Server-Sent Events continuos (Next.js no los soporta bien en serverless)
3. **Procesamiento de archivos** pesado (upload de imágenes, PDFs) que excede el timeout de Vercel (10s en plan gratuito)
4. **Jobs en background** (colas de trabajo, cron jobs complejos)
5. **El equipo de backend quiere desplegar independientemente** del frontend
6. **Rate limiting** granular o lógica de autenticación stateful

### Señales de que NO es necesario:
- Solo tienes el formulario de contacto
- Los datos son mayormente estáticos (MDX)
- Presupuesto de infraestructura cero o mínimo

## Arquitectura cuando se separe

```
┌─────────────────────────────────┐     ┌─────────────────────────┐
│  Vercel (frontend)              │     │  Railway / Render (API) │
│  Next.js 16 App Router          │────▶│  Express 5 + TypeScript │
│  Solo Server Components + Pages │     │  + Prisma + PostgreSQL  │
└─────────────────────────────────┘     └─────────────────────────┘
```

## Stack recomendado para el API separado

```typescript
// Ejemplo de estructura
src/
├── routes/
│   ├── contact.ts       // POST /api/v1/contact
│   └── projects.ts      // GET  /api/v1/projects
├── middleware/
│   ├── rateLimit.ts     // express-rate-limit
│   └── validate.ts      // zod middleware
├── services/
│   ├── email.ts         // Resend
│   └── projects.ts      // Prisma
└── app.ts
```

```bash
# Dependencias del API separado
npm install express cors helmet express-rate-limit
npm install @prisma/client resend zod
npm install -D typescript @types/express ts-node-dev
```

## Deploy del API separado

**Railway** (recomendado para empezar):
```bash
# railway.json
{
  "build": { "builder": "NIXPACKS" },
  "deploy": { "startCommand": "npm start" }
}
```

**Variables de entorno del API:**
```env
DATABASE_URL=postgresql://...
RESEND_API_KEY=re_...
CORS_ORIGIN=https://emanuelmvera.github.io
PORT=8080
```

**Actualizar el frontend** para apuntar al API externo:
```typescript
// data/site.ts o .env.local
NEXT_PUBLIC_API_URL=https://api.emanuelmvera.dev
```

## Resumen de decisión

```
¿Más de 5 endpoints? → No  → Quedarse en Route Handlers
¿WebSockets?         → No  → Quedarse en Route Handlers
¿Background jobs?    → No  → Quedarse en Route Handlers
¿Todo Sí?            →     → Migrar a Express en Railway/Render
```

Para el portfolio actual, **Route Handlers es la decisión correcta**. Este documento existe para cuando el proyecto crezca y la separación se justifique.
