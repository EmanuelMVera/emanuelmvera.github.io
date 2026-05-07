// Server Component — NO agregar "use client".
// Renderiza un <script> inline que corre ANTES de la hidratación para evitar FOUC.
export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t===null&&d)){document.documentElement.classList.add('dark')}}catch(e){}})()`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
