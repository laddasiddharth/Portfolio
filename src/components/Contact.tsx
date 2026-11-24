import { profile } from '@/data/profile';
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
    <Section id="contact" index="05" label="Contact">
      <p className="max-w-[52ch] text-fg2">{profile.availability}</p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block break-all text-[clamp(1.5rem,5vw,3.5rem)] font-medium leading-tight tracking-tight text-fg underline decoration-border-strong decoration-1 underline-offset-[0.18em] transition-colors hover:decoration-accent"
      >
        {profile.email}
      </a>

      <dl className="mt-14 border-t border-border">
        {ROWS.map((row) => (
          <div key={row.key} className="grid grid-cols-[6rem_1fr] gap-x-6 border-b border-border py-4 md:grid-cols-9">
            <dt className="label self-center md:col-span-3">{row.key}</dt>
            <dd className="text-sm md:col-span-6">
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
