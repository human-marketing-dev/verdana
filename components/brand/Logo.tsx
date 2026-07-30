import type { CSSProperties, HTMLAttributes } from 'react';

import { cx } from '@/lib/cx';

export type LogoSize = 'sm' | 'md' | 'lg' | 'xl';
export type LogoTone = 'green' | 'gold' | 'cream' | 'mono';
export type LogoLayout = 'stacked' | 'horizontal' | 'emblem';

export interface LogoProps extends HTMLAttributes<HTMLElement> {
  /** Visual size of the lockup. @default 'md' */
  size?: LogoSize;
  /** Color treatment for the surface it sits on. @default 'green' */
  tone?: LogoTone;
  /** Arrangement of emblem + wordmark. @default 'stacked' */
  layout?: LogoLayout;
  /** Show the "Tu hogar junto a la naturaleza" tagline. @default false */
  tagline?: boolean;
}

/**
 * The Verdana San Sebastián brand lockup: leaf emblem, serif "VERDANA"
 * wordmark, and tracked "SAN SEBASTIÁN" locality. Use `tone="gold"` or
 * `tone="cream"` on dark green surfaces, `tone="green"` on light/cream.
 *
 * The emblem is a registered visual mark — never redraw or alter it.
 */
export function Logo({
  size = 'md',
  tone = 'green',
  layout = 'stacked',
  tagline = false,
  className,
  style,
  ...rest
}: LogoProps) {
  const s = SIZES[size];
  const t = TONES[tone];
  const isHorizontal = layout === 'horizontal';

  if (layout === 'emblem') {
    return (
      <span
        className={cx('vss-logo', 'vss-logo__emblem', className)}
        style={{ color: t.mark, height: s.emblem, ...style }}
        {...rest}
      >
        <Emblem />
      </span>
    );
  }

  return (
    <span
      className={cx('vss-logo', className)}
      style={{
        flexDirection: isHorizontal ? 'row' : 'column',
        gap: isHorizontal ? s.emblem * 0.34 : s.emblem * 0.32,
        ...style,
      }}
      {...rest}
    >
      <span className="vss-logo__emblem" style={{ color: t.mark, height: s.emblem }}>
        <Emblem />
      </span>
      <span
        className="vss-logo__wordmark"
        style={{
          alignItems: isHorizontal ? 'flex-start' : 'center',
          gap: s.word * 0.12,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            color: t.word,
            fontSize: s.word,
            lineHeight: 0.9,
            letterSpacing: '0.04em',
          }}
        >
          VERDANA
        </span>
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 600,
            color: t.locality,
            fontSize: s.locality,
            lineHeight: 1,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
          }}
        >
          San Sebastián
        </span>
        {tagline && (
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 500,
              color: t.locality,
              fontSize: s.tag,
              lineHeight: 1,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginTop: s.tag * 0.6,
              opacity: 0.92,
            }}
          >
            Tu hogar junto a la naturaleza
          </span>
        )}
      </span>
    </span>
  );
}

const SIZES: Record<LogoSize, { emblem: number; word: number; locality: number; tag: number }> = {
  sm: { emblem: 30, word: 22, locality: 9, tag: 7 },
  md: { emblem: 46, word: 34, locality: 12, tag: 9 },
  lg: { emblem: 72, word: 54, locality: 18, tag: 12 },
  xl: { emblem: 104, word: 78, locality: 25, tag: 15 },
};

const TONES: Record<LogoTone, { mark: string; word: string; locality: string }> = {
  green: { mark: 'var(--green-700)', word: 'var(--green-700)', locality: 'var(--green-600)' },
  gold: { mark: 'var(--gold-400)', word: 'var(--gold-400)', locality: 'var(--gold-300)' },
  cream: { mark: 'var(--cream-100)', word: 'var(--cream-100)', locality: 'var(--gold-300)' },
  mono: { mark: 'currentColor', word: 'currentColor', locality: 'currentColor' },
};

const EMBLEM_STYLE: CSSProperties = { display: 'block', height: '100%', width: 'auto' };

function Emblem() {
  return (
    <svg
      viewBox="0 0 100 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={EMBLEM_STYLE}
    >
      <ellipse cx="50" cy="56" rx="31" ry="42" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M50 22 C50 22 33 40 33 62 C33 78 41 90 50 96 C59 90 67 78 67 62 C67 40 50 22 50 22 Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <line x1="50" y1="30" x2="50" y2="92" stroke="currentColor" strokeWidth="2.4" />
      <path
        d="M50 47 C44 47 39 51 39 57 C39 63 44 67 50 67"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <line x1="50" y1="57" x2="62" y2="48" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="50" y1="72" x2="61" y2="64" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
