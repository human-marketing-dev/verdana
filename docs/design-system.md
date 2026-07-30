# Verdana San Sebastián — Design System

> Synced from the Claude Design project **"Verdana San Sebastián Design System"**
> (`f20bbcf9-4748-43e8-8c17-9dcf1270789b`). This file is the brand's source of
> truth for voice, colour, type and motion. Read it before adding UI.

> Sistema de diseño para **Verdana San Sebastián**, un desarrollo residencial de autor en Guadalupe, Nuevo León (México).

## Contexto del producto

Verdana San Sebastián es un desarrollo inmobiliario cerrado ubicado en **Av. San Sebastián, col. Los Lermas**, en el municipio de Guadalupe, N.L., con cercanía directa al **río La Silla**.

**Cifras del proyecto:**
- 69 viviendas + 1 lote comercial.
- 19,610 m² de terreno (fusionado y rectificado, uso de suelo habitacional).
- +16,000 m² de construcción.
- 61 prototipos de casa de **236 m²** y 8 prototipos de **316 m²**.

El sistema sirve para producir las superficies de marketing del desarrollo: sitio web, brochures, fichas de prototipo, anuncios y presentaciones a inversionistas/compradores.

### Fuentes recibidas
Cuatro imágenes de marca: lockup dorado sobre verde, lockup verde sobre crema, paleta de color, y un render del acceso. **No se proporcionó código, Figma ni fuentes tipográficas originales.** El sistema se derivó de estas imágenes. Ver CAVEATS abajo.

---

## CONTENT FUNDAMENTALS

**Idioma:** Español de México (es-MX). Toda la copy es en español.

**Tono:** Cálido, aspiracional y sereno, sin estridencia. Vende un estilo de vida ("tu hogar junto a la naturaleza"), no una transacción. Evita el lenguaje de venta agresivo y los superlativos vacíos.

**Persona:** Se habla **de "tú"** al prospecto ("Agenda tu visita", "Conoce Verdana en persona", "Te contactamos en menos de 24 horas"). Cercano pero respetuoso.

**Casing:**
- Titulares en serif: *sentence case* ("Tu hogar junto a la naturaleza"), nunca en mayúsculas completas.
- Eyebrows / etiquetas / botones: MAYÚSCULAS con tracking amplio ("UBICACIÓN PRIVILEGIADA", "AGENDAR VISITA"). El componente las transforma — escribe el texto en sentence case.
- El wordmark "VERDANA" va en mayúsculas; "San Sebastián" en mayúsculas tracked.

**Cifras:** Se presentan con su unidad y con coma de millares mexicana (19,610 m², +16,000 m², 236 m²). Las cifras son protagonistas — se muestran en serif grande.

**Vocabulario recurrente:** viviendas, residencias, prototipos, desarrollo, amenidades, acceso controlado, lote comercial, río La Silla, Guadalupe, Nuevo León.

**Emoji:** Nunca. La marca es premium y sobria.

**Ejemplos:**
- Eyebrow + titular: "UBICACIÓN PRIVILEGIADA" → "A un paso del río La Silla".
- CTA primario: "Agenda tu visita". Secundario: "Ver prototipos".
- Microcopy de formulario: "Te contactamos en menos de 24 horas."

---

## VISUAL FOUNDATIONS

**Paleta.** Tres familias derivadas de la marca:
- **Verde bosque** (`--green-700 #2C4A34` primario) — el ancla; muros de piedra, follaje, placas de logo. Hasta `--green-900` para overlays y footers.
- **Oro antiguo / latón** (`--gold-500 #C2A56B` acento) — señalética iluminada, el emblema, CTAs de acento. Es un dorado apagado y elegante, nunca amarillo brillante.
- **Crema / papel** (`--cream-100 #F7F1E2` fondo) — todas las superficies claras tienen temperatura cálida, jamás blanco puro frío.
- **Grafito verdoso** para texto (`--ink-900 … --ink-300`) — neutros tibios, no grises azulados.

**Tipografía.** Dúo de contraste:
- **Cormorant Garamond** (serif de alto contraste) para titulares y cifras — la voz elegante de la marca.
- **Montserrat** (sans geométrica) para UI, cuerpo y el *eyebrow* tracked. El tracking amplio en mayúsculas (0.28em) es el gesto tipográfico más reconocible, heredado de "SAN SEBASTIÁN" bajo el wordmark.

**Espaciado.** Base de 4px, escala generosa. Las secciones respiran (padding vertical de 96px en desktop). Calma > densidad.

**Fondos.** El render a sangre completa con **degradado de protección** (verde oscuro de 0.30→0.74 de arriba a abajo) es el patrón heroico. Las secciones alternan crema y verde oscuro para dar ritmo. No se usan gradientes decorativos arcoíris, ni texturas ruidosas, ni patrones repetidos.

**Bordes y tarjetas.** Radios suaves y arquitectónicos (`--radius-lg 16px` en tarjetas, `--radius-sm 6px` en botones). Las tarjetas son papel cálido con borde hairline y sombra muy tenue (`--shadow-sm`). Nada de cantos vivos ni de tarjetas con borde de color a la izquierda.

**Sombras.** Cálidas, bajas y difusas — luz de sol sobre piedra. Mezcladas con verde (`rgba(34,48,32,...)`), nunca negro puro ni sombras duras.

**Animación.** Sobria. Transiciones de 240ms con easing estándar suave (`cubic-bezier(0.22,0.61,0.36,1)`). **Sin rebotes (bounce).** Las tarjetas interactivas hacen un *lift* mínimo (−3px) al hover.

**Estados hover.** Oscurecer (primario verde → `--green-800`; acento oro → `--gold-600`). Los outline se rellenan. Nunca se aclara ni se escala hacia arriba.

**Estados press.** Desplazamiento de 1px hacia abajo (`translateY(1px)`), sin cambio de tamaño.

**Foco.** Anillo dorado translúcido de 3px (`rgba(194,165,107,0.22)`) + borde oro. El dorado es el color de interacción.

**Transparencia / blur.** El header usa crema al 86% con `backdrop-filter: blur(10px)`. Sobre verde, los bordes y textos secundarios son crema con alfa (`rgba(247,241,226,...)`), no colores sólidos nuevos.

**Vibra de imagen.** Renders arquitectónicos cálidos, luz dorada de atardecer, vegetación frondosa. Cálido, nunca frío ni b&n.

---

## ICONOGRAPHY

La marca es **principalmente tipográfica y no depende de un set de iconos**. El único símbolo gráfico propio es el **emblema de hoja** (`public/brand/verdana-emblem.svg`) — una hoja dentro de un óvalo, con nervadura central, dibujada con `currentColor` para tintarse en verde, oro o crema. Es marca registrada visual; no se debe redibujar ni alterar.

- **No hay icon font ni set de iconos en las fuentes recibidas.** Las secciones de amenidades usan **texto + hairline superior**, no iconos, lo cual es fiel al tono sobrio de la marca.
- **Emoji:** nunca.
- **Caracteres unicode:** se usa el punto medio "·" como separador (Guadalupe · Nuevo León). Con moderación.
- Si en el futuro se necesitan iconos (UI de filtros, contacto), usar un set de **trazo fino (1.5px), línea, esquinas suaves** que armonice con la ligereza del emblema — p. ej. Lucide o Phosphor (light). **Flag:** esta sería una sustitución; confirmar con la marca.

---

## VISUAL ASSETS

En `public/brand/` y `public/renders/`:
- `brand/verdana-emblem.svg` — emblema de hoja (currentColor, tintable).
- `brand/logo-lockup-gold-on-green.jpeg` — lockup oro sobre verde (para fondos oscuros).
- `brand/logo-lockup-green-on-cream.jpeg` — lockup verde sobre crema (para fondos claros).
- `renders/entrance.jpg` — render del acceso al atardecer (hero).
- `renders/caseta-ventas.webp` — render de la caseta de ventas al atardecer.
- `renders/master-plan.webp` — plano del master plan del conjunto.
- `renders/banners-verdana.jpeg` — señalética de banderolas del desarrollo.

El componente `Logo` reconstruye el lockup en vivo (vectorial, escalable, en cualquier tono) — **preferir el componente** sobre los JPEG para uso en pantalla.

---

## CAVEATS

1. **Fuentes sustituidas.** No se recibieron las tipografías originales de la marca. Se usaron las mejores coincidencias en Google Fonts: **Cormorant Garamond** (serif del wordmark) y **Montserrat** (sans tracked). Reemplazar con las fuentes licenciadas reales si existen.
2. **Renders disponibles.** El acceso, la caseta de ventas y el master plan ya están en `public/renders/`. No hay renders por prototipo de casa.
3. **Colores muestreados** de JPEGs comprimidos — afinables si hay valores de marca oficiales (Pantone/HEX).
4. **El emblema** es una reconstrucción vectorial aproximada del logo de hoja; idealmente reemplazar con el SVG oficial de la marca.
