'use client';

import Image from 'next/image';
import { whatsappLink } from '@/data/home';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      />

      <div className="hero-overlay" />

      <header className="hero-top">
        <div className="container hero-top-inner">
          <div className="brand">
            <div className="brand-logo">
              <Image
                src="/images/logo.png"
                alt="Pousada Me Leva Logo"
                fill
                priority
                sizes="44px"
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div className="brand-title">
              <strong>Pousada Me Leva Logo</strong>
              <span>Araruama, RJ</span>
            </div>
          </div>

          <nav className="nav" aria-label="Navegação principal">
            <a href="#beneficios">Benefícios</a>
            <a href="#acomodacoes">Acomodações</a>
            <a href="#localizacao">Localização</a>
            <a href="#faq">FAQ</a>
          </nav>
        </div>
      </header>

      <div className="hero-content">
        <h1>Seu refúgio em Araruama</h1>

        <p>
          Desfrute de dias tranquilos à beira da Lagoa de Araruama, com conforto,
          atendimento acolhedor e a experiência perfeita para relaxar.
        </p>

        <a
          className="hero-button"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Reservar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}