import Image from "next/image";
import Link from "next/link";

import WhatsAppLink from "@/components/WhatsAppLink";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { navigation } from "@/lib/data/navigation";
import { site } from "@/lib/site";
import { messages } from "@/lib/whatsapp";
import logo from "@/public/fotos/logo.png";

export default function Header() {
  return (
    <header className="z-40 border-b-2 border-ink bg-white md:sticky md:top-0">
      <div className="wrap flex items-center justify-between gap-4 py-2">
        <Link href="/" aria-label={`${site.name}: início`} className="shrink-0">
          <Image
            src={logo}
            alt={`${site.name}, Araruama, RJ`}
            sizes="80px"
            className="h-[4.5rem] w-auto"
          />
        </Link>

        <nav aria-label="Seções" className="hidden md:block">
          <ul className="flex items-center gap-1 font-bold">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="rounded-full px-3 py-3 hover:bg-mist lg:px-4"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <WhatsAppLink
          message={messages.generic}
          placement="header"
          className="btn btn-pool"
        >
          <WhatsAppIcon className="size-5 shrink-0" />
          <span className="sm:hidden">Reservar</span>
          <span className="hidden sm:inline">Reservar pelo WhatsApp</span>
        </WhatsAppLink>
      </div>
    </header>
  );
}
