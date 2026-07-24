import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { ClickTracker } from "@/components/analytics/ClickTracker";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { SITE } from "@/lib/site";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const PAGE_TITLE = `${SITE.name} | Esquadrias de Alumínio Sob Medida`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: PAGE_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE.name,
    title: PAGE_TITLE,
    description: SITE.description,
    images: [
      {
        url: "/images/og-tecalumi.jpg",
        width: 1280,
        height: 640,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: SITE.description,
    images: ["/images/og-tecalumi.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: SITE.googleSiteVerification || undefined,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1733",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning limitado a tag raiz: extensoes de navegador
    // (LanguageTool, tradutores) injetam atributos no <html> antes da
    // hidratacao e gerariam falsos avisos de mismatch
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}
    >
      <body>
        <MotionProvider>{children}</MotionProvider>
        <ClickTracker />
        <CookieConsent />
      </body>
    </html>
  );
}
