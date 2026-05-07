import { CheckCircle, AlertCircle } from "lucide-react";

interface ContactStatusProps {
  status: "success" | "error";
  message: string;
}

export function ContactStatus({ status, message }: ContactStatusProps) {
  const isSuccess = status === "success";

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`flex items-start gap-3 rounded-xl border p-4 ${
        isSuccess
          ? "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950/30 dark:text-green-300"
          : "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300"
      }`}
    >
      {isSuccess ? (
        <CheckCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
      ) : (
        <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
      )}
      <p className="text-sm">{message}</p>
    </div>
  );
}
