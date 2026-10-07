import WhatsAppLink from "@/components/WhatsAppLink";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import Wave from "@/components/ui/Wave";
import { site } from "@/lib/site";
import { messages } from "@/lib/whatsapp";

export default function CTA() {
  return (
    <section className="bg-wall text-ink">
      <Wave flip className="text-white" />
      <div className="wrap flex max-w-[56rem] flex-col items-center gap-[1.375rem] pb-[5.5rem] pt-12 text-center">
        <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.04] text-balance">
          As crianças já escolheram. Falta só a data.
        </h2>
        <p className="max-w-[30em] text-xl font-semibold">
          Mande as datas pelo WhatsApp e a gente responde com a disponibilidade e o valor.
        </p>
        <WhatsAppLink
          message={messages.generic}
          placement="cta_final"
          className="btn btn-ink min-h-[3.75rem] px-8 text-xl"
        >
          <WhatsAppIcon className="size-6 shrink-0" />
          Chamar no WhatsApp · {site.phone.display}
        </WhatsAppLink>
      </div>
    </section>
  );
}
