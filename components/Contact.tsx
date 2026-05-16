import { portfolio } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-semibold">Contacto</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Email: <a className="underline" href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
      </p>
      <p className="mt-2 text-sm">
        <a className="underline" href={portfolio.links.github} target="_blank" rel="noreferrer">GitHub</a>
        {" · "}
        <a className="underline" href={portfolio.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </section>
  );
}
