import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  const phone = "5522992075703";
  const message = "Olá! Quero fazer uma reserva na Pousada Me Leva Logo!";

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
          href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
          target="_blank"
        >
          Chamar no WhatsApp
        </Button>
      </Container>
    </section>
  );
}