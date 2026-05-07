import { SectionContainer } from "@/components/layout/section-container";
import { siteConfig } from "@/data/site";
import { HeroCtaGroup } from "./hero-cta-group";
import { HeroMockup } from "./hero-mockup";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <SectionContainer
      as="section"
      className="flex min-h-[calc(100dvh-3.5rem)] items-center py-20"
      aria-label="Presentación"
    >
      <div className="flex w-full items-center justify-between gap-12">
        {/* Texto */}
        <div className="max-w-xl space-y-6">
          {/* Eyebrow */}
          <p className="font-mono text-sm font-medium text-(--accent)">{hero.eyebrow}</p>

          {/* Nombre y rol */}
          <div className="space-y-2">
            <h1 className="text-5xl font-bold tracking-tight text-(--text) sm:text-6xl">
              {hero.name}
            </h1>
            <p className="text-xl font-medium text-(--muted)">{hero.role}</p>
          </div>

          {/* Tagline */}
          <p className="text-lg leading-relaxed text-(--muted)">{hero.tagline}</p>

          {/* Disponibilidad */}
          <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-3 py-1.5">
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-green-500"
              aria-hidden="true"
            />
            <span className="text-xs text-(--muted)">{hero.availability}</span>
          </div>

          {/* CTAs */}
          <HeroCtaGroup />

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5" aria-label="Tecnologías principales">
            {hero.techPills.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-(--border) bg-(--bg) px-2.5 py-0.5 font-mono text-xs text-(--muted)"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Mockup decorativo */}
        <HeroMockup />
      </div>
    </SectionContainer>
  );
}
