import { HeroSection } from "@/components/hero/hero-section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { AboutSection } from "@/components/about/about-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { ContactSection } from "@/components/contact/contact-section";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { ConsentBanner } from "@/components/analytics/consent-banner";
import { getFeaturedProjects } from "@/lib/projects";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const { projects } = siteConfig;

  return (
    <>
      <HeroSection />

      <SectionContainer id="proyectos" className="py-20">
        <SectionHeading title={projects.heading} subtitle={projects.intro} />
        <ProjectGrid projects={featuredProjects} />
      </SectionContainer>

      <div className="bg-(--bg)">
        <AboutSection />
      </div>

      <div className="bg-(--surface)">
        <SkillsSection />
      </div>

      <div className="bg-(--bg)">
        <ContactSection />
      </div>

      <ConsentBanner />
    </>
  );
}
