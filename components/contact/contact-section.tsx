import { Mail, Linkedin, Github } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";
import { SectionHeading } from "@/components/layout/section-heading";
import { siteConfig } from "@/data/site";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  const { contact, email, githubUrl, linkedinUrl } = siteConfig;

  return (
    <SectionContainer id="contacto" className="py-20">
      <div className="grid gap-12 lg:grid-cols-5">
        {/* Info lateral */}
        <div className="lg:col-span-2">
          <SectionHeading title={contact.heading} />
          <p className="mb-8 leading-relaxed text-(--muted)">{contact.intro}</p>

          <nav aria-label="Formas de contacto" className="space-y-3">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-sm text-(--muted) transition-colors hover:text-(--text)"
            >
              <Mail size={16} aria-hidden="true" className="shrink-0 text-(--accent)" />
              {email}
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-(--muted) transition-colors hover:text-(--text)"
            >
              <Linkedin size={16} aria-hidden="true" className="shrink-0 text-(--accent)" />
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-(--muted) transition-colors hover:text-(--text)"
            >
              <Github size={16} aria-hidden="true" className="shrink-0 text-(--accent)" />
              GitHub
            </a>
          </nav>
        </div>

        {/* Formulario */}
        <div className="lg:col-span-3">
          <ContactForm />
          <p className="mt-4 text-xs text-(--muted)">{contact.privacy}</p>
        </div>
      </div>
    </SectionContainer>
  );
}
