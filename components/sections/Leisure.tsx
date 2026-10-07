import Image from "next/image";

import CheckList from "@/components/ui/CheckList";
import { arcade, leisure } from "@/lib/data/leisure";

const tones = { sun: "bg-sun", wall: "bg-wall" };

export default function Leisure() {
  return (
    <section id="lazer" className="section bg-mist">
      <div className="wrap flex flex-col gap-10">
        <div className="flex max-w-[47.5rem] flex-col gap-3">
          <p className="eyebrow text-pool">Lazer</p>
          <h2 className="h2">Diversão para eles. Sossego para vocês.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {leisure.map(({ title, tone, photos, items }) => (
            <article
              key={title}
              className={`flex flex-col gap-5 rounded-[1.75rem] border-2 border-ink p-6 sm:p-7 ${tones[tone]}`}
            >
              <h3 className="font-display text-[2rem] leading-[1.1]">{title}</h3>
              <div className="grid grid-cols-2 gap-3.5">
                {photos.map((photo) => (
                  <Image
                    key={photo.alt}
                    src={photo.src}
                    alt={photo.alt}
                    placeholder="blur"
                    sizes="(min-width: 768px) 260px, 42vw"
                    className="aspect-[3/4] w-full rounded-2xl border-2 border-ink object-cover"
                  />
                ))}
              </div>
              <CheckList items={items} className="text-lg font-bold" />
            </article>
          ))}
        </div>

        <article className="flex flex-wrap items-center gap-x-12 gap-y-8 rounded-[1.75rem] bg-night p-6 text-white sm:p-10">
          <Image
            src={arcade.photo.src}
            alt={arcade.photo.alt}
            placeholder="blur"
            sizes="300px"
            className="aspect-[3/4] w-full max-w-[18.75rem] rounded-[1.125rem] border-4 border-sun object-cover"
          />
          <div className="flex min-w-0 flex-[1_1_22rem] flex-col gap-2.5">
            <p className="eyebrow text-[#ff9a4d]">Player 1 + Player 2</p>
            <h3 className="flex flex-col gap-2.5">
              <span className="font-pixel text-[clamp(5.25rem,13vw,11rem)] font-bold leading-[0.9] text-sun">
                {arcade.count}
              </span>
              <span className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.08]">
                {arcade.title}
              </span>
            </h3>
            <p className="mt-2 max-w-[30em] text-[1.1875rem] leading-normal text-[#e4e1ff]">
              {arcade.text}
            </p>
            <p aria-hidden="true" className="eyebrow mt-2.5">
              Press start
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
