const BADGES = [
  { tech: "React",      color: "#61DAFB", style: { top: "64px",    left: "4px"   }, delay: "0s"    },
  { tech: "Node.js",    color: "#339933", style: { top: "100px",   right: "4px"  }, delay: "0.75s" },
  { tech: "PostgreSQL", color: "#336791", style: { bottom: "96px", left: "8px"   }, delay: "1.5s"  },
  { tech: "Playwright", color: "#2EAD33", style: { bottom: "52px", right: "4px"  }, delay: "2.25s" },
] as const;

// Animación puramente decorativa en CSS: los badges son visibles desde el HTML inicial.
export function FloatingBadges() {
  return (
    <>
      {BADGES.map(({ tech, color, style, delay }) => (
        <div
          key={tech}
          className="float-badge absolute flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg"
          style={{ ...style, animationDelay: delay }}
          aria-hidden="true"
        >
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-xs font-semibold text-slate-700">{tech}</span>
        </div>
      ))}
    </>
  );
}
