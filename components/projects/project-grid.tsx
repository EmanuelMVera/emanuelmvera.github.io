import { FeaturedProjectCard } from "./featured-project-card";
import { ProjectCard } from "./project-card";
import type { Project } from "@/types/project";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="text-center text-(--muted)">No hay proyectos disponibles todavía.</p>
    );
  }

  const featured = projects.filter((p) => p.featured && p.status !== "coming-soon");
  const rest = projects.filter((p) => !featured.includes(p));

  return (
    <div className="space-y-6">
      {/* Featured: 2 columnas en desktop */}
      {featured.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-1">
          {featured.map((p) => (
            <FeaturedProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}

      {/* Rest: grid estándar */}
      {rest.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
