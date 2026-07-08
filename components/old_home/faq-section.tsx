'use client';

import * as Accordion from '@radix-ui/react-accordion';

const faqs = [
  {
    q: 'Como faço a reserva?',
    a: 'A reserva é feita diretamente pelo WhatsApp. Basta enviar uma mensagem para consultar disponibilidade e valores.',
  },
  {
    q: 'Quais são os horários de check-in e check-out?',
    a: 'Para garantir o conforto de todos os hóspedes, o check-in é realizado a partir das 14h e o check-out até às 12h. Em caso de necessidade especial, consulte nossa equipe.',
  },
  {
    q: 'A pousada oferece café da manhã?',
    a: 'Sim, oferecemos café da manhã para tornar sua estadia mais confortável.',
  },
  {
    q: 'Tem estacionamento?',
    a: 'Sim, a pousada conta com estacionamento para maior comodidade dos hóspedes.',
  },
  {
    q: 'A pousada aceita crianças?',
    a: 'Sim, recebemos famílias e casais. Consulte as condições no momento da reserva.',
  },
  {
    q: 'Quais formas de pagamento são aceitas?',
    a: 'Aceitamos pagamentos via Pix, cartão de débito e cartão de crédito. Caso tenha alguma dúvida, entre em contato conosco pelo WhatsApp.',
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-heading">
          <p>Perguntas frequentes</p>
          <h2>Tire as dúvidas antes de reservar</h2>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          className="faq-accordion"
        >
          {faqs.map((item, index) => (
            <Accordion.Item
              key={item.q}
              value={`item-${index}`}
              className="faq-item"
            >
              <Accordion.Header>
                <Accordion.Trigger className="faq-trigger">
                  <span>{item.q}</span>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="faq-content">
                <p>{item.a}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}