import { Mail } from "lucide-react";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                EV
              </div>
              <div>
                <p className="font-semibold text-white">{portfolio.name}</p>
                <p className="text-xs text-blue-400">{portfolio.role}</p>
              </div>
            </div>
          </div>

          <nav aria-label="Secciones" className="flex flex-wrap justify-center gap-6 text-sm text-slate-400 md:justify-end">
            <Link href="/#proyectos" className="transition-colors hover:text-white">
              Proyectos
            </Link>
            <Link href="/#sobre-mi" className="transition-colors hover:text-white">
              Sobre mí
            </Link>
            <Link href="/#skills" className="transition-colors hover:text-white">
              Skills
            </Link>
            <Link href="/#contacto" className="transition-colors hover:text-white">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={portfolio.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (abre en una pestaña nueva)"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all hover:border-slate-500 hover:text-white"
            >
              <GithubIcon />
            </a>
            <a
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (abre en una pestaña nueva)"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all hover:border-slate-500 hover:text-white"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${portfolio.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all hover:border-slate-500 hover:text-white"
            >
              <Mail size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © 2026 {portfolio.name} · Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
