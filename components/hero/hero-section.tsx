import { SectionContainer } from "@/components/layout/section-container";
import { siteConfig } from "@/data/site";
import { HeroCtaGroup } from "./hero-cta-group";
import { HeroMockup } from "./hero-mockup";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <SectionContainer
      as="section"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-label="Presentación"
    >
      <div className="surface-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-6">
          <p className="inline-flex rounded-full border border-(--border) bg-(--surface) px-3 py-1 font-mono text-xs font-semibold text-(--accent)">{hero.eyebrow}</p>
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight text-(--text) sm:text-6xl">{hero.name}</h1>
            <p className="text-lg font-semibold text-(--accent)">Desarrollador Web Junior</p>
          </div>
          <p className="max-w-xl text-lg text-(--text)">Construyo interfaces claras, dashboards y aplicaciones web conectadas a APIs.</p>
          <p className="max-w-xl text-sm leading-relaxed text-(--muted)">{hero.support}</p>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-700 dark:text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" aria-hidden="true" />
            Buscando primera oportunidad
          </div>
          <HeroCtaGroup />
          <div className="flex flex-wrap gap-2" aria-label="Tecnologías principales">
            {hero.techPills.map((tech) => (
              <span key={tech} className="rounded-full border border-(--border) bg-(--surface) px-3 py-1 text-xs font-medium text-(--text) shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <HeroMockup />
      </div>
    </SectionContainer>
  );
}
