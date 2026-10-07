import WhatsAppLink from "@/components/WhatsAppLink";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { messages } from "@/lib/whatsapp";

/**
 * Barra fixa de WhatsApp, só no celular: o botão fica na zona do polegar
 * durante toda a rolagem. No desktop o cabeçalho fixo já cumpre esse papel.
 */
export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-ink bg-white p-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] md:hidden">
      <WhatsAppLink
        message={messages.generic}
        placement="mobile_bar"
        className="btn btn-sun w-full rounded-2xl text-lg"
      >
        <WhatsAppIcon className="size-5 shrink-0" />
        Consultar disponibilidade
      </WhatsAppLink>
    </div>
  );
}
