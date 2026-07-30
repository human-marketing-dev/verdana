import type { HTMLAttributes } from 'react';

import { cx } from '@/lib/cx';

export type EyebrowTone = 'accent' | 'green' | 'muted' | 'on-brand';

export interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  /** Color treatment. @default 'accent' */
  tone?: EyebrowTone;
  /** Render a short hairline rule before the text. @default false */
  rule?: boolean;
  /** @default 'left' */
  align?: 'left' | 'center';
}

/**
 * Wide-tracked uppercase kicker label used above section headings. The
 * brand's most recognizable typographic device (echoes "SAN SEBASTIÁN").
 *
 * Write the text in sentence case — the component uppercases it.
 */
export function Eyebrow({ tone = 'accent', rule = false, align = 'left', className, children, ...rest }: EyebrowProps) {
  return (
    <span className={cx('vss-eyebrow', className)} data-tone={tone} data-align={align} {...rest}>
      {rule && <span aria-hidden="true" className="vss-eyebrow__rule" />}
      {children}
    </span>
  );
}
