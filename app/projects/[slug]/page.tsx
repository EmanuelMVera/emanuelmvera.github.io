import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { ProjectTechChips } from "@/components/projects/project-tech-chips";
import { ProjectLinks } from "@/components/projects/project-links";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { SectionContainer } from "@/components/layout/section-container";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/data/site";
import type { ProjectStatus } from "@/types/project";
import { MDXRemote } from "next-mdx-remote/rsc";

interface Props {
  params: Promise<{ slug: string }>;
}

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${siteConfig.fullName}`,
      description: project.description,
    },
  };
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <SectionContainer as="article" className="py-16">
      {/* Navegación de regreso */}
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-sm text-(--muted) transition-colors hover:text-(--text)"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Volver a proyectos
      </Link>

      {/* Header del proyecto */}
      <header className="mb-10 space-y-4">
        <div className="flex items-start gap-3">
          <h1 className="text-4xl font-bold tracking-tight text-(--text)">{project.title}</h1>
          <Badge color={statusColors[project.status]} className="mt-2 shrink-0">
            {statusLabels[project.status]}
          </Badge>
        </div>
        {project.subtitle && (
          <p className="text-lg font-medium text-(--accent)">{project.subtitle}</p>
        )}
        <p className="text-base leading-relaxed text-(--muted)">{project.description}</p>

        <ProjectTechChips tech={project.tech} />
        <ProjectLinks demoUrl={project.demoUrl} repoUrl={project.repoUrl} />
      </header>

      {/* Galería */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="mb-10">
          <ProjectGallery images={project.gallery} projectTitle={project.title} />
        </div>
      )}

      {/* Contenido MDX */}
      {project.content && (
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <MDXRemote source={project.content} />
        </div>
      )}
    </SectionContainer>
  );
}
