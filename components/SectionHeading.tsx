// Título de sección del portfolio: punto azul + h2 (y subtítulo opcional).
export function SectionHeading({
  children,
  id,
  subtitle,
  className = "mb-6",
}: {
  children: React.ReactNode;
  id?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 shrink-0 rounded-full bg-blue-600" aria-hidden="true" />
        <h2 id={id} className="text-2xl font-bold text-slate-900">
          {children}
        </h2>
      </div>
      {subtitle && <p className="mt-1.5 pl-5 text-slate-500">{subtitle}</p>}
    </div>
  );
}
