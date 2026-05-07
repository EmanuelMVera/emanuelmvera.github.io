# Checklist de reemplazo de contenido personal

Todos los valores personales están centralizados como placeholders `{{...}}` para que el sitio pueda trabajarse sin exponer datos reales. Seguir este checklist para publicar el sitio con información real.

## Datos básicos — `data/site.ts`

- [ ] `{{NOMBRE_COMPLETO}}` → Tu nombre real (ej: "Emanuel M. Vera")
- [ ] `{{EMAIL}}` → Tu email de contacto profesional
- [ ] `{{GITHUB_URL}}` → `https://github.com/tu-usuario`
- [ ] `{{LINKEDIN_URL}}` → `https://linkedin.com/in/tu-perfil`
- [ ] `{{CV_FILENAME}}` → Nombre del archivo PDF en `public/` (ej: `cv-2025.pdf`)
- [ ] `{{SITE_URL}}` → URL del sitio desplegado (ej: `https://emanuelmvera.github.io`)

## Proyectos — `content/projects/`

### app-clima.mdx
- [ ] `{{APP_CLIMA_DEMO_URL}}` → URL del demo desplegado
- [ ] `{{APP_CLIMA_REPO_URL}}` → URL del repositorio en GitHub
- [ ] Verificar que el texto del cuerpo (Problema / Qué construí / Mi rol) describe fielmente tu proyecto real

### billetera-virtual.mdx
- [ ] `{{BILLETERA_DEMO_URL}}` → URL del demo desplegado
- [ ] `{{BILLETERA_REPO_URL}}` → URL del repositorio en GitHub
- [ ] Verificar descripción del proyecto

## Imágenes

- [ ] Crear carpeta `public/projects/` si no existe
- [ ] Subir `app-clima.webp` (1200×675px recomendado) y agregar `coverImage: /projects/app-clima.webp` en el frontmatter
- [ ] Subir `billetera-virtual.webp` y agregar `coverImage: /projects/billetera-virtual.webp` en el frontmatter
- [ ] Subir `og-image.png` (1200×630px) a `public/` y actualizar en `app/layout.tsx` si se cambia el nombre

## CV

- [ ] Poner el archivo PDF en `public/{{CV_FILENAME}}`
- [ ] Verificar que el link de descarga funciona en header y footer

## Variables de entorno — `.env.local`

- [ ] `NEXT_PUBLIC_SITE_URL` → URL real del sitio
- [ ] `RESEND_API_KEY` → API key de Resend (cuenta gratuita disponible en resend.com)
- [ ] `RESEND_FROM_EMAIL` → Email verificado en Resend (el plan gratuito permite `onboarding@resend.dev` para pruebas)
- [ ] `RESEND_TO_EMAIL` → Tu email donde quieres recibir los mensajes del formulario
- [ ] Configurar las mismas variables en Vercel → Settings → Environment Variables

## SEO y metadatos

- [ ] Revisar `app/layout.tsx`: título, descripción, OG image, Twitter card
- [ ] `app/sitemap.ts`: la URL base usa `NEXT_PUBLIC_SITE_URL` — asegurarse de que esté seteada
- [ ] `app/robots.ts`: ajustar si el sitio tiene rutas que no quieres indexar

## Verificación final

Después de reemplazar todos los placeholders:

```bash
# Buscar si quedan placeholders sin reemplazar
grep -r "{{" --include="*.ts" --include="*.tsx" --include="*.mdx" --include="*.md" .

# Si el resultado está vacío: listo para deploy
```

Correr también:
```bash
npm run build    # debe completar sin errores
npm run lint     # 0 warnings
```
