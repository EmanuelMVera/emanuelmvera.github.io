import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeScript } from "@/components/theme/theme-script";
import { AppProviders } from "@/providers/app-providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.meta.defaultTitle,
    template: siteConfig.meta.titleTemplate,
  },
  description: siteConfig.meta.description,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteConfig.siteUrl,
    title: siteConfig.meta.defaultTitle,
    description: siteConfig.meta.description,
    siteName: siteConfig.fullName,
    images: [{ url: siteConfig.socialOgImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.defaultTitle,
    description: siteConfig.meta.description,
    images: [siteConfig.socialOgImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning evita warnings de React cuando ThemeScript
    // agrega la clase "dark" al <html> antes de la hidratación.
    <html lang="es" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-(--bg) font-sans text-(--text) antialiased`}
      >
        <AppProviders>
          <SkipLink />
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
