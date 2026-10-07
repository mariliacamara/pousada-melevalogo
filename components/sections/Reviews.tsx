import { googleRating, reviews } from "@/lib/data/reviews";

/** Não renderiza nada enquanto não houver avaliações reais em lib/data/reviews.ts. */
export default function Reviews() {
  if (reviews.length === 0) return null;

  return (
    <section id="avaliacoes" className="section bg-sun">
      <div className="wrap flex flex-col gap-9">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div className="flex max-w-[40rem] flex-col gap-3">
            <p className="eyebrow">High scores</p>
            <h2 className="h2">Quem já veio, conta</h2>
          </div>

          {googleRating && (
            <a
              href={googleRating.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-[1.25rem] border-2 border-ink bg-white px-5 py-3.5"
            >
              <span className="font-pixel text-4xl font-bold leading-none">
                {googleRating.value}
              </span>
              <span className="text-[0.9375rem] leading-snug">
                <strong className="block">no Google</strong>
                {googleRating.count} avaliações · ver todas
              </span>
            </a>
          )}
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {reviews.map(({ text, author, detail }) => (
            <li key={`${author}-${text}`}>
              <figure className="flex h-full flex-col gap-3.5 rounded-[1.25rem] border-2 border-ink bg-white p-6">
                <blockquote className="text-lg font-semibold">“{text}”</blockquote>
                <figcaption className="mt-auto text-[0.9375rem] text-ink-soft">
                  <strong className="text-ink">{author}</strong>
                  {detail ? ` · ${detail}` : ""}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
