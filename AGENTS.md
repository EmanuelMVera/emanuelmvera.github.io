# AGENTS.md — Guía para agentes de IA

Instrucciones para cualquier agente de IA (Copilot, Claude Code, Cursor, etc.) que trabaje en este repositorio.

## Sobre el proyecto

Portfolio profesional Next.js 16 App Router + TypeScript + Tailwind CSS v4. Deploy en Vercel. El propietario busca su primer trabajo como desarrollador web junior.

## Reglas críticas

### Tailwind CSS v4
- Usar `@import "tailwindcss"` — NUNCA `@tailwind base/components/utilities`
- Dark mode: `@variant dark (&:where(.dark, .dark *))` — NO `darkMode: 'class'` en config
- CSS variables: sintaxis `bg-(--bg)` — NUNCA `bg-[var(--bg)]`
- No existe `tailwind.config.js/ts` — Tailwind v4 no lo usa

### Next.js 16
- `params` en Route Segments es `Promise<{ slug: string }>` — siempre `await params`
- Server Components por defecto — `"use client"` solo donde hay estado o efectos
- `next/image` solo cuando hay imagen real — usar `<div>` placeholder si no hay imagen

### TypeScript
- Sin `any` implícito
- Interfaces de datos en `types/project.ts`
- Todo el copy en `data/site.ts` — no hardcodear strings en componentes

### Formulario de contacto
- La API route en `app/api/contact/route.ts` soporta tres modos: Resend → Formspree → demo
- El campo honeypot `company` debe mantenerse oculto offscreen (NO `display:none` ni `visibility:hidden` — los bots los detectan)
- Validación Zod en cliente Y en servidor

### Contenido
- Los placeholders `{{NOMBRE_COMPLETO}}`, `{{EMAIL}}`, etc. son intencionales — no los reemplazar sin instrucción explícita del usuario
- El contenido MDX está en `content/projects/*.mdx`
- Frontmatter parseado con `gray-matter` — NO importar los MDX directamente

## Convenciones de código

- Sin comentarios salvo que el WHY sea no obvio
- Sin `console.log` en producción
- Imports: externos primero, luego internos con `@/`
- Componentes de servidor: sin sufijo especial
- Componentes de cliente: primera línea `"use client"`

## Tests

- Unit tests en `tests/unit/` con Vitest
- E2E en `tests/e2e/` con Playwright (chromium)
- No mockear lo que pueda ser real — `node:fs` es la excepción necesaria para `lib/mdx.ts`
- Los tests e2e asumen servidor corriendo en `localhost:3000`

## Qué NO hacer

- No instalar `framer-motion` — se decidió no usarlo para mantener el bundle pequeño
- No instalar Radix UI — el patrón `asChild` se reemplazó por `buttonClasses()` helper
- No agregar `react-hook-form` — el formulario usa `useState` manual por diseño
- No crear `tailwind.config.ts` — Tailwind v4 no lo necesita
- No agregar `@next/mdx` al config — se usa `next-mdx-remote/rsc` en su lugar
- No pushear a `main` sin pasar el CI (lint + typecheck + tests + build)

## Flujo de trabajo recomendado

1. Crear rama desde `main`
2. Hacer cambios
3. `npm run typecheck` — 0 errores
4. `npm run lint` — 0 warnings
5. `npm test` — todos verdes
6. `npm run build` — build limpio
7. PR a `main` → CI automático en GitHub Actions
