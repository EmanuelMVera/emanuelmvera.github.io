import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { siteConfig } from "@/data/site";
import { LearningTimeline } from "./learning-timeline";

export function AboutSection() {
  const { about } = siteConfig;
  return (
    <SectionContainer id="sobre-mi" className="py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading title={about.heading} />
          <div className="space-y-4">{about.paragraphs.map((p, i) => <p key={i} className="leading-relaxed text-(--muted)">{p}</p>)}</div>
          <p className="mt-5 rounded-xl border border-(--border) bg-(--surface) px-4 py-3 text-sm font-medium text-(--text)">Objetivo actual: conseguir mi primera oportunidad como desarrollador web junior.</p>
          {about.education && <p className="mt-4 text-sm text-(--muted)">{about.education}</p>}
        </div>
        <div className="rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm"><h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-(--muted)">Trayectoria</h3><LearningTimeline /></div>
      </div>
    </SectionContainer>
  );
}
