"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";

const SECTIONS = ["proyectos", "sobre-mi", "skills", "contacto"] as const;
type SectionId = (typeof SECTIONS)[number];

const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: "proyectos", label: "Proyectos" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "skills", label: "Skills" },
  { id: "contacto", label: "Contacto" },
];

export function Header() {
  const [active, setActive] = useState<SectionId | "">("");

  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-80px 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm">
            EV
          </div>
          <span className="font-semibold text-slate-900">Emanuel M. Vera</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors hover:text-blue-600 ${
                active === id ? "font-semibold text-blue-600" : ""
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="/cv/cv-emanuelmvera.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md md:flex"
        >
          <Download size={14} aria-hidden="true" />
          Descargar CV
        </a>
      </nav>
    </header>
  );
}
