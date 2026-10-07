"use client";

import Link from "next/link";

import { setConsent, useConsent } from "@/lib/consent";

/**
 * Aparece só enquanto a pessoa não escolheu. "Recusar" e "Aceitar" têm o
 * mesmo tamanho e destaque: a LGPD pede consentimento livre, e um botão de
 * recusa escondido não conta como escolha.
 */
export default function ConsentBanner() {
  const consent = useConsent();
  if (consent !== null) return null;

  return (
    <section
      aria-label="Aviso de cookies"
      className="fixed inset-x-3 bottom-20 z-50 mx-auto max-w-xl rounded-2xl border-2 border-ink bg-white p-4 text-ink shadow-[0_6px_0_var(--color-ink)] md:bottom-4"
    >
      <p className="text-[0.9375rem] leading-snug">
        Usamos cookies para medir as visitas e mostrar anúncios da pousada. Você pode
        aceitar ou recusar, e o site funciona igual dos dois jeitos.{" "}
        <Link href="/privacidade" className="font-bold text-pool underline">
          Política de privacidade
        </Link>
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <button
          type="button"
          onClick={() => setConsent("denied")}
          className="btn border-ink bg-white text-ink"
        >
          Recusar
        </button>
        <button
          type="button"
          onClick={() => setConsent("granted")}
          className="btn border-ink bg-white text-ink"
        >
          Aceitar
        </button>
      </div>
    </section>
  );
}
