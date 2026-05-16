import { portfolio } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-semibold">Sobre mí</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300">{portfolio.about}</p>
    </section>
  );
}
