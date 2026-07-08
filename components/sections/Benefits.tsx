import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import BenefitCard from "@/components/ui/BenefitCard";
import Tag from "@/components/ui/Tag";

import {
  benefits,
  benefitTags,
} from "@/lib/data";

export default function Benefits() {
  return (
    <section
      className="beneficios"
      id="beneficios"
    >
      <Container>
        <SectionTitle
          eyebrow="Benefícios"
          title="Por que se hospedar conosco"
          description="Conforto, atendimento próximo e a tranquilidade que você procura."
        />

        <div className="benef-grid">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              {...benefit}
            />
          ))}
        </div>

        <div className="tags-row">
          {benefitTags.map((tag) => (
            <Tag key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      </Container>
    </section>
  );
}