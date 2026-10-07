"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

import { site } from "@/lib/site";

/**
 * O mapa do Google só carrega quando a pessoa pede.
 * O iframe traz perto de 1 MB de scripts de terceiros; carregar em toda
 * visita pioraria a nota de desempenho por um mapa que poucos usam.
 */
export default function MapEmbed() {
  const [open, setOpen] = useState(false);

  if (open) {
    return (
      <iframe
        src={site.mapsEmbedUrl}
        title={`Mapa: ${site.name}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="aspect-[3/4] w-full rounded-[1.25rem] border-[6px] border-white"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className="flex aspect-[3/4] w-full flex-col items-center justify-center gap-3 rounded-[1.25rem] border-2 border-dashed border-white bg-pool-deep p-4 text-center font-bold text-white transition-colors hover:bg-night"
    >
      <MapPin aria-hidden="true" className="size-9 text-sun" />
      <span>
        {site.address.street}
        <br />
        {site.address.neighborhood}, {site.address.city}
      </span>
      <span className="rounded-full bg-sun px-4 py-2 text-sm font-extrabold text-ink">
        Ver o mapa aqui
      </span>
    </button>
  );
}
