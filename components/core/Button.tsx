import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

import { cx } from '@/lib/cx';

export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonOwnProps {
  /** Visual style. @default 'primary' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
  /** Recolor for placement on a dark green surface. @default false */
  onBrand?: boolean;
  /** Stretch to fill container width. @default false */
  full?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export type ButtonProps =
  | (ButtonOwnProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonOwnProps>)
  | (ButtonOwnProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonOwnProps>);

/**
 * Primary call-to-action button. Green primary on light, gold primary on
 * dark (`onBrand`). Tracked uppercase label, soft radius, calm hover.
 *
 * Renders an `<a>` when `href` is set, a `<button>` otherwise. Write the
 * label in sentence case — the component uppercases it.
 */
export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    onBrand = false,
    full = false,
    iconLeft,
    iconRight,
    className,
    children,
    ...rest
  } = props;

  const shared = {
    className: cx('vss-btn', className),
    'data-variant': variant,
    'data-size': size,
    'data-on-brand': onBrand ? 'true' : undefined,
    'data-full': full ? 'true' : undefined,
  };

  const content = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );

  if (rest.href !== undefined) {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} {...anchorProps} {...shared}>
        {content}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} {...buttonProps} {...shared}>
      {content}
    </button>
  );
}
