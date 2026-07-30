import Image from 'next/image';
import type { CSSProperties } from 'react';

import { Eyebrow } from '@/components/brand/Eyebrow';
import { Badge } from '@/components/core/Badge';

/* Legend swatches are illustrative plan colours, not brand tokens — they key
   the drawing, so they stay literal here rather than becoming design tokens. */
const LEGEND = [
  { color: '#9DB07F', label: 'Áreas verdes y parque lineal' },
  { color: '#8FB6C4', label: 'Espejos de agua' },
  { color: '#D9D2C0', label: 'Lotes residenciales' },
  { color: '#B9BBB2', label: 'Vialidades y andadores' },
];

const STREETS = ['Arturo B. de la Garza', 'Lic. Pablo Quiroga', 'Francisco Cárdenas', 'San Juan'];

export function MasterPlan() {
  return (
    <section className="vss-plan" id="master-plan">
      <div className="vss-container vss-plan__inner">
        <div>
          <Eyebrow tone="on-brand" rule>
            Master plan
          </Eyebrow>
          <h2 className="vss-section-title" data-on-brand="true">
            Trazado en equilibrio con el paisaje
          </h2>
          <p className="vss-plan__lede">
            El conjunto se organiza alrededor de un parque lineal con espejos de agua y vegetación nativa, con
            vialidades arboladas que conectan cada manzana con las áreas comunes.
          </p>

          <ul className="vss-plan__legend">
            {LEGEND.map((entry) => (
              <li key={entry.label} className="vss-plan__legend-item">
                <span
                  aria-hidden="true"
                  className="vss-plan__swatch"
                  style={{ '--vss-swatch': entry.color } as CSSProperties}
                />
                {entry.label}
              </li>
            ))}
          </ul>

          <span className="vss-plan__label" id="colindancias">
            Colindancias
          </span>
          <ul className="vss-plan__streets" aria-labelledby="colindancias">
            {STREETS.map((street) => (
              <li key={street}>
                <Badge variant="outline">{street}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <div className="vss-plan__frame">
          <Image
            className="vss-plan__image"
            src="/renders/master-plan.webp"
            alt="Master plan de Verdana San Sebastián: manzanas residenciales alrededor de un parque lineal con espejos de agua, con las vialidades Arturo B. de la Garza, Lic. Pablo Quiroga, Francisco Cárdenas y San Juan como colindancias"
            width={1225}
            height={1284}
            sizes="(max-width: 980px) 90vw, 640px"
          />
        </div>
      </div>
    </section>
  );
}
