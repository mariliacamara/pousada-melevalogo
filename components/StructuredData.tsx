import { faqs } from "@/lib/data/faq";
import { absoluteUrl, site } from "@/lib/site";

const amenities = [
  "Piscina",
  "Área kids",
  "Cama elástica",
  "Sala de jogos",
  "Arcade retrô",
  "Café da manhã incluso",
  "Estacionamento gratuito",
  "Wi-Fi gratuito",
  "Quartos climatizados",
];

/**
 * Dados estruturados (schema.org) em um único @graph.
 * LodgingBusiness é o que alimenta o painel do negócio no Google;
 * FAQPage repete exatamente as perguntas visíveis na página.
 * Sem aggregateRating: o Google não aceita nota declarada pelo próprio negócio.
 */
export default function StructuredData() {
  const businessId = absoluteUrl("/#pousada");
  const websiteId = absoluteUrl("/#website");

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: site.name,
        inLanguage: site.lang,
        publisher: { "@id": businessId },
      },
      {
        "@type": "LodgingBusiness",
        "@id": businessId,
        name: site.name,
        description: site.description,
        url: site.url,
        telephone: site.phone.e164,
        logo: absoluteUrl("/icon-512.png"),
        image: [
          absoluteUrl("/fotos/pergolado-panoramica.jpg"),
          absoluteUrl("/fotos/piscina.jpg"),
          absoluteUrl("/fotos/quarto-familia.jpg"),
          absoluteUrl("/fotos/kids.jpg"),
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.street} - ${site.address.neighborhood}`,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        hasMap: site.mapsUrl,
        checkinTime: site.checkin,
        checkoutTime: site.checkout,
        currenciesAccepted: "BRL",
        paymentAccepted: site.payment.join(", "),
        amenityFeature: amenities.map((name) => ({
          "@type": "LocationFeatureSpecification",
          name,
          value: true,
        })),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "reservations",
          telephone: site.phone.e164,
          availableLanguage: "Portuguese",
        },
        sameAs: [site.instagram.url],
      },
      {
        "@type": "FAQPage",
        "@id": absoluteUrl("/#faq"),
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // "<" escapado para o JSON nunca conseguir fechar a tag <script>.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
      }}
    />
  );
}
