import { cn } from "@/lib/cn";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-(--border) bg-(--bg)",
        "px-2 py-0.5 font-mono text-xs text-(--muted)",
        className
      )}
    >
      {children}
    </span>
  );
}
