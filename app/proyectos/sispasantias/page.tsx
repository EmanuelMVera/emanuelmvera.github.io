import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Cloud,
  Database,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Mail,
  Monitor,
  Server,
  ShieldCheck,
  ShieldUser,
  UserSearch,
} from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import { sispasantias as cs } from "@/data/sispasantias";

export const metadata: Metadata = {
  title: "SisPasantías — Caso de estudio | Emanuel M. Vera",
  description:
    "Caso de estudio de SisPasantías: plataforma full stack multirol de empleo y pasantías con React, Node.js, Express y PostgreSQL.",
  alternates: { canonical: "/proyectos/sispasantias/" },
  openGraph: {
    type: "article",
    url: "/proyectos/sispasantias/",
    title: "SisPasantías — Caso de estudio | Emanuel M. Vera",
    description:
      "Plataforma full stack multirol de empleo y pasantías: roles, moderación, pipeline de selección, seguridad, testing y despliegue.",
    images: [
      {
        url: "/images/projects/sispasantias/thumb.webp",
        width: 1200,
        height: 675,
        alt: "Panel de administración de SisPasantías",
      },
    ],
  },
};

const ROLE_ICONS: Record<string, React.ReactNode> = {
  admin: <ShieldUser size={20} className="text-blue-600" aria-hidden="true" />,
  company: <Building2 size={20} className="text-blue-600" aria-hidden="true" />,
  recruiter: <UserSearch size={20} className="text-blue-600" aria-hidden="true" />,
  student: <GraduationCap size={20} className="text-blue-600" aria-hidden="true" />,
};

const LAYER_ICONS = [
  <Monitor key="f" size={20} className="text-blue-600" aria-hidden="true" />,
  <Server key="b" size={20} className="text-cyan-600" aria-hidden="true" />,
  <Database key="d" size={20} className="text-purple-500" aria-hidden="true" />,
];

const SERVICE_ICONS = [
  <Cloud key="r2" size={18} className="text-amber-500" aria-hidden="true" />,
  <Mail key="mail" size={18} className="text-blue-600" aria-hidden="true" />,
  <GitBranch key="ci" size={18} className="text-slate-600" aria-hidden="true" />,
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 py-10 md:py-12">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
        <h2 id={`${id}-title`} className="text-2xl font-bold text-slate-900">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

export default function SisPasantiasPage() {
  return (
    <article className="mx-auto max-w-6xl px-6 pb-16">
      {/* ── Hero ── */}
      <header className="pt-8 md:pt-12">
        <Link
          href="/#proyectos"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Volver a proyectos
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
              Caso de estudio
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {cs.title}
            </h1>
            <p className="mt-2 text-lg font-semibold text-blue-600">{cs.subtitle}</p>
            <p className="mt-1 text-sm font-medium text-slate-500">{cs.context}</p>
            <p className="mt-5 leading-relaxed text-slate-600">{cs.summary}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {cs.stack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={cs.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver aplicación SisPasantías (abre en una pestaña nueva)"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Ver aplicación
              </a>
              <a
                href={cs.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver código de SisPasantías en GitHub (abre en una pestaña nueva)"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
              >
                <GithubIcon />
                Ver código
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              La demo usa datos ficticios y cuentas de prueba disponibles en la pantalla de inicio de sesión.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-3 sm:p-5">
            <Image
              src={cs.images.thumb}
              alt="Panel de administración de SisPasantías con indicadores del sistema y la actividad del período"
              width={1200}
              height={675}
              className="h-auto w-full rounded-xl shadow-xl ring-1 ring-slate-900/5"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
        </div>
      </header>

      {/* ── Problema ── */}
      <Section id="problema" title="El problema">
        <ul className="grid gap-4 sm:grid-cols-2">
          {cs.problem.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-relaxed text-slate-600 shadow-sm"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Solución ── */}
      <Section id="solucion" title="La solución">
        <p className="mb-6 max-w-3xl leading-relaxed text-slate-600">
          Un sistema multirol con cuatro experiencias distintas. No hay autorregistro público: el
          instituto da de alta a los alumnos y aprueba a las empresas y a sus reclutadores.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cs.roles.map((role) => (
            <div key={role.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                {ROLE_ICONS[role.icon]}
              </div>
              <h3 className="font-semibold text-slate-900">{role.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{role.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Flujo ── */}
      <Section id="flujo" title="Flujo principal">
        <ol className="grid gap-0 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
          {cs.flow.map((step, i) => (
            <li key={step} className="relative">
              <div className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-slate-800">{step}</span>
              </div>
              {i < cs.flow.length - 1 && (
                <>
                  <ArrowDown
                    size={16}
                    className="mx-auto my-1.5 text-blue-500 sm:hidden"
                    aria-hidden="true"
                  />
                  <ArrowRight
                    size={16}
                    className={`absolute -right-3.5 top-1/2 hidden -translate-y-1/2 text-blue-400 ${
                      i % 2 === 0 ? "sm:block" : ""
                    } ${i % 4 !== 3 ? "lg:block" : "lg:hidden"}`}
                    aria-hidden="true"
                  />
                </>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* ── Arquitectura ── */}
      <Section id="arquitectura" title="Arquitectura">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="flex flex-col items-stretch rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            {cs.architecture.main.map((node, i) => (
              <div key={node.layer}>
                <div className="flex items-center gap-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                    {LAYER_ICONS[i]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {node.layer}
                    </p>
                    <p className="font-semibold text-slate-900">{node.tech}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
                    {node.host}
                  </span>
                </div>
                {i < cs.architecture.main.length - 1 && (
                  <div className="flex items-center justify-center gap-2 py-2 text-xs font-medium text-slate-500">
                    <ArrowDown size={16} className="text-blue-400" aria-hidden="true" />
                    {cs.architecture.connectors[i]}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {cs.architecture.services.map((svc, i) => (
              <div
                key={svc.name}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                  {SERVICE_ICONS[i]}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {svc.name}
                  </p>
                  <p className="font-semibold text-slate-900">{svc.tech}</p>
                  <p className="mt-0.5 text-sm text-slate-600">{svc.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Seguridad ── */}
      <Section id="seguridad" title="Seguridad y permisos">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cs.security.map((item) => (
            <li key={item.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                <ShieldCheck size={16} className="shrink-0 text-blue-600" aria-hidden="true" />
                {item.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Testing ── */}
      <Section id="calidad" title="Testing y calidad">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {cs.quality.tools.map((tool) => (
              <Chip key={tool}>{tool}</Chip>
            ))}
          </div>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {cs.quality.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Despliegue ── */}
      <Section id="despliegue" title="Despliegue">
        <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {cs.deployment.map((item) => (
            <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</dt>
              <dd className="mt-1 font-semibold text-slate-900">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── Capturas ── */}
      <Section id="capturas" title="Capturas">
        <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)] md:items-start">
          <figure>
            <Image
              src={cs.images.desktop}
              alt="Vista de escritorio de SisPasantías: panel del administrador de empresa"
              width={1600}
              height={900}
              className="h-auto w-full rounded-xl border border-slate-200 shadow-lg"
              sizes="(max-width: 768px) 100vw, 70vw"
            />
            <figcaption className="mt-2 text-sm text-slate-500">Escritorio · Administrador de empresa</figcaption>
          </figure>
          <figure className="mx-auto w-full max-w-[280px]">
            <Image
              src={cs.images.mobile}
              alt="Vista móvil de SisPasantías: panel del alumno con el estado de sus postulaciones"
              width={750}
              height={1334}
              className="h-auto w-full rounded-2xl border border-slate-200 shadow-lg"
              sizes="280px"
            />
            <figcaption className="mt-2 text-center text-sm text-slate-500">Móvil · Alumno</figcaption>
          </figure>
        </div>
      </Section>

      {/* ── Participación ── */}
      <Section id="participacion" title="Mi participación">
        <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 md:p-8">
          <p className="leading-relaxed text-slate-700">{cs.participation.intro}</p>
          <p className="mt-3 leading-relaxed text-slate-700">{cs.participation.body}</p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {cs.participation.areas.map((area) => (
              <li key={area} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── Desafíos ── */}
      <Section id="desafios" title="Desafíos y aprendizajes">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cs.challenges.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Cierre ── */}
      <div className="mt-4 flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-slate-900">¿Querés ver el sistema funcionando?</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={cs.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-700"
          >
            <ExternalLink size={16} aria-hidden="true" />
            Ver aplicación
          </a>
          <Link
            href="/#proyectos"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-blue-200"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Otros proyectos
          </Link>
        </div>
      </div>
    </article>
  );
}
