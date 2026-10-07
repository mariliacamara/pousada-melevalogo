/**
 * Fonte única dos dados do negócio.
 * Metatags, JSON-LD, links de WhatsApp, rodapé e sitemap leem daqui,
 * então telefone, endereço e horários nunca ficam divergentes entre si.
 */

const DEFAULT_URL = "https://www.pousadamelevalogo.com.br";

export const site = {
  name: "Pousada Me Leva Logo",
  shortName: "Me Leva Logo",
  url: (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_URL).replace(/\/+$/, ""),
  locale: "pt_BR",
  lang: "pt-BR",

  title: "Pousada em Araruama com piscina e área kids | Me Leva Logo",
  description:
    "Pousada para família em Araruama, perto da Praia do Barbudo: piscina, área kids, arcade com 980 jogos e café da manhã incluso. Reserve direto pelo WhatsApp.",

  phone: {
    whatsapp: "5522992075703",
    e164: "+5522992075703",
    display: "(22) 99207-5703",
  },

  address: {
    street: "R. Camorim, 1185",
    neighborhood: "Novo Horizonte",
    city: "Araruama",
    region: "RJ",
    postalCode: "28970-000",
    country: "BR",
  },

  /** Coordenadas do endereço no Google Maps. */
  geo: { latitude: -22.8472009, longitude: -42.2865589 },

  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Camorim%2C+1185+-+Novo+Horizonte%2C+Araruama+-+RJ",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.791534920721!2d-42.2865589!3d-22.8472009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x976c45411eb0d9%3A0xc1ed3b850188c7b1!2sR.%20Camorim%2C%201185%20-%20Novo%20Horizonte%2C%20Araruama%20-%20RJ%2C%2028970-000!5e0!3m2!1spt-BR!2sbr",

  checkin: "14:00",
  checkout: "12:00",
  payment: ["Pix", "Cartão de débito", "Cartão de crédito"],

  instagram: {
    handle: "@melevalogopousada",
    url: "https://instagram.com/melevalogopousada",
  },
} as const;

/**
 * Só o deploy de produção pode ser indexado e medido.
 * Na Vercel, cada branch ganha uma URL de preview: sem esta trava o Google
 * indexaria cópias do site e o GA4/Pixel contariam visitas de teste.
 */
export const isProduction = process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV === "production"
  : process.env.NODE_ENV === "production";

export const absoluteUrl = (path = "/") =>
  `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
