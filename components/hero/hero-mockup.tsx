import Image from "next/image";

const floatingBadges = [
  { label: "React", pos: "left-0 top-10 lg:-left-10" },
  { label: "Angular", pos: "right-0 top-8 lg:-right-10" },
  { label: "Node.js", pos: "left-2 bottom-16 lg:-left-8" },
  { label: "PostgreSQL", pos: "right-2 bottom-20 lg:-right-12" },
  { label: "Perfil junior", pos: "left-1/2 -bottom-2 -translate-x-1/2" },
];

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[380px] py-6 lg:max-w-[420px]">
      <div className="absolute inset-8 rounded-full bg-radial from-cyan-300/50 via-blue-300/35 to-transparent blur-3xl dark:from-cyan-500/25" />
      <div className="relative mx-auto w-[280px] rounded-[2rem] border border-blue-200/70 bg-white/70 p-3 shadow-2xl backdrop-blur md:w-[320px] dark:border-slate-700 dark:bg-slate-900/70">
        <div className="rounded-[1.6rem] border border-cyan-300/50 bg-gradient-to-b from-sky-50 to-white p-4 dark:border-cyan-500/30 dark:from-slate-800 dark:to-slate-900">
          <Image
            src="/images/avatar/mifoto-avatar.png"
            alt="Foto de perfil de Emanuel M. Vera"
            width={560}
            height={700}
            sizes="(max-width: 768px) 280px, 320px"
            className="mx-auto h-auto w-full object-contain"
            priority
          />
        </div>
      </div>
      <p className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
        Buscando primera oportunidad
      </p>
      {floatingBadges.map((badge) => (
        <span
          key={badge.label}
          className={`absolute ${badge.pos} rounded-full border border-(--border) bg-(--surface) px-3 py-1 text-xs font-medium text-(--text) shadow-md`}
        >
          {badge.label}
        </span>
      ))}
    </div>
  );
}
