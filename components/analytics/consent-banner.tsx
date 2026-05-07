"use client";

import { useState } from "react";
import { ANALYTICS_CONSENT_KEY } from "@/lib/constants";

export function ConsentBanner() {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !localStorage.getItem(ANALYTICS_CONSENT_KEY)
  );

  function accept() {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Preferencias de privacidad"
      className="fixed right-4 bottom-4 left-4 z-50 mx-auto max-w-lg rounded-xl border border-(--border) bg-(--surface) p-5 shadow-2xl shadow-black/10 sm:right-6 sm:left-auto sm:w-[420px]"
    >
      <h2 className="mb-2 text-sm font-semibold text-(--text)">Preferencias de privacidad</h2>
      <p className="mb-4 text-xs leading-relaxed text-(--muted)">
        Quiero usar analítica básica para entender qué secciones del portafolio reciben más visitas
        y así mejorar la experiencia. No utilizo estos datos para publicidad ni los vendo a
        terceros.
      </p>
      <div className="flex gap-2">
        <button
          onClick={accept}
          className="flex-1 rounded-lg bg-(--accent) px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:outline-none"
        >
          Aceptar
        </button>
        <button
          onClick={reject}
          className="flex-1 rounded-lg border border-(--border) px-3 py-2 text-xs font-medium text-(--text) transition-colors hover:bg-(--bg) focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:outline-none"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
