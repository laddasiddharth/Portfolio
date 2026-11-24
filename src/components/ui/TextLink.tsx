import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type TextLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  /** Trailing glyph. Defaults to ↗ for external links. */
  arrow?: string;
  className?: string;
};

const ARROW_DIR: Record<string, string> = { '↗': 'ne', '↓': 'down', '↑': 'up' };

export default function TextLink({ href, children, external, arrow, className }: TextLinkProps) {
  const glyph = arrow ?? (external ? '↗' : undefined);

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn('group inline-flex items-baseline gap-1.5 text-fg', className)}
    >
      <span className="link-underline">{children}</span>
      {glyph && (
        <span
          aria-hidden="true"
          data-dir={ARROW_DIR[glyph]}
          className="link-arrow text-fg3 group-hover:text-accent"
        >
          {glyph}
        </span>
      )}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
