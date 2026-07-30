import Image from 'next/image';

import { Eyebrow } from '@/components/brand/Eyebrow';
import { Button } from '@/components/core/Button';

export function SalesOffice() {
  return (
    <section className="vss-container vss-sales" id="caseta">
      <div className="vss-panel vss-sales__panel">
        <Image
          className="vss-panel__media"
          src="/renders/caseta-ventas.webp"
          alt="Caseta de ventas de Verdana San Sebastián al atardecer, con la barda de piedra grabada con el emblema y la sierra al fondo"
          fill
          sizes="(max-width: 1450px) 100vw, 1400px"
        />
        <div className="vss-sales__scrim" />
        <div className="vss-panel__content vss-sales__content">
          <Eyebrow tone="on-brand" rule>
            Caseta de ventas
          </Eyebrow>
          <h2 className="vss-sales__title">Conoce Verdana en persona</h2>
          <p className="vss-sales__lede">
            Visita nuestra caseta de ventas y recorre el master plan del desarrollo con un asesor.
          </p>
          <p className="vss-sales__address">Av. San Sebastián, col. Los Lermas · Guadalupe, Nuevo León</p>
          <Button onBrand size="lg" href="#contacto">
            Agenda tu visita
          </Button>
        </div>
      </div>
    </section>
  );
}
