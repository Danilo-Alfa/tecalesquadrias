/*
 * IDs de midia paga e analytics.
 * TODO(cliente): preencher quando as contas estiverem criadas.
 * Os scripts SO sao carregados apos o consentimento de cookies (LGPD)
 * e quando o respectivo ID estiver preenchido.
 */
export const TRACKING = {
  // GA4, formato G-XXXXXXXXXX
  ga4Id: "",
  // Google Ads, formato AW-XXXXXXXXX
  googleAdsId: "",
  // Meta Pixel, somente numeros
  metaPixelId: "",
} as const;

let loaded = false;

export function loadTrackingScripts(): void {
  if (loaded || typeof window === "undefined") return;

  const { ga4Id, googleAdsId, metaPixelId } = TRACKING;

  if (ga4Id || googleAdsId) {
    const firstId = ga4Id || googleAdsId;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${firstId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer ?? [];
    const gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args as unknown as Record<string, unknown>);
    };
    window.gtag = gtag;
    gtag("js", new Date());
    if (ga4Id) gtag("config", ga4Id);
    if (googleAdsId) gtag("config", googleAdsId);
  }

  if (metaPixelId) {
    const pixelScript = document.createElement("script");
    pixelScript.innerHTML = [
      "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?",
      "n.callMethod.apply(n,arguments):n.queue.push(arguments)};",
      "if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';",
      "n.queue=[];t=b.createElement(e);t.async=!0;",
      "t.src=v;s=b.getElementsByTagName(e)[0];",
      "s.parentNode.insertBefore(t,s)}(window,document,'script',",
      "'https://connect.facebook.net/en_US/fbevents.js');",
      `fbq('init', '${metaPixelId}');`,
      "fbq('track', 'PageView');",
    ].join("");
    document.head.appendChild(pixelScript);
  }

  loaded = true;
}
