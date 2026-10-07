import { MapPin } from "lucide-react";
import Image from "next/image";

import MapEmbed from "@/components/MapEmbed";
import WhatsAppLink from "@/components/WhatsAppLink";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";
import { messages } from "@/lib/whatsapp";

const routes = [
  { label: "De carro", value: "2h do Rio de Janeiro" },
  { label: "De ônibus", value: "Saídas da Rodoviária Novo Rio" },
  { label: "Até a praia", value: "Pertinho da Praia do Barbudo" },
];

export default function Location() {
  const { address } = site;

  return (
    <section id="chegar" className="section bg-pool text-white">
      <div className="wrap grid items-center gap-x-14 gap-y-10 lg:grid-cols-[1.15fr_1fr]">
        <div className="flex min-w-0 flex-col gap-[1.375rem]">
          <p className="eyebrow text-sun">Como chegar</p>
          <h2 className="h2">A 2 horas do Rio, pertinho da lagoa</h2>
          <p className="max-w-[32em] text-[1.1875rem]">
            A Praia do Barbudo fica na Lagoa de Araruama: água calma, sem onda, do jeito
            que criança pequena gosta.
          </p>

          <dl className="grid gap-3.5 sm:grid-cols-3">
            {routes.map(({ label, value }) => (
              <div key={label} className="rounded-2xl bg-pool-deep px-[1.125rem] py-4">
                <dt className="text-sm font-extrabold uppercase tracking-[0.08em] text-sun">
                  {label}
                </dt>
                <dd className="mt-1 text-lg font-bold leading-snug">{value}</dd>
              </div>
            ))}
          </dl>

          <address className="flex items-start gap-2.5 text-lg font-bold not-italic">
            <MapPin aria-hidden="true" className="mt-0.5 size-6 shrink-0" />
            {address.street} · {address.neighborhood}, {address.city}, {address.region}
          </address>

          <div className="flex flex-wrap gap-3">
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sun"
            >
              Abrir no Google Maps
            </a>
            <WhatsAppLink
              message={messages.location}
              placement="location"
              className="btn btn-ghost"
            >
              Receber o pin no WhatsApp
            </WhatsAppLink>
          </div>
        </div>

        <div className="grid min-w-0 grid-cols-2 gap-4">
          <Image
            src={photos.pousada.src}
            alt={photos.pousada.alt}
            placeholder="blur"
            sizes="(min-width: 1024px) 250px, 44vw"
            className="aspect-[3/4] w-full rounded-[1.25rem] border-[6px] border-white object-cover"
          />
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
