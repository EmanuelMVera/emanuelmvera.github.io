import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-black/10 py-6 text-center text-sm text-slate-500 dark:border-white/10">
      © {new Date().getFullYear()} {portfolio.name} · {portfolio.role}
    </footer>
  );
}
