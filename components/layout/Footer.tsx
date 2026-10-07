import Image from "next/image";
import Link from "next/link";

import CookiePreferences from "@/components/analytics/CookiePreferences";
import WhatsAppLink from "@/components/WhatsAppLink";
import { navigation } from "@/lib/data/navigation";
import { site } from "@/lib/site";
import { messages } from "@/lib/whatsapp";
import logo from "@/public/fotos/logo.png";

export default function Footer({ showCookiePreferences }: { showCookiePreferences: boolean }) {
  const { address } = site;

  return (
    // pb extra no celular: a barra fixa de WhatsApp não cobre o fim do rodapé.
    <footer className="bg-ink pb-28 pt-12 text-white md:pb-8">
      <div className="wrap flex flex-wrap items-start justify-between gap-x-12 gap-y-8">
        <div className="flex min-w-0 flex-[1_1_20rem] items-center gap-5">
          <Image src={logo} alt="" sizes="96px" className="h-24 w-auto shrink-0" />
          <address className="text-base not-italic">
            {address.street} · {address.neighborhood}
            <br />
            {address.city}, {address.region} · CEP {address.postalCode}
            <br />
            Pertinho da Praia do Barbudo
          </address>
        </div>

        <nav aria-label="Rodapé">
          <ul className="flex flex-col font-bold">
            {navigation.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className="block py-2 underline-offset-4 hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-col font-bold">
          <li>
            <WhatsAppLink
              message={messages.generic}
              placement="footer"
              className="block py-2 text-sun underline-offset-4 hover:underline"
            >
              WhatsApp {site.phone.display}
            </WhatsAppLink>
          </li>
          <li>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 underline-offset-4 hover:underline"
            >
              Instagram {site.instagram.handle}
            </a>
          </li>
        </ul>
      </div>

      <div className="wrap mt-8">
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-[#6b4a35] pt-5 text-sm text-[#e8d9cc]">
          <p>
            © {new Date().getFullYear()} {site.name} · {address.city}, {address.region}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/privacidade" className="py-1 underline underline-offset-4">
              Privacidade
            </Link>
            {showCookiePreferences && (
              <CookiePreferences className="cursor-pointer py-1 underline underline-offset-4" />
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
