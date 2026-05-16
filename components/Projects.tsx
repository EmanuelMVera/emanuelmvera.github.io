import { portfolio } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-semibold">Proyectos</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {portfolio.projects.map((project) => (
          <article key={project.title} className="rounded-xl border border-black/10 p-5 dark:border-white/10">
            <div className="h-36 rounded-lg bg-slate-100 dark:bg-slate-800" />
            <h3 className="mt-4 font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
            <a className="mt-3 inline-block text-sm underline" href={project.repo} target="_blank" rel="noreferrer">Código</a>
          </article>
        ))}
      </div>
    </section>
  );
}
