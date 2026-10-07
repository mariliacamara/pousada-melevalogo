"use client";

import { useSyncExternalStore } from "react";

/**
 * Consentimento de cookies (LGPD).
 * - "pending": ainda no servidor ou antes de hidratar; não mostra nada.
 * - null: a pessoa ainda não escolheu; mostra o banner.
 * - "granted" | "denied": escolha salva no navegador.
 */
export type Consent = "granted" | "denied" | null;
export type ConsentState = Consent | "pending";

export const CONSENT_KEY = "mll-consent";
const EVENT = "mll:consent";

function read(): Consent {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

export function useConsent(): ConsentState {
  return useSyncExternalStore<ConsentState>(subscribe, read, () => "pending");
}

export function setConsent(value: Consent) {
  try {
    if (value) window.localStorage.setItem(CONSENT_KEY, value);
    else window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    // Navegação privada pode bloquear o storage: a escolha vale só nesta visita.
  }

  const state = value === "granted" ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
  if (value !== "granted") window.fbq?.("consent", "revoke");

  window.dispatchEvent(new Event(EVENT));
}
