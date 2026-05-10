import { FeaturedProjectCard } from "./featured-project-card";
import { ProjectCard } from "./project-card";
import type { Project } from "@/types/project";

interface ProjectGridProps { projects: Project[]; }

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) return <p className="text-center text-(--muted)">No hay proyectos disponibles todavía.</p>;
  const featured = projects.filter((p) => p.featured && p.status !== "coming-soon").slice(0, 2);
  const rest = projects.filter((p) => !featured.includes(p));

  return (
    <div className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-2">{featured.map((p) => <FeaturedProjectCard key={p.slug} project={p} />)}</div>
      {rest.length > 0 && <div className="grid gap-6">{rest.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>}
    </div>
  );
}
