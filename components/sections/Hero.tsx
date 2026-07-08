import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { hero } from "@/lib/data";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" />

      <Container>
        <div className="hero-content">
          <span className="eyebrow">
            {hero.eyebrow}
          </span>

          <h1>
            {hero.title.normal}
            <br />
            <em>{hero.title.highlight}</em>
          </h1>

          <p className="lead">
            {hero.description}
          </p>

          <div className="hero-actions">
            <Button variant="whatsapp">
              Reservar pelo WhatsApp
            </Button>

            <Button
              href="#acomodacoes"
              variant="ghost"
            >
              Ver acomodações
            </Button>
          </div>

          <div className="hero-badges">
            {hero.badges.map((badge: any) => (
              <Badge key={badge}>
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}