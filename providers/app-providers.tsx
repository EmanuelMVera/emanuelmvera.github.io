"use client";

// Wrapper de providers del lado del cliente.
// Agregar aquí: QueryClientProvider, ThemeProvider externo, etc.
export function AppProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
