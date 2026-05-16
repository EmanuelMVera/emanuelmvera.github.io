import { portfolio } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {portfolio.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-black/10 px-3 py-1 text-sm dark:border-white/20">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
