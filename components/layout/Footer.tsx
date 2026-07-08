// components/layout/Footer.tsx

import Image from "next/image";

const navigation = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Área de Lazer", href: "#lazer" },
  { label: "Localização", href: "#localizacao" },
  { label: "FAQ", href: "#faq" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/melevalogopousada",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
  },
];

export default function Footer() {
  const phone = "5522992075703";

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Image
                src="/images/logo.png"
                alt="Pousada Me Leva Logo"
                width={180}
                height={80}
              />
            </div>

            <p>
              R. Camorim, 1185 -
              Araruama, Rio de Janeiro
              <br />
              Próximo à Praia do Barbudo
            </p>
          </div>

          <div className="footer-col">
            <h4>Navegação</h4>

            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <h4>Contato</h4>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              (22) 99207-5703
            </a>
          </div>

          <div className="footer-col">
            <h4>Redes Sociais</h4>

            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Pousada Me Leva Logo — Araruama, RJ
          </span>

          <span>Praia do Barbudo · Lagoa de Araruama</span>
        </div>
      </div>
    </footer>
  );
}