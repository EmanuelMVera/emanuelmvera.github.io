import { ExternalLink, Github } from "lucide-react";

const isPlaceholder = (url?: string) => !url || url.includes("{{");

interface ProjectLinksProps {
  demoUrl?: string;
  repoUrl?: string;
}

export function ProjectLinks({ demoUrl, repoUrl }: ProjectLinksProps) {
  const hasDemo = !isPlaceholder(demoUrl);
  const hasRepo = !isPlaceholder(repoUrl);

  if (!hasDemo && !hasRepo) return null;

  return (
    <div className="flex items-center gap-4">
      {hasDemo && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-(--accent) transition-colors hover:underline"
        >
          <ExternalLink size={14} aria-hidden="true" />
          Demo
        </a>
      )}
      {hasRepo && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-(--muted) transition-colors hover:text-(--text)"
        >
          <Github size={14} aria-hidden="true" />
          Código
        </a>
      )}
    </div>
  );
}
