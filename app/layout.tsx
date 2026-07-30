import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';

import './globals.css';

/*
 * Brand fonts are unknown; these are the design system's flagged Google Fonts
 * substitutes (see the CAVEATS section of its readme). next/font self-hosts
 * them, so there is no request to Google and no layout shift. Replace with
 * next/font/local if the licensed brand faces become available.
 */
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});

/* Absolute URLs for OG images. Set NEXT_PUBLIC_SITE_URL in the deploy env. */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Verdana San Sebastián — Tu hogar junto a la naturaleza',
    template: '%s · Verdana San Sebastián',
  },
  description:
    '69 residencias de autor en Av. San Sebastián, col. Los Lermas, Guadalupe, Nuevo León. Un desarrollo cerrado a un paso del río La Silla.',
  applicationName: 'Verdana San Sebastián',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'Verdana San Sebastián',
    title: 'Verdana San Sebastián — Tu hogar junto a la naturaleza',
    description:
      '69 residencias de autor a un paso del río La Silla, en Guadalupe, Nuevo León.',
    images: [{ url: '/brand/logo-lockup-gold-on-green.jpeg', width: 1024, height: 1024 }],
  },
};

export const viewport: Viewport = {
  themeColor: '#2C4A34',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-MX"
      className={`${cormorant.variable} ${montserrat.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
