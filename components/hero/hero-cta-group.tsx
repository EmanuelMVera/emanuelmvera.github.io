import { ArrowDown, Download, Mail } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

const isPlaceholder = (url: string) => url.includes("{{");

export function HeroCtaGroup() {
  const { cta } = siteConfig.hero;
  const cvReady = !isPlaceholder(cta.secondary.href);

  return (
    <div className="flex flex-wrap gap-3">
      <a href={cta.primary.href} className={buttonClasses({ variant: "primary", size: "lg" })}>
        <ArrowDown size={16} aria-hidden="true" />
        {cta.primary.label}
      </a>

      {cvReady ? (
        <a
          href={cta.secondary.href}
          download
          className={buttonClasses({ variant: "secondary", size: "lg" })}
        >
          <Download size={16} aria-hidden="true" />
          {cta.secondary.label}
        </a>
      ) : (
        <span
          className={buttonClasses({
            variant: "secondary",
            size: "lg",
            className: "cursor-not-allowed opacity-50",
          })}
          title="CV próximamente disponible"
          aria-disabled="true"
        >
          <Download size={16} aria-hidden="true" />
          {cta.secondary.label}
        </span>
      )}

      <a href={cta.tertiary.href} className={buttonClasses({ variant: "ghost", size: "lg" })}>
        <Mail size={16} aria-hidden="true" />
        {cta.tertiary.label}
      </a>
    </div>
  );
}
