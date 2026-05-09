import { Mail, Linkedin, Github } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { siteConfig } from "@/data/site";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  const { contact, email, githubUrl, linkedinUrl } = siteConfig;
  return (
    <SectionContainer id="contacto" className="py-16 sm:py-20">
      <div className="rounded-3xl border border-(--border) bg-(--surface) p-6 shadow-sm sm:p-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title={contact.heading} />
            <p className="mb-6 text-(--muted)">{contact.intro}</p>
            <p className="mb-6 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">Disponible para oportunidades junior, prácticas o proyectos donde pueda seguir creciendo.</p>
            <nav aria-label="Formas de contacto" className="space-y-3">
              <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-(--muted) hover:text-(--text)"><Mail size={16} className="text-(--accent)" />{email}</a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-(--muted) hover:text-(--text)"><Linkedin size={16} className="text-(--accent)" />LinkedIn</a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-(--muted) hover:text-(--text)"><Github size={16} className="text-(--accent)" />GitHub</a>
            </nav>
          </div>
          <div><ContactForm /><p className="mt-4 text-xs text-(--muted)">{contact.privacy}</p></div>
        </div>
      </div>
    </SectionContainer>
  );
}
