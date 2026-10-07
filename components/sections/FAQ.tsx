import { ChevronDown } from "lucide-react";

import { faqs } from "@/lib/data/faq";

/**
 * <details> nativo: abre e fecha sem JavaScript, funciona no teclado e o
 * texto das respostas já está no HTML que o Google lê.
 */
export default function FAQ() {
  return (
    <section id="duvidas" className="section bg-white">
      <div className="wrap flex max-w-[51.25rem] flex-col gap-8">
        <h2 className="h2">Antes de arrumar a mala</h2>
        <div className="flex flex-col gap-3">
          {faqs.map(({ question, answer }, index) => (
            <details
              key={question}
              open={index === 0}
              className="group rounded-2xl border-2 border-ink px-5"
            >
              <summary className="flex min-h-[3.75rem] items-center justify-between gap-4 py-3 text-[1.1875rem] font-extrabold leading-snug">
                <h3>{question}</h3>
                <ChevronDown
                  aria-hidden="true"
                  strokeWidth={2.5}
                  className="size-6 shrink-0 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="pb-[1.125rem] text-ink-soft">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
