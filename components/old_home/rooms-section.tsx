import { rooms } from '@/data/home';

export default function RoomsSection() {
  return (
    <section id="acomodacoes" className="section">
      <div className="container">
        <div className="section-heading">
          <p>Acomodações</p>
          <h2>Escolha o tipo ideal de estadia</h2>
        </div>

        <div className="gallery" aria-label="Galeria de acomodações">
          {rooms.map((room, index) => (
            <article className="gallery-item" key={room.title}>
              <span>
                {index + 1}. {room.title} — {room.text}
              </span>
            </article>
          ))}
          <article className="gallery-item">
            <span>Área externa / descanso</span>
          </article>
          <article className="gallery-item">
            <span>Café da manhã / atendimento</span>
          </article>
        </div>
      </div>
    </section>
  );
}