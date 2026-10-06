import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE_URL } from "@/data/site";
import "./globals.css";

const title = "Emanuel M. Vera | Analista de Sistemas y Desarrollador Full Stack";
const description =
  "Portfolio de Emanuel M. Vera. Analista de Sistemas y desarrollador Full Stack con experiencia en React, Node.js, PostgreSQL, testing, seguridad y desarrollo de aplicaciones web completas.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Emanuel Vera",
    "Analista de Sistemas",
    "Full Stack Developer",
    "React",
    "Node.js",
    "PostgreSQL",
    "Testing",
    "Software Development",
    "Argentina",
  ],
  authors: [{ name: "Emanuel M. Vera" }],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Emanuel M. Vera",
    title,
    description,
    images: [
      {
        url: "/images/og/portfolio-og.png",
        width: 1200,
        height: 630,
        alt: "Emanuel M. Vera — Analista de Sistemas y Desarrollador Full Stack. Proyecto destacado: SisPasantías",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og/portfolio-og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
