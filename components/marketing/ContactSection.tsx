'use client';

import { useState } from 'react';

import { Eyebrow } from '@/components/brand/Eyebrow';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/core/Button';
import { Input } from '@/components/forms/Input';

/*
 * Lead capture. The form currently only flips to the success state locally —
 * nothing is submitted anywhere. Wire the submit handler to a Server Action or
 * CRM endpoint before launch, and add the privacy notice the copy promises.
 */
export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="vss-contact" id="contacto">
      <div className="vss-container vss-contact__inner">
        <div>
          <Eyebrow rule>Contacto</Eyebrow>
          <h2 className="vss-section-title">Solicita información</h2>
          <p className="vss-contact__lede">
            Déjanos tus datos y un asesor te contactará en menos de 24 horas con la información del desarrollo.
          </p>
        </div>

        <div className="vss-contact__panel">
          {sent ? (
            <div className="vss-contact__success" role="status">
              <Logo layout="emblem" tone="green" size="md" />
              <h3 className="vss-contact__success-title">¡Gracias!</h3>
              <p className="vss-contact__success-body">Un asesor te contactará muy pronto.</p>
            </div>
          ) : (
            <form
              className="vss-contact__form"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <Input label="Nombre" name="nombre" autoComplete="name" placeholder="Tu nombre completo" required />
              <Input
                label="Correo"
                name="correo"
                type="email"
                autoComplete="email"
                placeholder="correo@ejemplo.com"
                required
              />
              <Input label="Teléfono" name="telefono" type="tel" autoComplete="tel" placeholder="81 0000 0000" />
              <Button type="submit" full size="lg" className="vss-contact__submit">
                Solicitar información
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
