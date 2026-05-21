import { Target, BookOpen, Zap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ScrollReveal } from "@/components/ScrollReveal";

function getIcon(name: string) {
  if (name === "target")  return <Target size={18} className="text-blue-600" aria-hidden="true" />;
  if (name === "book")    return <BookOpen size={18} className="text-blue-600" aria-hidden="true" />;
  return                         <Zap size={18} className="text-blue-600" aria-hidden="true" />;
}

export function About() {
  const { about } = portfolio;

  return (
    <div>
      <ScrollReveal>
        <div className="mb-6 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
          <h2 className="text-2xl font-bold text-slate-900">Sobre mí</h2>
        </div>

        <div className="space-y-4 leading-relaxed text-slate-600">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </ScrollReveal>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {about.highlights.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 100}>
            <div
              className={`flex items-start gap-4 p-4 ${
                i < about.highlights.length - 1 ? "border-b border-slate-100" : ""
              }`}
            >
              <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50">
                {getIcon(item.icon)}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {item.label}
                </p>
                <p className="mt-0.5 text-sm font-medium text-slate-700">{item.value}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={300}>
        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/50 p-5">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-700">
            Qué aporto
          </h3>
          <ul className="space-y-2">
            {[
              "Interfaces claras y responsive",
              "Código mantenible y ordenado",
              "Comunicación y aprendizaje constante",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </div>
  );
}
