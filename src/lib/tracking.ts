import { consentState } from "@/lib/consent";

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

/*
 * Shim do gtag, unico para todo o site. O snippet oficial do Google
 * empilha o objeto `arguments` — nao um array — e o gtag.js conta com
 * isso ao varrer a fila; por isso a funcao e uma declaration, ja que
 * arrow nao tem `arguments`.
 *
 * Reaproveita o gtag que o script de consentimento do layout ja definiu,
 * para os dois lados escreverem na mesma fila.
 */
export function gtagShim(): (...args: unknown[]) => void {
  window.dataLayer = window.dataLayer ?? [];
  if (window.gtag) return window.gtag;

  function gtag(): void {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments as unknown as Record<string, unknown>);
  }
  const enviar = gtag as (...args: unknown[]) => void;
  window.gtag = enviar;
  return enviar;
}

/*
 * Consent Mode v2: o layout ja declarou tudo negado antes do GTM subir.
 * Aqui so avisamos a decisao do visitante — vale tanto para as tags do
 * container quanto para o GA4 carregado abaixo.
 */
export function updateConsent(granted: boolean): void {
  if (typeof window === "undefined") return;
  gtagShim()("consent", "update", consentState(granted));
}

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

    const enviar = gtagShim();
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
