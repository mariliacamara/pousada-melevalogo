"use client";

import type { ReactNode } from "react";

import { trackWhatsAppClick } from "@/lib/track";
import { whatsappUrl } from "@/lib/whatsapp";

type Props = {
  message: string;
  /** Onde o botão está na página. Vai para o GA4 e para o Pixel. */
  placement: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

/**
 * Todo link de WhatsApp do site passa por aqui: um lugar só monta a URL
 * e um lugar só dispara o evento de conversão.
 */
export default function WhatsAppLink({ message, placement, children, ...rest }: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-placement={placement}
      onClick={() => trackWhatsAppClick(placement)}
      {...rest}
    >
      {children}
    </a>
  );
}
