import Image from "next/image";
import { ArrowRight, Code2 } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ScrollReveal } from "@/components/ScrollReveal";

function badgeClass(variant: string) {
  if (variant === "violet") return "bg-violet-100 text-violet-700";
  if (variant === "blue") return "bg-blue-100 text-blue-700";
  return "bg-slate-100 text-slate-600";
}

function wipBorderClass(variant: string) {
  if (variant === "violet") return "border-t-2 border-t-violet-400";
  if (variant === "blue") return "border-t-2 border-t-blue-400";
  return "border-t-2 border-t-cyan-400";
}

export function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16">
      {/* Section header */}
      <ScrollReveal>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-slate-900">Proyectos destacados</h2>
          </div>
          <a
            href="#proyectos"
            className="hidden text-sm font-medium text-blue-600 hover:underline sm:block"
          >
            Ver todos los proyectos →
          </a>
        </div>
      </ScrollReveal>

      {/* Featured project cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.projects.map((project, index) => (
          <ScrollReveal key={project.title} delay={index * 150}>
            <article className="group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-blue-500/30">
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/30 to-transparent" />
                <span className="absolute left-3 top-3 z-10 select-none font-mono text-xs font-bold text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="bg-[#0D1117] p-5 text-white">
                <span className="mb-1.5 inline-block text-[11px] font-medium uppercase tracking-widest text-slate-500">
                  Proyecto personal
                </span>
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
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
                <a
                  href={project.link}
                  className="group/link mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
                >
                  Ver proyecto
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>

      {/* In development */}
      <ScrollReveal className="mt-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {/* Section intro */}
          <div className="mb-5 flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
              <Code2 size={20} className="text-blue-600" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">En desarrollo</h3>
              <p className="mt-0.5 text-sm text-slate-500">
                Actualmente estoy trabajando en nuevos proyectos para seguir sumando experiencia
                práctica y resolver problemas reales.
              </p>
            </div>
          </div>

          {/* WIP project cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.wip.map((wip, index) => (
              <ScrollReveal key={wip.title} delay={index * 100}>
                <div
                  className={`rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${wipBorderClass(wip.badgeVariant)}`}
                >
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold leading-snug text-slate-800">
                      {wip.title}
                    </h4>
                    <span
                      className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeClass(wip.badgeVariant)}`}
                    >
                      {wip.badge}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-500">{wip.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {wip.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs text-slate-600"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
