import { siteConfig } from "@/data/site";

export function LearningTimeline() {
  const { timeline } = siteConfig.about;

  return (
    <ol aria-label="Trayectoria de aprendizaje" className="relative space-y-4 border-l border-(--border) pl-6">
      {timeline.map((item, i) => (
        <li key={i} className="relative">
          <div
            className="absolute -left-[1.4rem] flex h-5 w-5 items-center justify-center rounded-full bg-(--accent) ring-4 ring-(--bg)"
            aria-hidden="true"
          >
            <span className="h-2 w-2 rounded-full bg-white" />
          </div>
          <p className="text-sm text-(--muted)">{item}</p>
        </li>
      ))}
    </ol>
  );
}
