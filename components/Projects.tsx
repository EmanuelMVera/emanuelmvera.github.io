import Image from "next/image";
import { portfolio } from "@/data/portfolio";

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

      {/* Featured project cards — split layout for guaranteed legibility */}
      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.projects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-blue-500/30"
          >
            {/* Image — gradient at bottom blends into content section */}
            <div className="relative h-52 overflow-hidden">
              <Image
                src={project.image}
                alt={`Captura de pantalla del proyecto ${project.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/30 to-transparent" />
            </div>

            {/* Content — solid dark background guarantees readability */}
            <div className="bg-[#0D1117] p-5 text-white">
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
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
              >
                Ver proyecto →
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* In development — 3 real projects */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* Section intro */}
        <div className="mb-5 flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
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
          {portfolio.wip.map((wip) => (
            <div
              key={wip.title}
              className={`rounded-xl border border-slate-100 bg-slate-50 p-4 ${wipBorderClass(wip.badgeVariant)}`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
