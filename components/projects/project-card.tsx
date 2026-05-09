import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ProjectTechChips } from "./project-tech-chips";
import { ProjectLinks } from "./project-links";
import type { Project, ProjectStatus } from "@/types/project";

const statusLabels: Record<ProjectStatus, string> = { live: "En vivo", wip: "En progreso", archived: "Archivado", "coming-soon": "Próximamente" };
const statusColors: Record<ProjectStatus, "green" | "orange" | "default" | "blue"> = { live: "green", wip: "orange", archived: "default", "coming-soon": "blue" };

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="grid gap-4 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div className="relative rounded-xl border border-slate-700/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5">
          <div className="absolute right-3 top-3"><Badge color={statusColors[project.status]}>{statusLabels[project.status]}</Badge></div>
          <div className="space-y-2">
            <div className="h-3 w-1/2 rounded bg-slate-600/70" />
            <div className="h-16 rounded-lg border border-slate-700 bg-slate-800/90" />
            <div className="grid grid-cols-3 gap-2">{[1, 2, 3].map((i) => <div key={i} className="h-9 rounded bg-slate-700/80" />)}</div>
          </div>
          <p className="mt-3 text-xs text-slate-400">En construcción</p>
        </div>
        <div>
          <Link href={`/projects/${project.slug}`} className="text-xl font-bold text-(--text) hover:text-(--accent)">{project.title}</Link>
          {project.subtitle && <p className="mt-1 text-sm font-medium text-(--accent)">{project.subtitle}</p>}
          <p className="mt-2 text-sm text-(--muted)">{project.description}</p>
          <div className="mt-4 space-y-3"><ProjectTechChips tech={project.tech} /><ProjectLinks demoUrl={project.demoUrl} repoUrl={project.repoUrl} /></div>
        </div>
      </div>
    </article>
  );
}
