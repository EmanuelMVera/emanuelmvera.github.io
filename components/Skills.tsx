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
import { SectionHeading } from "@/components/SectionHeading";

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

const primary = new Set<string>(portfolio.primarySkills);

function PrimaryDot() {
  return <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />;
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-12">
      <SectionHeading id="skills-title">Skills</SectionHeading>

      {/* Tecnologías principales: las que más uso; el resto son complementarias. */}
      <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Tecnologías principales
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {portfolio.primarySkills.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-slate-800 shadow-sm"
            >
              <PrimaryDot />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-slate-500">
          En cada categoría, las principales aparecen marcadas con un punto azul; el resto son
          complementarias.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              {cat.items.map((item) =>
                primary.has(item) ? (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-800"
                  >
                    <PrimaryDot />
                    {item}
                    <span className="sr-only"> (principal)</span>
                  </li>
                ) : (
                  <li
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
