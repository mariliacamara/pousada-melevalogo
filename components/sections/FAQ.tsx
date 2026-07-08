import Container from "@/components/ui/Container";
import FAQItem from "@/components/ui/FAQItem";
import SectionTitle from "@/components/ui/SectionTitle";

import { faqs } from "@/lib/data";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="faq"
    >
      <Container>
        <SectionTitle
          eyebrow="Perguntas frequentes"
          title="Tire suas dúvidas antes de reservar"
          description="Respondemos as perguntas mais comuns."
        />

        <div className="faq-list">
          {faqs.map((faq: any) => (
            <FAQItem
              key={faq.question}
              {...faq}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}