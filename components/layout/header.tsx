"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Download } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const { fullName, nav, cvUrl } = siteConfig;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full border-b border-(--border) transition-shadow duration-200",
          scrolled
            ? "bg-(--surface)/95 shadow-sm backdrop-blur-sm"
            : "bg-(--surface)/80 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-semibold text-(--text) transition-colors hover:text-(--accent)"
          >
            {fullName}
          </Link>

          {/* Navegación desktop */}
          <nav aria-label="Navegación principal" className="hidden items-center gap-6 md:flex">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-(--muted) transition-colors hover:text-(--text)"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Acciones */}
          <div className="flex items-center gap-1">
            <ThemeToggle />

            {/* CTA descargar CV - solo desktop */}
            <a
              href={cvUrl}
              download
              className="hidden items-center gap-1.5 rounded-lg border border-(--border) px-3 py-1.5 text-xs font-medium text-(--text) transition-all hover:-translate-y-0.5 hover:shadow-sm md:inline-flex"
              aria-label="Descargar CV"
            >
              <Download size={13} aria-hidden="true" />
              CV
            </a>

            {/* Botón hamburguesa - solo mobile */}
            <button
              className="rounded-md p-2 text-(--muted) hover:text-(--text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) md:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú de navegación"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <Menu size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
