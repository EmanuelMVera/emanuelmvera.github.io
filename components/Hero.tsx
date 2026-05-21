import Image from "next/image";
import { Play, Download } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { FloatingBadges } from "@/components/FloatingBadges";

const techColors: Record<string, string> = {
  React: "#61DAFB",
  Angular: "#DD0031",
  "Node.js": "#339933",
  PostgreSQL: "#336791",
};

export function Hero() {
  const { hero, cvUrl } = portfolio;

  const ctaButtons = (
    <div className="flex flex-wrap justify-center gap-3 md:justify-start">
      <a
        href="#proyectos"
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-blue-700 hover:shadow-[0_8px_25px_rgba(37,99,235,0.35)] active:scale-95"
      >
        <Play size={16} aria-hidden="true" />
        Ver proyectos
      </a>
      <a
        href={cvUrl}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:scale-[1.02] hover:border-blue-200 hover:shadow-md active:scale-95"
      >
        <Download size={16} aria-hidden="true" />
        Descargar CV
      </a>
    </div>
  );

  const descriptionAndChips = (
    <>
      <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-500 md:mx-0">
        {hero.description}
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
        {hero.techChips.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
          >
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: techColors[tech] ?? "#2563EB" }}
              aria-hidden="true"
            />
            {tech}
          </div>
        ))}
      </div>

      <div className="mt-3 flex justify-center md:justify-start">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
          {hero.stackLabel}
        </div>
      </div>
    </>
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:py-16">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8 lg:gap-16">

        {/* ── Block 1: Heading — always visible, text on left desktop ── */}
        <div className="w-full flex-1 text-center md:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 shadow-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" aria-hidden="true" />
            {hero.badge}
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            {hero.firstName}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {hero.lastName}
            </span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-blue-600">{hero.role}</p>

          {/* Desktop: show full content below heading */}
          <div className="hidden md:block">
            <div className="mt-4">{descriptionAndChips}</div>
            <div className="mt-8">{ctaButtons}</div>
          </div>
        </div>

        {/* ── Block 2: Photo — center on mobile (between heading and CTAs), right on desktop ── */}
        <div className="shrink-0">
          {/* Mobile: simple circular photo */}
          <div className="relative mx-auto md:hidden" style={{ width: "200px", height: "200px" }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/60 to-cyan-100/40 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-xl">
              <Image
                src="/images/avatar/mifoto-avatar.png"
                alt="Foto de Emanuel M. Vera"
                fill
                className="object-cover object-top"
                sizes="220px"
                priority
              />
            </div>
          </div>

          {/* Desktop: photo + floating badges */}
          <div
            className="relative hidden md:block"
            style={{ width: "420px", height: "420px" }}
          >
            {/* Glow */}
            <div
              className="absolute rounded-full bg-gradient-to-br from-blue-200/60 via-blue-100/40 to-cyan-100/50 blur-3xl"
              style={{ inset: "20px" }}
              aria-hidden="true"
            />

            {/* Photo */}
            <div
              className="absolute overflow-hidden rounded-full border-4 border-white shadow-2xl"
              style={{ width: "296px", height: "296px", top: "62px", left: "62px" }}
            >
              <Image
                src="/images/avatar/mifoto-avatar.png"
                alt="Foto de Emanuel M. Vera"
                fill
                className="object-cover object-top"
                sizes="296px"
                priority
              />
            </div>

            <FloatingBadges />
          </div>
        </div>

        {/* ── Block 3: Mobile-only bottom content (CTAs + description + chips) ── */}
        <div className="w-full text-center md:hidden">
          {ctaButtons}
          {descriptionAndChips}
        </div>

      </div>
    </section>
  );
}
