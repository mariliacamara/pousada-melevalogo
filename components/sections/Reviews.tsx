import Container from "@/components/ui/Container";
import ReviewCard from "@/components/ui/ReviewCard";
import SectionTitle from "@/components/ui/SectionTitle";

import { reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section
      id="avaliacoes"
      className="avaliacoes"
    >
      <Container>
        <SectionTitle
          eyebrow="Hóspedes"
          title="Quem já ficou, aprovou"
          description="Avaliação média 4.9."
        />

        <div className="rev-grid">
          {reviews.map((review) => (
            <ReviewCard
              key={review.name}
              {...review}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}