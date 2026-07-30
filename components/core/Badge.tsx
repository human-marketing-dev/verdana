import type { HTMLAttributes } from 'react';

import { cx } from '@/lib/cx';

export type BadgeVariant = 'neutral' | 'available' | 'sold' | 'accent' | 'green' | 'outline';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** @default 'neutral' */
  variant?: BadgeVariant;
  /** @default 'md' */
  size?: 'sm' | 'md';
  /** Show a leading status dot. @default false */
  dot?: boolean;
}

/**
 * Small uppercase pill for status and metadata on property cards —
 * availability, area, prototype label.
 */
export function Badge({ variant = 'neutral', size = 'md', dot = false, className, children, ...rest }: BadgeProps) {
  return (
    <span className={cx('vss-badge', className)} data-variant={variant} data-size={size} {...rest}>
      {dot && <span aria-hidden="true" className="vss-badge__dot" />}
      {children}
    </span>
  );
}
