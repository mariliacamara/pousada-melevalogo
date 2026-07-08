import { amenities, highlights } from '@/data/home';

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="section">
      <div className="container">
        <div className="section-heading">
          <p>Benefícios</p>
          <h2>Por que se hospedar conosco</h2>
          <div className="sub">
            Conforto, atendimento próximo e a tranquilidade que você procura para aproveitar Araruama da melhor forma.
          </div>
        </div>

        <div className="card-grid three">
          {highlights.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="checklist" aria-label="Comodidades">
          {amenities.map((item) => (
            <span className="check" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}