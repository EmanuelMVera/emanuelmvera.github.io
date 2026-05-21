import {
  MonitorSmartphone,
  Server,
  Database,
  Bot,
  Gamepad2,
  Wrench,
  BrainCircuit,
  Sparkles,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ScrollReveal } from "@/components/ScrollReveal";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  frontend: <MonitorSmartphone size={20} className="text-blue-600" aria-hidden="true" />,
  backend:  <Server size={20} className="text-cyan-600" aria-hidden="true" />,
  database: <Database size={20} className="text-purple-500" aria-hidden="true" />,
  realtime: <Bot size={20} className="text-green-500" aria-hidden="true" />,
  gamedev:  <Gamepad2 size={20} className="text-rose-500" aria-hidden="true" />,
  tools:    <Wrench size={20} className="text-amber-500" aria-hidden="true" />,
  concepts: <BrainCircuit size={20} className="text-orange-500" aria-hidden="true" />,
  ai:       <Sparkles size={20} className="text-indigo-500" aria-hidden="true" />,
};

const categoryBg: Record<string, string> = {
  frontend: "bg-blue-50",
  backend:  "bg-cyan-50",
  database: "bg-purple-50",
  realtime: "bg-green-50",
  gamedev:  "bg-rose-50",
  tools:    "bg-amber-50",
  concepts: "bg-orange-50",
  ai:       "bg-indigo-50",
};

export function Skills() {
  return (
    <div>
      <ScrollReveal>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-slate-900">Skills</h2>
        </div>
      </ScrollReveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.skillCategories.map((cat, index) => (
          <ScrollReveal key={cat.category} delay={index * 70}>
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
              <div
                className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${
                  categoryBg[cat.icon] ?? "bg-slate-50"
                }`}
              >
                {CATEGORY_ICONS[cat.icon]}
              </div>
              <h3 className="mb-3 font-semibold text-slate-900">{cat.category}</h3>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
