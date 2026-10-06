import {
  MonitorSmartphone,
  Server,
  Database,
  FlaskConical,
  ShieldCheck,
  Rocket,
  Wrench,
  Puzzle,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  frontend: <MonitorSmartphone size={20} className="text-blue-600" aria-hidden="true" />,
  backend:  <Server size={20} className="text-cyan-600" aria-hidden="true" />,
  database: <Database size={20} className="text-purple-500" aria-hidden="true" />,
  testing:  <FlaskConical size={20} className="text-green-600" aria-hidden="true" />,
  security: <ShieldCheck size={20} className="text-rose-500" aria-hidden="true" />,
  deploy:   <Rocket size={20} className="text-indigo-500" aria-hidden="true" />,
  tools:    <Wrench size={20} className="text-amber-500" aria-hidden="true" />,
  other:    <Puzzle size={20} className="text-slate-500" aria-hidden="true" />,
};

const categoryBg: Record<string, string> = {
  frontend: "bg-blue-50",
  backend:  "bg-cyan-50",
  database: "bg-purple-50",
  testing:  "bg-green-50",
  security: "bg-rose-50",
  deploy:   "bg-indigo-50",
  tools:    "bg-amber-50",
  other:    "bg-slate-100",
};

export function Skills() {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-slate-900">Skills</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {portfolio.skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  categoryBg[cat.icon] ?? "bg-slate-50"
                }`}
              >
                {CATEGORY_ICONS[cat.icon]}
              </div>
              <h3 className="font-semibold text-slate-900">{cat.category}</h3>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
