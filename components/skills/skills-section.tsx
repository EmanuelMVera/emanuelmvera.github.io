import { Code2 } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { siteConfig } from "@/data/site";
import { SkillGroup } from "./skill-group";

export function SkillsSection() {
  const { skills, ui } = siteConfig;

  return (
    <SectionContainer id="habilidades" className="py-16 sm:py-20">
      <SectionHeading title={skills.heading} subtitle={ui.skills.sectionSubtitle} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group) => (
          <SkillGroup key={group.name} name={group.name} skills={group.skills} />
        ))}
      </div>
      <div className="mt-6 inline-flex items-center gap-2 text-sm text-(--muted)">
        <Code2 size={14} />
        {skills.intro}
      </div>
    </SectionContainer>
  );
}
