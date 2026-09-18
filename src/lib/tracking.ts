/*
 * IDs de midia paga e analytics.
 * TODO(cliente): preencher Google Ads e Meta Pixel quando as contas
 * estiverem criadas.
 * GA4/Ads/Pixel SO carregam apos o consentimento de cookies (LGPD)
 * e quando o respectivo ID estiver preenchido. O GTM e a excecao:
 * carrega para todos os visitantes, direto no layout (decisao do cliente).
 */
export const TRACKING = {
  // Google Tag Manager, formato GTM-XXXXXXX (carregado no layout, sem gate)
  gtmId: "GTM-T8F6KS2Q",
  // GA4, formato G-XXXXXXXXXX
  ga4Id: "G-S1XR43ZK75",
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
    /*
     * O snippet oficial do Google empilha o objeto `arguments`, nao um
     * array — e o gtag.js conta com isso ao varrer a fila. Por isso a
     * funcao e uma declaration (arrow nao tem `arguments`) e o push vai
     * com cast: o dataLayer e tipado como lista de objetos.
     */
    function gtag(): void {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments as unknown as Record<string, unknown>);
    }
    const enviar = gtag as (...args: unknown[]) => void;
    window.gtag = enviar;
    enviar("js", new Date());
    if (ga4Id) enviar("config", ga4Id);
    if (googleAdsId) enviar("config", googleAdsId);
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
