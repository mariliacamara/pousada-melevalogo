import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="cta-final">
      <Container>
        <span className="eyebrow">
          Reserva sem complicação
        </span>

        <h2>
          Fale agora e peça sua disponibilidade
        </h2>

        <p>
          Reserva feita diretamente pelo WhatsApp. Simples, rápida e sem taxas.
        </p>

        <Button
          variant="whatsapp"
          className="cta-button"
        >
          Chamar no WhatsApp
        </Button>
      </Container>
    </section>
  );
}