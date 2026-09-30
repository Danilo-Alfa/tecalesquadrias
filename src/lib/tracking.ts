import { consentState } from "@/lib/consent";

/*
 * IDs de midia paga e analytics.
 * TODO(cliente): preencher o Meta Pixel quando a conta
 * estiver criada.
 * GA4/Pixel SO carregam apos o consentimento de cookies (LGPD)
 * e quando o respectivo ID estiver preenchido. GTM e a tag global do
 * Google Ads sao a excecao: carregam para todos os visitantes, direto no
 * layout (decisao do cliente), respeitando o Consent Mode v2.
 */
export const TRACKING = {
  // Google Tag Manager, formato GTM-XXXXXXX (carregado no layout, sem gate)
  gtmId: "GTM-T8F6KS2Q",
  // GA4, formato G-XXXXXXXXXX
  ga4Id: "G-S1XR43ZK75",
  // Google Ads, formato AW-XXXXXXXXX
  googleAdsId: "AW-18460513766",
  /*
   * Acao de conversao "Orcamento via WhatsApp" do Google Ads.
   * O snippet que o Ads entrega e o de "pagina de conversao": dispara no
   * carregamento e contaria uma conversao por pageview. Aqui a conversao
   * e o clique que leva ao WhatsApp, entao o disparo vive no ClickTracker.
   */
  googleAdsWhatsappConversion: {
    sendTo: "AW-18460513766/aOZlCPLXvvwcEOar1OJE",
    value: 1.0,
    currency: "BRL",
  },
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

  /*
   * Com o Google Ads preenchido, o layout ja carregou o gtag.js e
   * configurou a conta para todos os visitantes; aqui so falta o GA4,
   * que continua esperando o aceite.
   */
  if (ga4Id) {
    const enviar = gtagShim();
    if (!googleAdsId) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
      document.head.appendChild(script);
      enviar("js", new Date());
    }
    enviar("config", ga4Id);
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
