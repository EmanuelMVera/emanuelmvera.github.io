import { Target, BookOpen, FolderKanban } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

function getIcon(name: string) {
  if (name === "target") return <Target size={18} className="text-blue-600" aria-hidden="true" />;
  if (name === "book")   return <BookOpen size={18} className="text-blue-600" aria-hidden="true" />;
  return                        <FolderKanban size={18} className="text-blue-600" aria-hidden="true" />;
}

export function About() {
  const { about, strengths } = portfolio;

  return (
    <section id="sobre-mi" aria-labelledby="sobre-mi-title" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeading id="sobre-mi-title">Sobre mí</SectionHeading>

          <div className="space-y-4 leading-relaxed text-slate-600">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {about.highlights.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-start gap-4 p-4 ${
                  i < about.highlights.length - 1 ? "border-b border-slate-100" : ""
                }`}
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  {getIcon(item.icon)}
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="mt-0.5 text-sm font-medium text-slate-700">{item.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:pt-12">
          <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">
              Fortalezas profesionales
            </h3>
            <ul className="mt-4 space-y-4">
              {strengths.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
