import Image from "next/image";

import Container from "@/components/ui/Container";
import StatCard from "@/components/ui/StatCard";

import { about } from "@/lib/data";

export default function About() {
  return (
    <section
      id="sobre"
      className="sobre"
    >
      <Container>
        <div className="sobre-grid">
          <div className="sobre-photo">
            <Image
              src={about.image}
              alt={about.title}
              width={700}
              height={600}
            />
          </div>

          <div className="sobre-text">
            <span className="eyebrow">
              {about.eyebrow}
            </span>

            <h2>{about.title}</h2>

            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}

            <div className="stats-row">
              {about.stats.map((stat) => (
                <StatCard
                  key={stat.label}
                  {...stat}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}