import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolio.name} | ${portfolio.role}`,
  description: portfolio.hero.subtitle,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
