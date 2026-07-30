import Image from 'next/image';

import { Eyebrow } from '@/components/brand/Eyebrow';
import { Button } from '@/components/core/Button';

export function Hero() {
  return (
    <section className="vss-container vss-hero" id="inicio">
      <div className="vss-panel vss-hero__panel">
        <Image
          className="vss-panel__media"
          src="/renders/entrance.jpg"
          alt="Acceso a Verdana San Sebastián al atardecer, con la barda de piedra iluminada y la caseta de acceso"
          fill
          sizes="(max-width: 1450px) 100vw, 1400px"
          /* LCP element. Next 16 deprecated `priority`; `loading="eager"` +
             `fetchPriority="high"` is the replacement for an above-the-fold
             hero (`preload` is not for images that could vary by viewport). */
          loading="eager"
          fetchPriority="high"
        />
        <div className="vss-hero__scrim" />
        <div className="vss-panel__content vss-hero__content">
          <Eyebrow tone="on-brand" rule>
            Guadalupe · Nuevo León
          </Eyebrow>
          <h1 className="vss-hero__title">Tu hogar junto a la naturaleza</h1>
          <p className="vss-hero__lede">
            Un desarrollo residencial cerrado a un paso del río La Silla, donde la arquitectura y el paisaje conviven.
          </p>
          <div className="vss-hero__actions">
            <Button onBrand size="lg" href="#contacto">
              Agenda tu visita
            </Button>
            <Button variant="secondary" onBrand size="lg" href="#master-plan">
              Conoce el master plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
