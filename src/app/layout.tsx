import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import Script from "next/script";

import { ClickTracker } from "@/components/analytics/ClickTracker";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { CONSENT_KEY, consentState } from "@/lib/consent";
import { SITE } from "@/lib/site";
import { TRACKING } from "@/lib/tracking";

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
      {/*
        Consent Mode v2, antes do GTM: o container carrega para todos os
        visitantes, entao sem este default qualquer tag criada la dentro
        dispararia ignorando o banner. Os sinais nascem negados e so viram
        "granted" no aceite — inclusive nesta mesma carga, se a decisao ja
        estiver salva de uma visita anterior.
      */}
      <Script
        id="consent-default"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('consent','default',${JSON.stringify({
            ...consentState(false),
            wait_for_update: 500,
          })});
try{if(localStorage.getItem('${CONSENT_KEY}')==='aceito'){
gtag('consent','update',${JSON.stringify(consentState(true))});}}catch(e){}`,
        }}
      />

      {/* GTM carrega para todos os visitantes, sem gate de consentimento */}
      {TRACKING.gtmId && (
        <Script
          id="gtm"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${TRACKING.gtmId}');`,
          }}
        />
      )}
      <body>
        {/* GTM (noscript): fallback padrao para navegadores sem JavaScript */}
        {TRACKING.gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${TRACKING.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <MotionProvider>{children}</MotionProvider>
        <ClickTracker />
        <CookieConsent />
      </body>
    </html>
  );
}
