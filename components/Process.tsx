import { CheckCircle2, Code2, PenTool, Search } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";

const STEP_ICONS: Record<string, React.ReactNode> = {
  analyze: <Search size={18} className="text-blue-600" aria-hidden="true" />,
  design: <PenTool size={18} className="text-blue-600" aria-hidden="true" />,
  develop: <Code2 size={18} className="text-blue-600" aria-hidden="true" />,
  validate: <CheckCircle2 size={18} className="text-blue-600" aria-hidden="true" />,
};

export function Process() {
  return (
    <section id="como-trabajo" aria-labelledby="como-trabajo-title" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-12">
      <SectionHeading id="como-trabajo-title" subtitle="Del problema a una solución funcional">
        Cómo trabajo
      </SectionHeading>

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.process.map((item, i) => (
          <li key={item.step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                {STEP_ICONS[item.icon]}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                <span className="mr-1.5 text-blue-600">{i + 1}.</span>
                {item.step}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
