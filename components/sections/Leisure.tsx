import Container from "@/components/ui/Container";
import LeisureCard from "@/components/ui/LeisureCard";
import SectionTitle from "@/components/ui/SectionTitle";

import { leisure } from "@/lib/data";

export default function Leisure() {
  return (
    <section
      id="lazer"
      className="lazer"
    >
      <Container>
        <SectionTitle
          eyebrow="Área de lazer"
          title="Entretenimento para todas as idades"
          description="Uma das pousadas mais completas de Araruama."
        />

        <div className="lazer-grid">
          {leisure.map((item) => (
            <LeisureCard
              key={item.image}
              {...item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}