import { portfolio } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/50">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <p className="font-semibold">{portfolio.name}</p>
        <div className="flex gap-4 text-sm">
          <a href="#projects">Proyectos</a>
          <a href="#about">Sobre mí</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>
    </header>
  );
}
