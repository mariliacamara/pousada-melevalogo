import { accommodations } from "@/lib/data";

import GalleryItem from "@/components/ui/GalleryItem";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function Accommodations() {
  return (
    <section className="acomodacoes" id="acomodacoes">
      <div className="container">
        <SectionTitle
          eyebrow="Acomodações"
          title="Escolha o tipo ideal de estadia"
          description="Quartos para casais, famílias e grupos."
        />

        <div className="gallery-grid">
          {accommodations.map((room: any) => (
            <GalleryItem
              key={room.id}
              {...room}
            />
          ))}
        </div>

        <div className="center">
          <Button variant="ocean">
            Consultar disponibilidade
          </Button>
        </div>
      </div>
    </section>
  );
}