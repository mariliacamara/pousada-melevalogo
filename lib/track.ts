declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Clique em qualquer botão de WhatsApp = a conversão do site.
 * GA4 recebe `generate_lead` e o Meta Pixel recebe `Contact`, ambos com o
 * `placement` (onde o botão estava), para saber qual trecho da página converte.
 * Se os scripts não estiverem carregados, as chamadas simplesmente não acontecem.
 */
export function trackWhatsAppClick(placement: string) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", "generate_lead", { method: "whatsapp", placement });
  window.fbq?.("track", "Contact", { content_name: placement });
}
