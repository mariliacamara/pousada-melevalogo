import { whatsappLink } from '@/data/home';

export default function CTASection() {
  return (
    <section className="cta">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2>Fale agora e peça sua disponibilidade</h2>
        <p>
          Reserva feita no WhatsApp. Simples, rápido e pronta para captar
          contatos.
        </p>
        <div className="cta-row" style={{ justifyContent: 'center' }}>
          <a className="btn btn-primary" href={whatsappLink} target="_blank" rel="noreferrer">
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}