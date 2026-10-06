import Image from "next/image";
import { ArrowRight, CheckCircle2, Code2, ExternalLink, FlaskConical, Users } from "lucide-react";
import { portfolio, type Project } from "@/data/portfolio";
import { GithubIcon } from "@/components/BrandIcons";
import { SectionHeading } from "@/components/SectionHeading";

function ProjectLinks({ project, dark = false }: { project: Project; dark?: boolean }) {
  const base = dark
    ? "inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-sm font-semibold text-slate-200 transition-colors hover:border-blue-400 hover:text-white"
    : "inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-700";

  return (
    <div className="flex flex-wrap gap-2">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver demo de ${project.title} (abre en una pestaña nueva)`}
          className={base}
        >
          <ExternalLink size={14} aria-hidden="true" />
          Demo
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver código de ${project.title} en GitHub (abre en una pestaña nueva)`}
          className={base}
        >
          <GithubIcon size={14} />
          Código
        </a>
      )}
    </div>
  );
}

function FeaturedProject() {
  const p = portfolio.featuredProject;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        {/* Contenido */}
        <div className="order-2 p-6 sm:p-8 lg:order-1 lg:p-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
              Proyecto principal
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
              <Users size={13} aria-hidden="true" />
              {p.team}
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">{p.title}</h3>
          <p className="mt-1 font-semibold text-blue-600">{p.subtitle}</p>
          <p className="mt-4 leading-relaxed text-slate-600">{p.description}</p>

          <ul className="mt-5 space-y-2.5">
            {p.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-blue-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.stack.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={p.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver demo de ${p.title} (abre en una pestaña nueva)`}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
            >
              <ExternalLink size={16} aria-hidden="true" />
              Ver demo
            </a>
            <a
              href={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver código de ${p.title} en GitHub (abre en una pestaña nueva)`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
            >
              <GithubIcon />
              GitHub
            </a>
            {/* <a> y no <Link>: en static export, Next 16.2 escribe los segmentos RSC de
                rutas anidadas con otro nombre del que pide el router (404 en prefetch).
                Una navegación completa a la página estática es lo más robusto. */}
            <a
              href={p.caseStudy}
              className="group/link inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-800"
            >
              Caso de estudio
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover/link:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Imagen */}
        <a
          href={p.caseStudy}
          className="order-1 block bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4 sm:p-6 lg:order-2 lg:flex lg:items-center lg:p-8"
          aria-label={`Ver caso de estudio de ${p.title}`}
        >
          <Image
            src={p.image}
            alt="Capturas reales de SisPasantías: espacio de reclutamiento, resumen de empresa y postulaciones del alumno"
            width={1200}
            height={675}
            className="h-auto w-full rounded-xl shadow-xl ring-1 ring-slate-900/5"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
        </a>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="proyectos" aria-labelledby="proyectos-title" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16">
      <SectionHeading id="proyectos-title">Proyectos</SectionHeading>

      <FeaturedProject />

      {/* Otros proyectos destacados */}
      <h3 className="mb-5 mt-14 flex items-center gap-2 text-lg font-bold text-slate-900">
        <Code2 size={20} className="text-blue-600" aria-hidden="true" />
        Otros proyectos destacados
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-blue-500/30"
          >
            {project.image && (
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/30 to-transparent" />
              </div>
            )}

            <div className="flex flex-1 flex-col bg-[#0D1117] p-5 text-white">
              <span className="mb-1.5 inline-block text-[11px] font-medium uppercase tracking-widest text-slate-400">
                {project.kind}
              </span>
              <h4 className="text-lg font-bold">{project.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="mt-auto pt-5">
                <ProjectLinks project={project} dark />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Experimentos */}
      {portfolio.experiments.length > 0 && (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
            <FlaskConical size={18} className="text-blue-600" aria-hidden="true" />
            Experimentos
          </h3>
          <div className="space-y-4">
            {portfolio.experiments.map((project) => (
              <article
                key={project.title}
                className="flex flex-col gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold text-slate-800">{project.title}</h4>
                    <span className="rounded-full bg-slate-200/70 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                      {project.kind}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{project.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs text-slate-600"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0">
                  <ProjectLinks project={project} />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
