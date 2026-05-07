import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Project } from "@/types/project";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(slug: string): Project | null {
  const fullPath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title ?? slug,
    subtitle: data.subtitle ?? "",
    description: data.description ?? "",
    tech: data.tech ?? [],
    category: data.category ?? "frontend",
    status: data.status ?? "wip",
    featured: data.featured ?? false,
    order: data.order ?? 99,
    demoUrl: data.demoUrl,
    repoUrl: data.repoUrl,
    coverImage: data.coverImage,
    coverImageAlt: data.coverImageAlt,
    gallery: data.gallery,
    publishedAt: data.publishedAt ?? new Date().toISOString(),
  } satisfies Project;
}

export function getAllProjects(): Project[] {
  return getProjectSlugs()
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== null)
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}
