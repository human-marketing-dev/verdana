import type { HTMLAttributes, ReactNode } from 'react';

import { cx } from '@/lib/cx';

export interface StatProps extends HTMLAttributes<HTMLDivElement> {
  /** The headline figure, e.g. "69" or "19,610 m²". */
  value: ReactNode;
  /** Tracked uppercase label beneath it. */
  label: ReactNode;
  /** Optional sentence-case supporting line. */
  sublabel?: ReactNode;
  /** @default 'left' */
  align?: 'left' | 'center';
  /** @default 'green' */
  tone?: 'green' | 'gold' | 'on-brand';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
}

/**
 * A single key figure rendered in the brand's serif voice with a tracked
 * label — the development's headline numbers (viviendas, m², prototipos).
 */
export function Stat({
  value,
  label,
  sublabel,
  align = 'left',
  tone = 'green',
  size = 'md',
  className,
  ...rest
}: StatProps) {
  return (
    <div className={cx('vss-stat', className)} data-align={align} data-tone={tone} data-size={size} {...rest}>
      <span className="vss-stat__value">{value}</span>
      <span className="vss-stat__label">{label}</span>
      {sublabel && <span className="vss-stat__sublabel">{sublabel}</span>}
    </div>
  );
}
