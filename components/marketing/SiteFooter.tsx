import { Logo } from '@/components/brand/Logo';

const COLUMNS = [
  {
    heading: 'Desarrollo',
    items: [
      { label: 'El proyecto', href: '#proyecto' },
      { label: 'Master plan', href: '#master-plan' },
      { label: 'Ubicación', href: '#ubicacion' },
      { label: 'Caseta de ventas', href: '#caseta' },
    ],
  },
  {
    heading: 'Contacto',
    items: [
      { label: 'Agendar visita', href: '#contacto' },
      { label: 'WhatsApp', href: '#contacto' },
      { label: 'Aviso de privacidad', href: '#contacto' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="vss-footer">
      <div className="vss-container vss-footer__inner">
        <div className="vss-footer__top">
          <Logo size="md" tone="gold" tagline />
          <div className="vss-footer__columns">
            {COLUMNS.map((column) => (
              <nav key={column.heading} className="vss-footer__column" aria-label={column.heading}>
                <span className="vss-footer__heading">{column.heading}</span>
                {column.items.map((item) => (
                  <a key={item.label} className="vss-footer__link" href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
            ))}
          </div>
        </div>
        <div className="vss-footer__base">
          <span className="vss-footer__fineprint">© 2026 Verdana San Sebastián · Un desarrollo de Strata</span>
          <span className="vss-footer__fineprint">Imágenes con fines ilustrativos.</span>
        </div>
      </div>
    </footer>
  );
}
