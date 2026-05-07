import { SkillChip } from "./skill-chip";

interface SkillGroupProps {
  name: string;
  skills: readonly string[];
}

export function SkillGroup({ name, skills }: SkillGroupProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-(--muted)">{name}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillChip key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
}
