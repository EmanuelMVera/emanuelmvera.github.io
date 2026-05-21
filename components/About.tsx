import { portfolio } from "@/data/portfolio";

function getIcon(name: string) {
  if (name === "target") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  }
  if (name === "book") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#2563EB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function About() {
  const { about } = portfolio;

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-slate-900">Sobre mí</h2>
      </div>

      <div className="space-y-4 leading-relaxed text-slate-600">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {about.highlights.map((item, i) => (
          <div
            key={item.label}
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
        ))}
      </div>
    </div>
  );
}
