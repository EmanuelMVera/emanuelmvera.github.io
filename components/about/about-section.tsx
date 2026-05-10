import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { siteConfig } from "@/data/site";
import { LearningTimeline } from "./learning-timeline";

const highlights = [
  { title: "Frontend", detail: "React · Angular · TypeScript" },
  { title: "Backend", detail: "Node.js · Express · PostgreSQL" },
  { title: "Objetivo", detail: "Primera oportunidad junior" },
];

export function AboutSection() {
  const { about } = siteConfig;
  return (
    <SectionContainer id="sobre-mi" className="py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading title={about.heading} />
          <div className="space-y-4">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-(--muted)">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-5 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
            Objetivo actual: conseguir mi primera oportunidad como desarrollador web junior.
          </p>
          {about.education && <p className="mt-4 text-sm text-(--muted)">{about.education}</p>}
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-(--border) bg-(--surface) p-5 shadow-sm">
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-(--muted) uppercase">
              Trayectoria
            </h3>
            <LearningTimeline />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-(--border) bg-(--surface) p-3 text-center"
              >
                <p className="text-xs font-semibold tracking-wide text-(--muted) uppercase">
                  {item.title}
                </p>
                <p className="mt-1 text-xs text-(--text)">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-(--border) bg-(--surface) p-6 shadow-sm"><h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-(--muted)">Trayectoria</h3><LearningTimeline /></div>
      </div>
    </SectionContainer>
  );
}
