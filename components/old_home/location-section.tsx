export default function LocationSection() {
  return (
    <section id="localizacao" className="section">
      <div className="container">
        <div className="location-grid">
          <div className="location-panel">
            <div className="pill">Localização</div>
            <h2
              style={{
                margin: '0 0 12px',
                fontSize: 'clamp(1.9rem, 4vw, 3rem)',
                lineHeight: 1.04,
              }}
            >
              Sua hospedagem em Araruama
            </h2>
            <p style={{ margin: 0, color: 'rgba(255,255,255,0.82)' }}>
              Localizada em uma região tranquila de Araruama, a Pousada Me Leva Logo oferece conforto, praticidade e fácil acesso aos principais pontos da cidade. O lugar ideal para quem deseja relaxar e aproveitar tudo o que a região tem a oferecer.
            </p>

            <div className="checklist">
              <span className="check">Próximo à Praia do Barbudo</span>
              <span className="check">Região tranquila</span>
              <span className="check">Ideal para famílias e casais</span>
              <span className="check">Fácil acesso à cidade</span>
            </div>
          </div>

          <iframe
            title="Mapa de Araruama"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.791534920721!2d-42.2865589!3d-22.8472009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x976c45411eb0d9%3A0xc1ed3b850188c7b1!2sR.%20Camorim%2C%201185%20-%20Novo%20Horizonte%2C%20Araruama%20-%20RJ%2C%2028970-000!5e0!3m2!1spt-BR!2sbr!4v1780150654227!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}