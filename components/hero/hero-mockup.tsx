export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]" aria-hidden="true">
      <div className="rounded-3xl border border-slate-700/40 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-2xl shadow-blue-950/40">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs text-slate-400">Fintech Dashboard</span>
          <span className="rounded-full bg-cyan-400/15 px-2.5 py-1 text-[11px] text-cyan-300">API conectada</span>
        </div>
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-4">
          <p className="text-xs text-blue-100">Saldo total</p>
          <p className="mt-1 text-3xl font-bold text-white">$12.450,00</p>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-white/90">
            <span className="rounded-md bg-white/10 p-2">Enviar</span><span className="rounded-md bg-white/10 p-2">Cobrar</span><span className="rounded-md bg-white/10 p-2">Pagar</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {["Transferencia +$850", "Suscripción -$15", "Compra -$42"].map((t) => <div key={t} className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs text-slate-300">{t}</div>)}
        </div>
      </div>
      <div className="absolute -left-3 top-8 animate-[float_5s_ease-in-out_infinite] rounded-xl border border-(--border) bg-(--surface) px-3 py-2 text-xs font-semibold text-(--text) shadow-md">React</div>
      <div className="absolute -right-3 top-28 animate-[float_6s_ease-in-out_infinite] rounded-xl border border-(--border) bg-(--surface) px-3 py-2 text-xs font-semibold text-(--text) shadow-md">Node.js</div>
      <div className="absolute left-14 -bottom-3 animate-[float_7s_ease-in-out_infinite] rounded-xl border border-(--border) bg-(--surface) px-3 py-2 text-xs font-semibold text-(--text) shadow-md">PostgreSQL</div>
    </div>
  );
}
