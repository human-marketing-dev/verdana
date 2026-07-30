import type { HTMLAttributes, ReactNode } from 'react';

import { cx } from '@/lib/cx';

export type CardVariant = 'default' | 'cream' | 'green' | 'outline';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Surface treatment. @default 'default' */
  variant?: CardVariant;
  /** Lift on hover (for clickable cards). @default false */
  interactive?: boolean;
  /** Inner padding. @default 'md' */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Media node rendered flush at the top (image/figure). */
  media?: ReactNode;
}

/**
 * Warm paper surface container — property/prototype cards, amenity tiles,
 * content blocks. Soft radius, quiet shadow, optional flush top media.
 *
 * `interactive` lifts the card on hover; it also responds to :focus-within so
 * keyboard users get the same affordance as pointer users.
 */
export function Card({
  variant = 'default',
  interactive = false,
  padding = 'md',
  media,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cx('vss-card', className)}
      data-variant={variant}
      data-interactive={interactive ? 'true' : undefined}
      {...rest}
    >
      {media}
      <div className="vss-card__body" data-padding={padding}>
        {children}
      </div>
    </div>
  );
}
