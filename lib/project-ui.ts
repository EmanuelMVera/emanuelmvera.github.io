import { siteConfig } from "@/data/site";
import type { ProjectStatus } from "@/types/project";

export const projectStatusLabels = siteConfig.ui.projectStatusLabels as Record<
  ProjectStatus,
  string
>;

export const projectStatusColors: Record<ProjectStatus, "green" | "orange" | "default" | "blue"> = {
  live: "green",
  wip: "orange",
  archived: "default",
  "coming-soon": "blue",
};

export const projectImageMeta = siteConfig.ui.projects.imageMeta as Record<
  string,
  { src: string; alt: string }
>;
