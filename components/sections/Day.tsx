import Image from "next/image";

import { day } from "@/lib/data/day";

export default function Day() {
  return (
    <section id="dia" className="section bg-white">
      <div className="wrap flex flex-col gap-11">
        <div className="flex max-w-[45rem] flex-col gap-3">
          <p className="eyebrow text-pool">Do café ao arcade</p>
          <h2 className="h2">Um dia na Me Leva Logo</h2>
          <p className="text-[1.1875rem] text-ink-soft">
            Ninguém precisa pegar o carro para se divertir. O dia inteiro cabe dentro da
            pousada, e a lagoa fica logo ali.
          </p>
        </div>

        <ol className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
          {day.map(({ period, title, text, photo }, index) => (
            <li key={title} className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <span className="rounded-lg bg-ink px-2 py-1 font-pixel font-bold text-sun">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-extrabold uppercase tracking-[0.08em] text-ink-soft">
                  {period}
                </span>
              </div>

              {photo ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 224px, (min-width: 768px) 30vw, 46vw"
                  className="aspect-[3/4] w-full rounded-[1.125rem] object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="flex aspect-[3/4] w-full flex-col justify-end overflow-hidden rounded-[1.125rem] bg-pool text-sun"
                >
                  <p className="px-4 pb-4 font-display text-2xl leading-tight text-white">
                    Lagoa de Araruama
                  </p>
                  <svg viewBox="0 0 300 150" preserveAspectRatio="none" className="h-2/5 w-full">
                    <path
                      fill="currentColor"
                      d="M0 30 C 40 5 80 55 150 30 S 260 5 300 30 V150 H0 Z"
                    />
                    <path
                      fill="#fff"
                      opacity="0.9"
                      d="M0 75 C 50 50 100 100 150 75 S 250 50 300 75 V150 H0 Z"
                    />
                    <path
                      fill="var(--color-pool-deep)"
                      d="M0 115 C 40 95 110 135 150 115 S 260 95 300 115 V150 H0 Z"
                    />
                  </svg>
                </div>
              )}

              <h3 className="mt-1 text-[1.3125rem] font-extrabold leading-tight">{title}</h3>
              <p className="text-base text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
