import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://emanuelmvera.github.io"),
  title: "Emanuel M. Vera | Desarrollador Web",
  description:
    "Portfolio personal de Emanuel M. Vera, desarrollador web con proyectos en React, Angular, Node.js y PostgreSQL.",
  openGraph: {
    title: "Emanuel M. Vera | Desarrollador Web",
    description:
      "Portfolio personal de Emanuel M. Vera, desarrollador web con proyectos en React, Angular, Node.js y PostgreSQL.",
    images: ["/images/og/placeholder-og.png"],
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
