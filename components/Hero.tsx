import Image from "next/image";
import { portfolio } from "@/data/portfolio";

const techColors: Record<string, string> = {
  React: "#61DAFB",
  Angular: "#DD0031",
  "Node.js": "#339933",
  PostgreSQL: "#336791",
};

export function Hero() {
  const { hero, cvUrl } = portfolio;

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-8 lg:gap-16">
        {/* Left: text */}
        <div className="flex-1 text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
            {hero.badge}
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            {hero.firstName}
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {hero.lastName}
            </span>
          </h1>

          <p className="mt-4 text-xl font-semibold text-blue-600">{hero.role}</p>

          <p className="mx-auto mt-4 max-w-md leading-relaxed text-slate-500 md:mx-0">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              Ver proyectos
            </a>
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Descargar CV
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
            {hero.techChips.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: techColors[tech] ?? "#2563EB" }}
                  aria-hidden="true"
                />
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Right: avatar — simple on mobile, with floating badges on desktop */}
        <div className="flex-shrink-0">
          {/* Mobile */}
          <div className="relative mx-auto md:hidden" style={{ width: "220px", height: "220px" }}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-200/60 to-cyan-100/40 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-xl">
              <Image
                src="/images/avatar/mifoto-avatar.png"
                alt="Foto de Emanuel M. Vera"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Desktop: photo + floating badges inside fixed-size container */}
          <div
            className="relative hidden md:block"
            style={{ width: "420px", height: "420px" }}
          >
            {/* Glow */}
            <div
              className="absolute rounded-full bg-gradient-to-br from-blue-200/60 via-blue-100/40 to-cyan-100/50 blur-3xl"
              style={{ inset: "20px" }}
              aria-hidden="true"
            />

            {/* Photo */}
            <div
              className="absolute overflow-hidden rounded-full border-4 border-white shadow-2xl"
              style={{ width: "296px", height: "296px", top: "62px", left: "62px" }}
            >
              <Image
                src="/images/avatar/mifoto-avatar.png"
                alt="Foto de Emanuel M. Vera"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Badge: React — top left */}
            <div
              className="absolute flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg"
              style={{ top: "64px", left: "4px" }}
              aria-hidden="true"
            >
              <div className="h-3 w-3 rounded-full bg-[#61DAFB]" />
              <span className="text-xs font-semibold text-slate-700">React</span>
            </div>

            {/* Badge: Angular — top right */}
            <div
              className="absolute flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg"
              style={{ top: "100px", right: "4px" }}
              aria-hidden="true"
            >
              <div className="h-3 w-3 rounded-full bg-[#DD0031]" />
              <span className="text-xs font-semibold text-slate-700">Angular</span>
            </div>

            {/* Badge: Node.js — bottom left */}
            <div
              className="absolute flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg"
              style={{ bottom: "96px", left: "8px" }}
              aria-hidden="true"
            >
              <div className="h-3 w-3 rounded-full bg-[#339933]" />
              <span className="text-xs font-semibold text-slate-700">Node.js</span>
            </div>

            {/* Badge: PostgreSQL — bottom right */}
            <div
              className="absolute flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg"
              style={{ bottom: "52px", right: "4px" }}
              aria-hidden="true"
            >
              <div className="h-3 w-3 rounded-full bg-[#336791]" />
              <span className="text-xs font-semibold text-slate-700">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
