export type ProjectStatus = "live" | "wip" | "archived" | "coming-soon";
export type ProjectCategory = "frontend" | "fullstack" | "backend" | "tool";

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  order: number;
  demoUrl?: string;
  repoUrl?: string;
  coverImage?: string;
  coverImageAlt?: string;
  gallery?: ProjectImage[];
  publishedAt: string;
  content?: string;
}
