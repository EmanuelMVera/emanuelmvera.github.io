// Stub para analytics. Implementar cuando se elija proveedor (Vercel Analytics, Plausible, etc.)
export function trackEvent(_name: string, _props?: Record<string, unknown>) {
  void _name;
  void _props;
  if (process.env.NODE_ENV === "development") {
    // console.log("[analytics]", _name, _props);
  }
}
