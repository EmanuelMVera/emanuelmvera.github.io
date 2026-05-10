import Image from "next/image";
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

const imageMeta: Record<string, { src: string; alt: string }> = {
  "app-clima": {
    src: "/images/projects/app-clima/thumb.webp",
    alt: "Vista promocional de la aplicación del clima Buen Tiempo",
  },
  "billetera-virtual": {
    src: "/images/projects/billetera-virtual/thumb.webp",
    alt: "Vista promocional de la aplicación Billetera Virtual",
  },
};

export function FeaturedProjectCard({ project }: { project: Project }) {
  const image = imageMeta[project.slug];
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="h-full w-full bg-slate-100 dark:bg-slate-800" />
        )}
        <div className="absolute top-4 right-4">
          <Badge color={statusColors[project.status]}>{statusLabels[project.status]}</Badge>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-2">
          <Link
            href={`/projects/${project.slug}`}
            className="text-2xl font-bold tracking-tight text-(--text) hover:text-(--accent)"
          >
            {project.title}
          </Link>
          {project.subtitle && (
            <p className="mt-1 text-sm font-medium text-(--accent)">{project.subtitle}</p>
          )}
        </div>
        <p className="mb-4 text-sm leading-relaxed text-(--muted)">{project.description}</p>
        <ProjectTechChips tech={project.tech} />
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <ProjectLinks demoUrl={project.demoUrl} repoUrl={project.repoUrl} />
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-(--muted) hover:text-(--accent)"
          >
            Ver detalle{" "}
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
