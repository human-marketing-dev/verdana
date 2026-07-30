import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/core/Button';

export const NAV_LINKS = [
  { label: 'El proyecto', href: '#proyecto' },
  { label: 'Master plan', href: '#master-plan' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Caseta de ventas', href: '#caseta' },
];

export function SiteHeader() {
  return (
    <header className="vss-header">
      <div className="vss-container vss-header__inner">
        <a href="#inicio" aria-label="Verdana San Sebastián — inicio">
          <Logo layout="horizontal" tone="green" size="sm" />
        </a>
        <nav className="vss-header__nav" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="vss-header__link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <Button size="sm" href="#contacto">
          Agendar visita
        </Button>
      </div>
    </header>
  );
}
