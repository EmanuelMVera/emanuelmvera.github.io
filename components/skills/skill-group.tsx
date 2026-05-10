import { siteConfig } from "@/data/site";
import { SkillChip } from "./skill-chip";

interface SkillGroupProps {
  name: string;
  skills: readonly string[];
}

export function SkillGroup({ name, skills }: SkillGroupProps) {
  return (
    <article className="rounded-2xl border border-(--border) bg-(--surface) p-5 shadow-sm">
      <h3 className="text-sm font-semibold tracking-wide text-(--text) uppercase">{name}</h3>
      <p className="mt-1 text-xs text-(--muted)">{siteConfig.ui.skills.groupDescription}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillChip key={skill} name={skill} />
        ))}
      </div>
    </article>
  );
}
