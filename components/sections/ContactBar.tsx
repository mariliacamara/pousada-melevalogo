import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function ContactBar() {
  return (
    <Container>
      <div className="contact-bar">
        <div className="contact-bar-text">
          <h3>Reserve direto com a gente — sem taxa extra</h3>

          <p>
            É só mandar uma mensagem. Respondemos rapidinho e ajudamos você a
            escolher o melhor quarto.
          </p>
        </div>

        <div className="contact-phone">
          (22) 99207-5703
        </div>

        <Button variant="whatsapp">
          Chamar no WhatsApp
        </Button>
      </div>
    </Container>
  );
}