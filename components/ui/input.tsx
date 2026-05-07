import { cn } from "@/lib/cn";
import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  id: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-(--text)">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn(
            "block w-full rounded-lg border border-(--border) bg-(--surface)",
            "px-3 py-2.5 text-sm text-(--text) placeholder:text-(--muted)",
            "transition-colors duration-150",
            "focus-visible:border-(--accent) focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-(--accent)",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} role="alert" className="text-xs text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";
