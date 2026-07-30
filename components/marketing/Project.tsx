import { Eyebrow } from '@/components/brand/Eyebrow';
import { Stat } from '@/components/core/Stat';

const STATS = [
  { value: '69', label: 'Viviendas' },
  { value: '19,610 m²', label: 'Terreno' },
  { value: '+16,000 m²', label: 'Construcción' },
  { value: '1', label: 'Lote comercial' },
];

export function Project() {
  return (
    <section className="vss-container vss-project" id="proyecto">
      <div className="vss-project__intro">
        <div>
          <Eyebrow rule>El proyecto</Eyebrow>
          <h2 className="vss-section-title">Un entorno pensado para vivir cerca de lo natural</h2>
        </div>
        <div className="vss-project__body">
          <p className="vss-prose">
            Verdana San Sebastián es un desarrollo residencial ubicado en Av. San Sebastián, col. Los Lermas, en
            Guadalupe, Nuevo León, con cercanía directa al río La Silla.
          </p>
          <p className="vss-prose">
            69 viviendas y un lote comercial en un terreno de 19,610 m² con uso de suelo habitacional, rodeadas de áreas
            verdes, andadores y un parque lineal.
          </p>
        </div>
      </div>
      <div className="vss-project__stats">
        {STATS.map((stat) => (
          <Stat key={stat.label} {...stat} tone="green" align="left" size="sm" />
        ))}
      </div>
    </section>
  );
}
