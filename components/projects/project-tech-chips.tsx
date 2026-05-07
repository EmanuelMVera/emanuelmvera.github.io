import { Chip } from "@/components/ui/chip";

export function ProjectTechChips({ tech }: { tech: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {tech.map((t) => (
        <Chip key={t}>{t}</Chip>
      ))}
    </div>
  );
}
