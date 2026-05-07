import { Github, Linkedin, Mail, Download } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { fullName, githubUrl, linkedinUrl, email, cvUrl, footer } = siteConfig;

  return (
    <footer className="border-t border-(--border) bg-(--surface) py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm text-(--muted)">
              &copy; {year} {fullName}. {footer.tagline}
            </p>
            <p className="text-xs text-(--muted)">{footer.available}</p>
          </div>

          <nav aria-label="Links de redes sociales" className="flex items-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub"
              className="text-(--muted) transition-colors hover:text-(--text)"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn"
              className="text-(--muted) transition-colors hover:text-(--text)"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${email}`}
              aria-label="Enviar email"
              className="text-(--muted) transition-colors hover:text-(--text)"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
            <a
              href={cvUrl}
              aria-label="Descargar CV"
              download
              className="text-(--muted) transition-colors hover:text-(--text)"
            >
              <Download size={18} aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
