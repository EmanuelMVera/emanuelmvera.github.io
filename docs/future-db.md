# Plan de base de datos: PostgreSQL + Prisma

Documentación de referencia para cuando el portfolio necesite persistencia de datos real.

## Cuándo agregar una base de datos

El portfolio actual no necesita base de datos porque:
- Los proyectos son contenido estático en MDX
- El formulario delega el envío a Resend/Formspree
- No hay autenticación ni panel de administración

Escenarios que justificarían agregar PostgreSQL:

1. **Guardar mensajes del formulario** para tener historial propio (sin depender de Resend)
2. **Panel de admin** para editar proyectos sin tocar código
3. **Contador de visitas** o analytics propios
4. **Blog** con posts editables desde interfaz

## Stack recomendado

| Componente | Elección | Alternativa |
|---|---|---|
| ORM | Prisma | Drizzle |
| DB local | PostgreSQL 16 (Docker) | SQLite para prototipado |
| DB cloud | Vercel Postgres (Neon) | Supabase |
| Migraciones | `prisma migrate dev` | — |

## Schema de ejemplo

Ver [`../prisma/schema.example.prisma`](../prisma/schema.example.prisma).

## Pasos de implementación

### 1. Instalar dependencias

```bash
npm install @prisma/client
npm install -D prisma
```

### 2. Inicializar Prisma

```bash
npx prisma init --datasource-provider postgresql
```

Esto crea `prisma/schema.prisma` y agrega `DATABASE_URL` a `.env`.

### 3. Configurar la URL de conexión

```env
# .env.local
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/portfolio?schema=public"
```

Para Vercel Postgres (Neon):
```env
DATABASE_URL="postgresql://..."
POSTGRES_PRISMA_URL="postgresql://...?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgresql://..."
```

### 4. Definir el schema y migrar

```bash
npx prisma migrate dev --name init
npx prisma generate
```

### 5. Usar el cliente en Route Handlers

```typescript
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

```typescript
// app/api/contact/route.ts (con persistencia)
import { prisma } from "@/lib/prisma";

// Dentro del handler POST:
await prisma.message.create({
  data: { name, email, subject, message },
});
```

## Consideraciones para Vercel

- Usar `@vercel/postgres` o Neon serverless driver para evitar problemas de conexión en Edge/Serverless
- La Route Handler de contacto ya tiene `export const runtime = "nodejs"` — compatible con Prisma
- En el plan gratuito de Vercel, la base de datos se pausa tras inactividad

## Docker para desarrollo local

```yaml
# docker-compose.yml
services:
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_DB: portfolio
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: dev
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

```bash
docker compose up -d
# → DATABASE_URL="postgresql://dev:dev@localhost:5432/portfolio"
```
