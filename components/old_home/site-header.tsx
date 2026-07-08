import { navLinks } from '@/data/home';

export default function SiteHeader() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="brand">
          <div className="brand-mark">MLL</div>
          <div className="brand-title">
            <strong>Pousada Me Leva Logo</strong>
            <span>Araruama, RJ</span>
          </div>
        </div>

        <nav className="nav" aria-label="Navegação principal">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}