# Verdana San Sebastián

Marketing site for **Verdana San Sebastián**, a gated residential development on
Av. San Sebastián, col. Los Lermas, Guadalupe, Nuevo León.

Next.js 16 (App Router, Turbopack) + React 19. All copy is Spanish (es-MX).

```bash
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Design system

The brand system is imported from the Claude Design project *"Verdana San
Sebastián Design System"*. **[`docs/design-system.md`](docs/design-system.md) is
the source of truth** for voice, colour, type, motion and iconography — read it
before adding UI.

```
styles/
  tokens/colors.css       synced verbatim from the design project
  tokens/typography.css   ""
  tokens/spacing.css      ""
  base.css                element defaults, container, responsive display scale
  components.css          Button / Card / Badge / Eyebrow / Stat / Input
  marketing.css           landing page sections
app/globals.css           imports Tailwind, then all of the above
```

Tokens are plain custom properties on `:root`, declared **after** Tailwind so
brand values win where names overlap (`--font-sans`, `--font-serif`,
`--radius-*`, `--shadow-*`). That is deliberate: Tailwind utilities inherit the
brand scale.

### Layout

Every section — header, hero, bands and footer — shares one column,
`.vss-container`, capped at `--container-max`. It is set to **1450px** in
`styles/base.css` as a local override; the design project ships the token at
1200px and the approved landing mock uses 1400px.

### Components

| Path | Exports |
| --- | --- |
| `components/brand/` | `Logo`, `Eyebrow` |
| `components/core/` | `Button`, `Badge`, `Card`, `Stat` |
| `components/forms/` | `Input` |
| `components/marketing/` | `SiteHeader`, `Hero`, `Project`, `MasterPlan`, `Location`, `Identity`, `SalesOffice`, `ContactSection`, `SiteFooter` |

Everything is a React Server Component except `ContactSection`, which holds the
form's success state. The design project authors these with inline styles and JS
mouse handlers; that was ported to CSS so the components stay server-rendered,
get real `:focus-visible` / `:active` states, and honour
`prefers-reduced-motion`. Variants are carried on `data-*` attributes.

### Fonts

The brand faces are unknown — the design project flags Cormorant Garamond and
Montserrat as substitutes. They are self-hosted through `next/font/google` in
`app/layout.tsx` (no request to Google, no layout shift) and bound to
`--font-serif` / `--font-sans` in `styles/base.css`. Swap to `next/font/local` if
the licensed faces become available.

### Source of the page design

The page reproduces the approved landing page mock, `Verdana Landing (2).html`
in the repo root. That file is a self-contained SPA export (3.8 MB, images and
fonts inlined) — it is the spec, not something the app serves, and it can be
deleted or moved out of the repo now that the page is implemented. The entrance
render in `public/renders/` was extracted from it; the master plan drawing was
supplied separately.

Deliberate deviations from that mock, all driven by the real renders, which
arrived after it was drawn:

- **Sales office copy sits right, not left.** The mock ran the entrance render
  there, which had open road on the left. The real caseta render puts the stone
  wall — carrying the wordmark and the tagline — exactly where the heading
  would go, stacking two lockups. The copy moved right, the scrim flipped to
  `270deg`, and the crop is biased to `50% 46%` so the fascia stays in frame.
- On screens under 760px the hero render is re-cropped toward the sign and its
  scrim eased, since a portrait crop of a 3:2 render otherwise shows only sky
  under a near-opaque overlay.
- The master plan sheet is centred and capped at 660px tall rather than
  stretched to its column: the drawing is near-square, and its paper is close in
  value to the frame's `--cream-50`, so the frame also carries a hairline.

## Outstanding

- **Unlabelled zone in the master plan.** The drawing has a pink/magenta area at
  the south end with no matching entry in the four-item legend in
  `MasterPlan.tsx` — presumably the lote comercial. Confirm what it is and add
  the legend row.
- **Lead form is not wired.** `ContactSection` flips to its success state
  locally; nothing is submitted. Connect it to a Server Action or CRM endpoint
  and add the privacy notice ("Aviso de privacidad") the footer links to.
- **`NEXT_PUBLIC_SITE_URL`** must be set in the deploy environment so Open Graph
  image URLs resolve absolutely.
