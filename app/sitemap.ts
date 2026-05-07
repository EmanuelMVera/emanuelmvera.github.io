import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getProjectSlugs } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const { siteUrl } = siteConfig;
  const slugs = getProjectSlugs();

  const projectUrls: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...projectUrls,
  ];
}
