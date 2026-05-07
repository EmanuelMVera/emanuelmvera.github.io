// Decoración visual del hero — representa la interfaz de la billetera virtual
// TODO: REEMPLAZAR_IMAGEN — cuando tengas screenshots reales, usar next/image aquí
export function HeroMockup() {
  return (
    <div className="relative hidden shrink-0 lg:block" aria-hidden="true">
      {/* Ventana de browser simulada */}
      <div className="w-[340px] overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900 shadow-2xl shadow-black/40">
        {/* Barra de título */}
        <div className="flex items-center gap-1.5 border-b border-slate-800 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="mx-auto font-mono text-[11px] text-slate-500">billetera-virtual.app</span>
        </div>

        {/* Contenido simulado — dashboard */}
        <div className="p-5 space-y-4">
          {/* Balance */}
          <div className="rounded-xl bg-gradient-to-br from-blue-600 to-violet-700 p-4">
            <p className="text-xs text-blue-200">Saldo disponible</p>
            <p className="mt-1 font-mono text-2xl font-bold text-white">$12,450.00</p>
            <div className="mt-3 flex gap-2">
              {["Enviar", "Recibir", "Pagar"].map((label) => (
                <span
                  key={label}
                  className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-medium text-white"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Actividad reciente */}
          <div>
            <p className="mb-2 text-xs font-semibold text-slate-400">Actividad reciente</p>
            <div className="space-y-2">
              {[
                { label: "Netflix", amount: "-$15.99", color: "text-red-400" },
                { label: "Freelance", amount: "+$350.00", color: "text-green-400" },
                { label: "Spotify", amount: "-$9.99", color: "text-red-400" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-slate-700" />
                    <span className="text-xs text-slate-300">{item.label}</span>
                  </div>
                  <span className={`font-mono text-xs font-semibold ${item.color}`}>
                    {item.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Badge flotante */}
      <div className="absolute -right-3 -top-3 rounded-lg bg-(--accent) px-3 py-1.5 shadow-lg shadow-blue-500/25">
        <span className="font-mono text-[11px] font-semibold text-white">React + Node.js</span>
      </div>
    </div>
  );
}
