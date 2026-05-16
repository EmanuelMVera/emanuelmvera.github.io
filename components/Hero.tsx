import { portfolio } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-sm text-slate-500">Portfolio personal</p>
      <h1 className="mt-2 text-4xl font-bold">{portfolio.hero.title}</h1>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{portfolio.hero.subtitle}</p>
    </section>
  );
}
