import { portfolio } from "@/data/portfolio";

function getCategoryIcon(name: string) {
  if (name === "frontend") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }
  if (name === "backend") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#06B6D4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  if (name === "database") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    );
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F59E0B"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

const categoryBg: Record<string, string> = {
  frontend: "bg-blue-50",
  backend: "bg-cyan-50",
  database: "bg-purple-50",
  tools: "bg-amber-50",
};

export function Skills() {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-slate-900">Skills</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {portfolio.skillCategories.map((cat) => (
          <div
            key={cat.category}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <div
              className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${
                categoryBg[cat.icon] ?? "bg-slate-50"
              }`}
            >
              {getCategoryIcon(cat.icon)}
            </div>
            <h3 className="mb-3 font-semibold text-slate-900">{cat.category}</h3>
            <ul className="space-y-1.5">
              {cat.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <span
                    className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
