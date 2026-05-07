import { env } from "./env";
import type { ContactFormData } from "./validation";

type EmailResult = { success: true } | { success: false; error: string };

export async function sendContactEmail(data: ContactFormData): Promise<EmailResult> {
  // Modo demo: sin proveedor configurado, simula envío exitoso en desarrollo
  if (!env.RESEND_API_KEY && !env.FORMSPREE_ENDPOINT) {
    if (env.NODE_ENV !== "production") {
      console.log("[email:demo] Mensaje recibido:", {
        name: data.name,
        email: data.email,
        subject: data.subject,
      });
      await new Promise((r) => setTimeout(r, 400));
      return { success: true };
    }
    return {
      success: false,
      error: "Proveedor de email no configurado. Contacta al administrador.",
    };
  }

  // Resend (proveedor principal)
  if (env.RESEND_API_KEY) {
    const { Resend } = await import("resend");
    const resend = new Resend(env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: env.RESEND_FROM_EMAIL ?? "noreply@portfolio.dev",
      to: env.RESEND_TO_EMAIL ?? data.email,
      replyTo: data.email,
      subject: `[Portfolio] ${data.subject}`,
      text: `Nombre: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    });
    if (error) return { success: false, error: error.message };
    return { success: true };
  }

  // Formspree (fallback)
  const res = await fetch(env.FORMSPREE_ENDPOINT!, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    }),
  });
  if (!res.ok) return { success: false, error: "Error al enviar vía Formspree." };
  return { success: true };
}
