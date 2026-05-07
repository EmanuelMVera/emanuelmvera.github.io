"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/data/site";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cerrar con Escape
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        role="dialog"
        aria-modal="true"
        aria-label="Navegación móvil"
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-72 bg-(--surface) shadow-2xl transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-(--border) p-5">
          <span className="font-semibold text-(--text)">Menú</span>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Cerrar menú"
            className="rounded-md p-2 text-(--muted) hover:text-(--text) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <ul className="space-y-1 p-5">
          {siteConfig.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={onClose}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-(--text) transition-colors hover:bg-(--bg) hover:text-(--accent)"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-8 left-0 right-0 px-5">
          <a
            href={siteConfig.cvUrl}
            onClick={onClose}
            className="block w-full rounded-lg bg-(--accent) px-4 py-2.5 text-center text-sm font-medium text-white transition-opacity hover:opacity-90"
            download
          >
            Descargar CV
          </a>
        </div>
      </nav>
    </>
  );
}
