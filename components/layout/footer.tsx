import { Github, Linkedin, Mail, Download } from "lucide-react";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { fullName, githubUrl, linkedinUrl, email, cvUrl, footer } = siteConfig;
  return (
    <footer className="relative border-t border-slate-800 bg-(--hero) py-10 text-slate-200">
      <div className="surface-grid absolute inset-0 opacity-10" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div>
          <p className="text-sm">&copy; {year} {fullName}. {footer.tagline}</p>
          <p className="mt-1 text-xs text-slate-400">{footer.available}</p>
        </div>
        <nav aria-label="Links de redes sociales" className="flex items-center gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="Perfil de GitHub" className="text-slate-400 hover:text-white"><Github size={18} /></a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn" className="text-slate-400 hover:text-white"><Linkedin size={18} /></a>
          <a href={`mailto:${email}`} aria-label="Enviar email" className="text-slate-400 hover:text-white"><Mail size={18} /></a>
          <a href={cvUrl} aria-label="Descargar CV" download className="text-slate-400 hover:text-white"><Download size={18} /></a>
        </nav>
      </div>
    </footer>
  );
}
