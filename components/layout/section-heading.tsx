import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, className, centered }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 space-y-2", centered && "text-center", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-(--text) sm:text-4xl">{title}</h2>
      {subtitle && <p className="text-base text-(--muted)">{subtitle}</p>}
    </div>
  );
}
