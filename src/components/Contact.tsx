import { profile, sectionMeta } from '@/data/profile';
import Section from './ui/Section';
import TextLink from './ui/TextLink';

const ROWS = [
  { key: 'GitHub', label: profile.github.display, href: profile.github.href, external: true },
  { key: 'LinkedIn', label: profile.linkedin.display, href: profile.linkedin.href, external: true },
  { key: 'Résumé', label: 'Download PDF', href: profile.resume, external: true },
  { key: 'Phone', label: profile.phone.display, href: profile.phone.href, external: false },
];

export default function Contact() {
  return (
    <Section {...sectionMeta('contact')}>
      <p className="max-w-[52ch] text-fg2">{profile.availability}</p>

      <a
        href={`mailto:${profile.email}`}
        className="group mt-8 inline-block break-all text-[clamp(1.5rem,5vw,3.5rem)] font-medium leading-tight tracking-tight text-fg"
      >
        <span className="link-underline">{profile.email}</span>
        <span
          aria-hidden="true"
          data-dir="ne"
          className="link-arrow ml-3 text-[0.6em] text-fg3 group-hover:text-accent"
        >
          ↗
        </span>
      </a>

      <dl className="mt-14 border-t border-border">
        {ROWS.map((row) => (
          <div
            key={row.key}
            className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-4 border-b border-border py-4 md:grid-cols-9 md:gap-x-6"
          >
            <dt className="label self-center md:col-span-3">{row.key}</dt>
            <dd className="min-w-0 text-sm [overflow-wrap:anywhere] md:col-span-6">
              <TextLink href={row.href} external={row.external}>
                {row.label}
              </TextLink>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
