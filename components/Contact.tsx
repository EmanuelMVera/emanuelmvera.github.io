import { Mail, Send } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: contact info */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-slate-900">Contacto</h2>
            </div>

            <p className="leading-relaxed text-slate-600">
              ¿Querés contactarme por una oportunidad laboral, una colaboración o un proyecto?
              Hablemos.
            </p>
            <p className="mt-2 leading-relaxed text-slate-500">
              Podés escribirme por email o LinkedIn. También podés revisar mi trabajo en GitHub.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${portfolio.email}`}
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <Mail size={16} className="text-blue-600" aria-hidden="true" />
                </div>
                {portfolio.email}
              </a>

              <a
                href={portfolio.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                  <GithubIcon />
                </div>
                github.com/emanuelmvera
              </a>

              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-blue-600"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <LinkedinIcon color="#0077B5" />
                </div>
                linkedin.com/in/emanuelmvera
              </a>
            </div>
          </div>

          {/* Right: form — sin backend: arma un mailto y abre el cliente de correo del visitante */}
          <form action={`mailto:${portfolio.email}`} method="GET" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Nombre
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Asunto
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="¿De qué se trata?"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Mensaje
              </label>
              <textarea
                id="contact-message"
                name="body"
                rows={4}
                placeholder="Contame sobre la oportunidad o el proyecto..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                Se abrirá tu aplicación de correo con el mensaje listo para enviar.
              </p>
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02] hover:bg-blue-700 hover:shadow-lg active:scale-95"
              >
                Abrir en mi email
                <Send size={16} aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
