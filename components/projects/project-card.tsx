import Link from "next/link";
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

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-(--border) bg-(--surface) transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5">
      {/* Imagen o placeholder visual */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        {project.coverImage && !project.coverImage.includes("{{") ? (
          // next/image con imagen real — TODO(REEMPLAZAR_IMAGEN)
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-xs text-slate-500">{project.title}</span>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2">
            <div className="space-y-1.5 px-6 w-full">
              {[75, 50, 85, 40].map((w, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded-full bg-slate-600/60"
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
            <span className="mt-2 font-mono text-xs text-slate-500">
              {/* TODO: REEMPLAZAR_IMAGEN — agregar coverImage en el MDX */}
              {project.title}
            </span>
          </div>
        )}

        {/* Badge de estado */}
        <div className="absolute right-3 top-3">
          <Badge color={statusColors[project.status]}>{statusLabels[project.status]}</Badge>
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2">
          <Link
            href={`/projects/${project.slug}`}
            className="text-base font-semibold text-(--text) transition-colors hover:text-(--accent)"
          >
            {project.title}
          </Link>
          {project.subtitle && (
            <p className="mt-0.5 text-xs text-(--muted)">{project.subtitle}</p>
          )}
        </div>

        <p className="mb-4 flex-1 text-sm leading-relaxed text-(--muted)">{project.description}</p>

        <div className="space-y-3">
          <ProjectTechChips tech={project.tech} />
          <ProjectLinks demoUrl={project.demoUrl} repoUrl={project.repoUrl} />
        </div>
      </div>
    </article>
  );
}
