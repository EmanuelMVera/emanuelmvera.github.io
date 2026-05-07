import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type SectionContainerProps = HTMLAttributes<HTMLElement> & {
  as?: "section" | "div" | "article" | "aside";
};

export function SectionContainer({
  children,
  className,
  id,
  as: Component = "section",
  ...props
}: SectionContainerProps) {
  return (
    <Component
      id={id}
      className={cn("mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
