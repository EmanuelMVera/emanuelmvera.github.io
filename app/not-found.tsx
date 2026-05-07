import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { SectionContainer } from "@/components/layout/section-container";

export default function NotFound() {
  return (
    <SectionContainer
      as="div"
      className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center"
    >
      <p className="font-mono text-6xl font-bold text-(--accent)">404</p>
      <h1 className="text-2xl font-semibold text-(--text)">Página no encontrada</h1>
      <p className="text-(--muted)">El contenido que buscas no existe o fue movido.</p>
      <Link href="/" className={buttonClasses({ variant: "primary", size: "lg" })}>
        Volver al inicio
      </Link>
    </SectionContainer>
  );
}
