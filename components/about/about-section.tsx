import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { siteConfig } from "@/data/site";
import { LearningTimeline } from "./learning-timeline";

export function AboutSection() {
  const { about } = siteConfig;

  return (
    <SectionContainer id="sobre-mi" className="py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Texto */}
        <div>
          <SectionHeading title={about.heading} />
          <div className="space-y-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-(--muted)">
                {p}
              </p>
            ))}
          </div>

          {about.education && (
            <p className="mt-6 font-mono text-sm text-(--muted)">{about.education}</p>
          )}
        </div>

        {/* Timeline */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-(--muted)">
            Trayectoria
          </h3>
          <LearningTimeline />
        </div>
      </div>
    </SectionContainer>
  );
}
