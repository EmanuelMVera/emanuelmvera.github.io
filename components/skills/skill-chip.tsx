import { Chip } from "@/components/ui/chip";
import { siteConfig } from "@/data/site";

const coreSkills = new Set(siteConfig.ui.skills.coreSkills);

const coreSkills = new Set(["React", "Angular", "TypeScript", "Node.js", "PostgreSQL"]);

export function SkillChip({ name }: { name: string }) {
  return (
    <Chip
      className={
        coreSkills.has(name)
          ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-200"
          : ""
      }
    >
      {name}
    </Chip>
  );
}
