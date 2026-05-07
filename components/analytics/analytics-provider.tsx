"use client";

import { useEffect } from "react";
import { ANALYTICS_CONSENT_KEY } from "@/lib/constants";

// TODO: Reemplazar con el proveedor de analytics elegido (Vercel Analytics, Plausible, etc.)
// Carga analytics solo si el usuario dio su consentimiento.
export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const consent = localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (consent === "accepted") {
      // TODO: inicializar analytics aquí
      // Ejemplo con Vercel Analytics:
      // import { inject } from "@vercel/analytics"; inject();
    }
  }, []);

  return <>{children}</>;
}
