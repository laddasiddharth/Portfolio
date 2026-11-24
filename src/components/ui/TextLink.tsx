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

export default function TextLink({ href, children, external, arrow, className }: TextLinkProps) {
  const glyph = arrow ?? (external ? '↗' : undefined);

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex items-baseline gap-1.5 text-fg underline decoration-border-strong underline-offset-[5px] transition-colors hover:decoration-accent',
        className,
      )}
    >
      {children}
      {glyph && (
        <span aria-hidden="true" className="text-fg3 no-underline transition-colors group-hover:text-accent">
          {glyph}
        </span>
      )}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
