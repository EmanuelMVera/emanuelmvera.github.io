import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectTechChips } from "./project-tech-chips";
import { ProjectLinks } from "./project-links";
import type { Project, ProjectStatus } from "@/types/project";

const statusLabels: Record<ProjectStatus, string> = {
  live: "En vivo",
  wip: "En progreso",
  archived: "Archivado",
  "coming-soon": "Próximamente",
};

const statusColors: Record<ProjectStatus, "green" | "orange" | "default" | "blue"> = {
  live: "green",
  wip: "orange",
  archived: "default",
  "coming-soon": "blue",
};

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-(--border) bg-(--surface) transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 md:flex-row">
      {/* Imagen / mockup */}
      <div className="relative min-h-[200px] w-full overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-(--hero) md:w-2/5 md:min-h-0">
        <div className="flex h-full flex-col items-center justify-center gap-3 p-6">
          <div className="w-full space-y-2">
            {[80, 55, 90, 45, 70].map((w, i) => (
              <div
                key={i}
                className="h-2 rounded-full bg-slate-600/50"
                style={{ width: `${w}%` }}
              />
            ))}
          </div>
          <span className="font-mono text-xs text-slate-500">
            {/* TODO: REEMPLAZAR_IMAGEN */}
            {project.title}
          </span>
        </div>

        <div className="absolute right-3 top-3">
          <Badge color={statusColors[project.status]}>{statusLabels[project.status]}</Badge>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-3">
            <Link
              href={`/projects/${project.slug}`}
              className="text-xl font-bold text-(--text) transition-colors hover:text-(--accent)"
            >
              {project.title}
            </Link>
            {project.subtitle && (
              <p className="mt-1 text-sm font-medium text-(--accent)">{project.subtitle}</p>
            )}
          </div>

          <p className="mb-4 text-sm leading-relaxed text-(--muted)">{project.description}</p>

          <ProjectTechChips tech={project.tech} />
        </div>

        <div className="mt-5 flex items-center justify-between">
          <ProjectLinks demoUrl={project.demoUrl} repoUrl={project.repoUrl} />
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-(--muted) transition-colors hover:text-(--accent)"
          >
            Ver detalle
            <ArrowRight size={14} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
