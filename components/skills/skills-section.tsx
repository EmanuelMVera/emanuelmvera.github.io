import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { siteConfig } from "@/data/site";
import { SkillGroup } from "./skill-group";

export function SkillsSection() {
  const { skills } = siteConfig;

  return (
    <SectionContainer id="habilidades" className="py-20">
      <SectionHeading title={skills.heading} subtitle={skills.intro} />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group) => (
          <SkillGroup key={group.name} name={group.name} skills={group.skills} />
        ))}
      </div>
    </SectionContainer>
  );
}
