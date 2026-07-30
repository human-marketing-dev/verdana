import type { InputHTMLAttributes, ReactNode } from 'react';

import { cx } from '@/lib/cx';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'children'> {
  /** Tracked uppercase field label. */
  label?: ReactNode;
  /** Helper text below the field. */
  hint?: ReactNode;
  /** Error message — turns the field red and replaces the hint. */
  error?: ReactNode;
  /** Recolor for a dark green surface. @default false */
  onBrand?: boolean;
  /** Class applied to the wrapper. Use `inputClassName` for the field itself. */
  className?: string;
  inputClassName?: string;
}

/**
 * Text field for contact and lead-capture forms. Tracked uppercase label,
 * soft radius, gold focus ring. Set `onBrand` on dark green panels.
 *
 * The hint/error is wired to the field with aria-describedby, and an error
 * also sets aria-invalid.
 */
export function Input({
  label,
  hint,
  error,
  type = 'text',
  onBrand = false,
  id,
  className,
  inputClassName,
  ...rest
}: InputProps) {
  const inputId = id ?? (typeof label === 'string' ? `vss-${slugify(label)}` : undefined);
  const message = error ?? hint;
  const messageId = message && inputId ? `${inputId}-message` : undefined;

  return (
    <div className={cx('vss-field', className)} data-on-brand={onBrand ? 'true' : undefined}>
      {label && (
        <label className="vss-field__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        className={cx('vss-field__input', inputClassName)}
        aria-invalid={error ? true : undefined}
        aria-describedby={messageId}
        {...rest}
      />
      {message && (
        <span id={messageId} className="vss-field__message" data-error={error ? 'true' : undefined}>
          {message}
        </span>
      )}
    </div>
  );
}

function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
