export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm">
            EV
          </div>
          <span className="font-semibold text-slate-900">Emanuel M. Vera</span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <a href="#projects" className="transition-colors hover:text-blue-600">
            Proyectos
          </a>
          <a href="#about" className="transition-colors hover:text-blue-600">
            Sobre mí
          </a>
          <a href="#skills" className="transition-colors hover:text-blue-600">
            Skills
          </a>
          <a href="#contact" className="transition-colors hover:text-blue-600">
            Contacto
          </a>
        </div>

        <a
          href="/cv/cv-emanuelmvera.pdf"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
      </nav>
    </header>
  );
}
