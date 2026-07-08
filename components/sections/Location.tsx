import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import LocationTag from "@/components/ui/LocationTag";
import RouteItem from "@/components/ui/RouteItem";
import Button from "@/components/ui/Button";

import { location } from "@/lib/data";

export default function Location() {
  const phone = "5522992075703";
  const message = "Olá! Gostaria de receber a localização da Pousada Me Leva Logo.";

  return (
    <section
      id="localizacao"
      className="localizacao"
    >
      <Container>
        <SectionTitle
          eyebrow="Localização"
          title="Sua hospedagem em Araruama"
        />

        <div className="loc-card">
          <div className="loc-info">
            <h2>{location.title}</h2>

            <p>{location.description}</p>

            <div className="loc-tags">
              {location.tags.map((tag) => (
                <LocationTag
                  key={tag.text}
                  {...tag}
                />
              ))}
            </div>

            <div className="route-list">
              {location.routes.map((route) => (
                <RouteItem
                  key={route.title}
                  {...route}
                />
              ))}
            </div>

            <Button
              variant="whatsapp"
              href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
              target="_blank"
            >
              Pedir localização
            </Button>
          </div>

          <div className="loc-map">
            <iframe
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.791534920721!2d-42.2865589!3d-22.8472009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x976c45411eb0d9%3A0xc1ed3b850188c7b1!2sR.%20Camorim%2C%201185%20-%20Novo%20Horizonte%2C%20Araruama%20-%20RJ%2C%2028970-000!5e0!3m2!1spt-BR!2sbr!4v1780150654227!5m2!1spt-BR!2sbr"
              title="Mapa"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}