import { site } from "@/lib/site";

export const whatsappUrl = (message: string) =>
  `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;

export const messages = {
  generic: "Olá! Vim pelo site e quero reservar na Pousada Me Leva Logo.",
  location: "Olá! Pode me enviar a localização da Pousada Me Leva Logo?",
  group:
    "Olá! Vim pelo site e quero consultar hospedagem para um grupo na Pousada Me Leva Logo.",
  room: (name: string) =>
    `Olá! Vim pelo site e quero consultar o ${name} na Pousada Me Leva Logo.`,
};

const brDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return y && m && d ? `${d}/${m}/${y}` : "";
};

export type BookingInput = {
  checkin: string;
  checkout: string;
  adults: number;
  kids: number;
};

/** Monta a mensagem de consulta: a conversa já chega com datas e hóspedes. */
export function bookingMessage({ checkin, checkout, adults, kids }: BookingInput) {
  const dates =
    checkin && checkout
      ? `de ${brDate(checkin)} a ${brDate(checkout)}`
      : checkin
        ? `a partir de ${brDate(checkin)}`
        : "datas a combinar";
  const adultsTxt = adults === 1 ? "1 adulto" : `${adults} adultos`;
  const kidsTxt =
    kids === 0 ? "sem crianças" : kids === 1 ? "1 criança" : `${kids} crianças`;

  return `Olá! Vim pelo site e quero consultar disponibilidade na Pousada Me Leva Logo: ${dates}, ${adultsTxt}, ${kidsTxt}.`;
}
