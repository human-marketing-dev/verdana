import Image from 'next/image';

import { Eyebrow } from '@/components/brand/Eyebrow';

export function Identity() {
  return (
    <section className="vss-identity" id="identidad">
      <div className="vss-container vss-identity__inner">
        <div>
          <Eyebrow rule>Identidad</Eyebrow>
          <h2 className="vss-section-title">Una marca que respira naturaleza</h2>
          <p className="vss-prose vss-identity__prose">
            El emblema de la hoja, el verde bosque y el oro acompañan cada punto de contacto del desarrollo — desde la
            señalética en vialidades hasta la caseta de ventas.
          </p>
          <p className="vss-prose vss-identity__prose">
            Una identidad sobria y cálida que guía al visitante hasta su nuevo hogar.
          </p>
        </div>
        <figure className="vss-identity__figure">
          <Image
            className="vss-identity__image"
            src="/renders/banners-verdana.jpeg"
            alt="Señalética de Verdana San Sebastián: banderolas verdes con el emblema de la hoja en dorado"
            width={1600}
            height={1200}
            sizes="(max-width: 900px) 100vw, 620px"
          />
        </figure>
      </div>
    </section>
  );
}
