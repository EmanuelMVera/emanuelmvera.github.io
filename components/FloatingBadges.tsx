"use client";

import { motion, useReducedMotion } from "framer-motion";

const BADGES = [
  { tech: "React",      color: "#61DAFB", style: { top: "64px",    left: "4px"   }, delay: 0    },
  { tech: "Angular",    color: "#DD0031", style: { top: "100px",   right: "4px"  }, delay: 0.75 },
  { tech: "Node.js",    color: "#339933", style: { bottom: "96px", left: "8px"   }, delay: 1.5  },
  { tech: "PostgreSQL", color: "#336791", style: { bottom: "52px", right: "4px"  }, delay: 2.25 },
] as const;

export function FloatingBadges() {
  const shouldReduce = useReducedMotion();

  return (
    <>
      {BADGES.map(({ tech, color, style, delay }) => (
        <motion.div
          key={tech}
          className="absolute flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg"
          style={style}
          aria-hidden="true"
          animate={shouldReduce ? {} : { y: [-4, 4, -4] }}
          transition={
            shouldReduce
              ? {}
              : { repeat: Infinity, duration: 3.5, ease: "easeInOut", delay }
          }
        >
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
          <span className="text-xs font-semibold text-slate-700">{tech}</span>
        </motion.div>
      ))}
    </>
  );
}
