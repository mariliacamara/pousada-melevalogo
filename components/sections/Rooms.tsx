import Image from "next/image";

import WhatsAppLink from "@/components/WhatsAppLink";
import { rooms, roomsIntro } from "@/lib/data/rooms";
import { photos } from "@/lib/photos";
import { messages } from "@/lib/whatsapp";

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export default function Rooms() {
  return (
    <section id="quartos" className="section bg-white">
      <div className="wrap flex flex-col gap-10">
        <div className="flex max-w-[45rem] flex-col gap-3">
          <p className="eyebrow text-pool">Quartos</p>
          <h2 className="h2">Escolha o seu quarto</h2>
          <p className="text-[1.1875rem] text-ink-soft">{roomsIntro}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map(({ id, name, capacity, features, photo, inset, priceFrom }) => (
            <article
              key={id}
              className="flex flex-col overflow-hidden rounded-3xl border-2 border-ink bg-white"
            >
              <div className="relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 46vw, 92vw"
                  className="aspect-[4/5] w-full object-cover"
                />
                {inset && (
                  <Image
                    src={inset.src}
                    alt={inset.alt}
                    sizes="120px"
                    className="absolute bottom-3.5 right-3.5 aspect-[3/4] w-[28%] rounded-xl border-4 border-white object-cover"
                  />
                )}
              </div>

              <div className="flex flex-1 flex-col gap-3.5 p-[1.375rem]">
                <h3 className="font-display text-[1.75rem] leading-[1.1]">{name}</h3>
                <ul className="flex flex-col gap-1.5">
                  <li className="font-bold">{capacity}</li>
                  {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <p className="mt-auto pt-2 text-base text-ink-soft">
                  {priceFrom ? (
                    <>
                      A partir de{" "}
                      <strong className="text-[1.375rem] text-ink">{brl.format(priceFrom)}</strong>{" "}
                      a diária
                    </>
                  ) : (
                    "Valor sob consulta, de acordo com as datas."
                  )}
                </p>
                <WhatsAppLink
                  message={messages.room(name)}
                  placement={`room_${id}`}
                  className="btn btn-pool rounded-2xl"
                >
                  Consultar o {name}
                </WhatsAppLink>
              </div>
            </article>
          ))}

          <article className="flex flex-col justify-between gap-6 rounded-3xl border-2 border-ink bg-sun p-7 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-3.5">
              <Image
                src={photos.pergoladoPanoramica.src}
                alt={photos.pergoladoPanoramica.alt}
                placeholder="blur"
                sizes="340px"
                className="mb-2 hidden aspect-[4/3] w-full rounded-2xl border-2 border-ink object-cover lg:block"
              />
              <p className="eyebrow">Multiplayer</p>
              <h3 className="font-display text-[1.75rem] leading-[1.1]">Vêm em grupo?</h3>
              <p className="text-lg">
                Diga quantas pessoas são e a equipe indica a melhor combinação de quartos
                para a família toda ficar junta.
              </p>
            </div>
            <WhatsAppLink
              message={messages.group}
              placement="room_group"
              className="btn btn-ink rounded-2xl"
            >
              Consultar para um grupo
            </WhatsAppLink>
          </article>
        </div>
      </div>
    </section>
  );
}
