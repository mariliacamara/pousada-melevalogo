import Image from "next/image";

import BookingForm from "@/components/BookingForm";
import CheckList from "@/components/ui/CheckList";
import Wave from "@/components/ui/Wave";
import { included } from "@/lib/data/navigation";
import { photos } from "@/lib/photos";

const stack = [
  { photo: photos.piscina, label: "Piscina", position: "left-0 top-[5%] -rotate-[5deg]" },
  { photo: photos.kids, label: "Área kids", position: "right-0 top-0 rotate-[4deg]" },
  {
    photo: photos.arcade,
    label: "Arcade · 980 jogos",
    position: "left-1/4 top-[43%] -rotate-[1.5deg]",
  },
];

export default function Hero() {
  return (
    <>
      <section id="inicio" className="bg-pool text-white">
        <div className="wrap grid items-center gap-x-14 gap-y-12 pb-10 pt-10 sm:pt-14 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex min-w-0 flex-col gap-5">
            {/*
              O h1 tem duas linhas: a de cima carrega o termo de busca
              ("pousada para família em Araruama"), a de baixo é a frase da marca.
            */}
            <h1 className="flex flex-col items-start gap-5">
              <span className="rounded-full bg-pool-deep px-3.5 py-2 text-sm font-bold uppercase tracking-[0.08em]">
                Pousada para família em Araruama, RJ
              </span>
              <span className="font-display text-[clamp(2.2rem,10vw,3.5rem)] leading-[1.02] lg:text-[clamp(3.5rem,6.2vw,5rem)]">
                — Mãe, pai, <span className="whitespace-nowrap text-sun">me leva logo!</span>
              </span>
            </h1>

            <p className="max-w-[34em] text-[clamp(1.125rem,1.6vw,1.3125rem)] leading-normal">
              A pousada onde as crianças brincam o dia inteiro e os adultos finalmente
              descansam. Piscina, área kids, sala de jogos e um arcade com 980 jogos, a
              poucos minutos da Praia do Barbudo.
            </p>

            <BookingForm />
          </div>

          <div className="relative mx-auto aspect-[1/1.17] w-full max-w-[32.5rem]">
            {stack.map(({ photo, label, position }, index) => (
              <figure key={label} className={`polaroid ${position}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 260px, 46vw"
                  // No desktop as fotos estão na primeira dobra: a primeira carrega
                  // com prioridade para não atrasar o LCP.
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  className="size-full object-cover"
                />
                <figcaption className="absolute bottom-2.5 left-2.5 rounded-full bg-sun px-3 py-1 text-sm font-extrabold text-ink">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <Wave className="text-sun" />
      </section>

      <section aria-label="Incluso na diária" className="bg-sun px-5 pb-6 pt-1">
        <CheckList
          items={included}
          className="mx-auto max-w-[75rem] !flex-row flex-wrap justify-center gap-x-8 gap-y-2 text-[1.0625rem] font-extrabold"
        />
      </section>
    </>
  );
}
