import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Reveal from './Reveal';

type SectionProps = {
  id: string;
  index: string;
  label: string;
  /** "split": label in a narrow left column. "wide": label above, content full width. */
  layout?: 'split' | 'wide';
  children: ReactNode;
};

export default function Section({ id, index, label, layout = 'split', children }: SectionProps) {
  const headingId = `${id}-heading`;
  const wide = layout === 'wide';

  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-border py-section">
      <div className="page grid-page gap-y-10">
        <h2 id={headingId} className={cn('label col-span-full', !wide && 'lg:col-span-3')}>
          <span className="text-accent">{index}</span>
          <span aria-hidden="true"> — </span>
          {label}
        </h2>
        <Reveal className={cn('col-span-full', !wide && 'lg:col-span-9')}>{children}</Reveal>
      </div>
    </section>
  );
}
