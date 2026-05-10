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
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="grid gap-4 p-5 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
          <div className="absolute top-3 right-3">
            <Badge color={statusColors[project.status]}>{statusLabels[project.status]}</Badge>
          </div>
          <div className="flex h-full items-center justify-center">
            <span className="rounded-full border border-slate-300 bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300">
              En construcción
            </span>
          </div>
        </div>
        <div>
          <Link
            href={`/projects/${project.slug}`}
            className="text-xl font-bold text-(--text) hover:text-(--accent)"
          >
            {project.title}
          </Link>
          {project.subtitle && (
            <p className="mt-1 text-sm font-medium text-(--accent)">{project.subtitle}</p>
          )}
          <p className="mt-2 text-sm leading-relaxed text-(--muted)">{project.description}</p>
          <div className="mt-4 space-y-3">
            <ProjectTechChips tech={project.tech} />
            <ProjectLinks demoUrl={project.demoUrl} repoUrl={project.repoUrl} />
          </div>
        </div>
      </div>
    </article>
  );
}
