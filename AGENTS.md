<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design system

Read `docs/design-system.md` before writing or changing any UI. It is the brand's
source of truth: voice (es-MX, "tú", never emoji), colour, type, spacing, motion
and iconography.

- Style with the tokens in `styles/tokens/` — never hard-code hex values, px
  radii or durations that a token already covers.
- Reuse the components in `components/` rather than reimplementing primitives.
- `styles/tokens/*.css` is synced verbatim from the Claude Design project. Change
  values there only when the design project changes, so a re-sync stays clean.
- Component interaction states live in CSS (`styles/components.css`), keyed off
  `data-*` attributes, so the components stay React Server Components.
