"use client";

import { setConsent } from "@/lib/consent";

/** Reabre o aviso de cookies para a pessoa mudar a escolha quando quiser. */
export default function CookiePreferences({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => setConsent(null)} className={className}>
      Preferências de cookies
    </button>
  );
}
