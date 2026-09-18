export type ConsentChoice = "aceito" | "essenciais";

export const CONSENT_KEY = "tecalumi_consent";

/*
 * Sinais do Consent Mode v2 do Google. Comecam negados para todo mundo e
 * so viram "granted" no aceite explicito — e o que faz as tags do GTM
 * respeitarem o banner, ja que o container carrega antes da decisao.
 */
export const CONSENT_SIGNALS = [
  "ad_storage",
  "ad_user_data",
  "ad_personalization",
  "analytics_storage",
] as const;

export function consentState(granted: boolean): Record<string, "granted" | "denied"> {
  const value = granted ? "granted" : "denied";
  return Object.fromEntries(CONSENT_SIGNALS.map((signal) => [signal, value]));
}

export function getStoredConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "aceito" || value === "essenciais" ? value : null;
  } catch {
    // localStorage indisponivel (navegacao privada): trata como sem decisao
    return null;
  }
}

export function storeConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // sem armazenamento o banner reaparece na proxima visita; aceitavel
  }
}
