export type ConsentChoice = "aceito" | "essenciais";

const CONSENT_KEY = "tecalumi_consent";

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
