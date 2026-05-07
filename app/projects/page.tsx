import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { ProjectGrid } from "@/components/projects/project-grid";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Proyectos",
  description: `Todos los proyectos de ${siteConfig.fullName}`,
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <SectionContainer className="py-20">
      <SectionHeading
        title="Todos los proyectos"
        subtitle="Mi proceso de aprendizaje en interfaces reales."
      />
      <ProjectGrid projects={projects} />
    </SectionContainer>
  );
}
