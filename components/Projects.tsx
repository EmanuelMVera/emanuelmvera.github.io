import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-slate-900">Proyectos destacados</h2>
        </div>
        <a
          href="#projects"
          className="hidden text-sm font-medium text-blue-600 hover:underline sm:block"
        >
          Ver todos los proyectos →
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {portfolio.projects.map((project) => (
          <article
            key={project.title}
            className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-1 hover:ring-blue-200"
          >
            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={`Captura de pantalla del proyecto ${project.title}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-100"
              >
                Ver proyecto →
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* In development */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex items-start gap-4 md:w-60 md:flex-shrink-0">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50">
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
              <p className="mt-1 text-sm text-slate-500">
                2 proyectos nuevos en camino. Muy pronto compartiré más detalles.
              </p>
            </div>
          </div>

          <div className="hidden h-16 w-px bg-slate-100 md:block" aria-hidden="true" />

          <div className="flex flex-1 flex-col gap-3 sm:flex-row">
            {portfolio.wip.map((wip) => (
              <div
                key={wip.title}
                className="flex-1 rounded-xl border border-slate-100 bg-slate-50 p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-slate-800">{wip.title}</h4>
                  <span className="flex-shrink-0 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                    Próximamente
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-slate-500">{wip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
