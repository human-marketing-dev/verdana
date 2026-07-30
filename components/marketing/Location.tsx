import { Eyebrow } from '@/components/brand/Eyebrow';

const POINTS = [
  { title: 'Río La Silla', desc: 'Cercanía directa al cauce, con andadores y áreas verdes.' },
  { title: 'Av. San Sebastián', desc: 'Acceso principal sobre vialidad consolidada en Los Lermas.' },
  { title: 'Guadalupe, N.L.', desc: 'Conectividad con la zona metropolitana de Monterrey.' },
];

export function Location() {
  return (
    <section className="vss-container vss-location" id="ubicacion">
      <Eyebrow rule>Ubicación</Eyebrow>
      <h2 className="vss-section-title">Donde la ciudad se encuentra con el río</h2>
      <p className="vss-section-lede vss-location__lede">
        Una posición privilegiada que combina la tranquilidad del entorno natural con la cercanía a los servicios de la
        ciudad.
      </p>
      <div className="vss-location__grid">
        {POINTS.map((point) => (
          <div key={point.title} className="vss-location__point">
            <h3 className="vss-location__point-title">{point.title}</h3>
            <p className="vss-location__point-desc">{point.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
