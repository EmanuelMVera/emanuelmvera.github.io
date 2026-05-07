import { cn } from "@/lib/cn";

const colors = {
  default: "bg-(--bg) text-(--muted) border border-(--border)",
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  purple: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  green: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  orange: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
} as const;

interface BadgeProps {
  children: React.ReactNode;
  color?: keyof typeof colors;
  className?: string;
}

export function Badge({ children, color = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        colors[color],
        className
      )}
    >
      {children}
    </span>
  );
}
