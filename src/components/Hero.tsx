import type { CSSProperties } from 'react';
import { profile } from '@/data/profile';
import TextLink from './ui/TextLink';

const META = [
  { key: 'Focus', value: profile.focusShort },
  { key: 'Currently', value: profile.currently },
  { key: 'Based in', value: profile.location },
  { key: 'Status', value: profile.status, live: true },
];

/** Staggers the CSS `.enter` animation. */
const delay = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pb-section pt-28 md:pt-36">
      <div className="page grid-page gap-y-14">
        <div className="col-span-full lg:col-span-8">
          <p className="label enter">
            {profile.role} — {profile.education}
          </p>

          <h1
            id="hero-title"
            className="enter mt-6 max-w-[18ch] text-display font-medium text-fg"
            style={delay(70)}
          >
            {profile.headline}
          </h1>

          <p className="enter mt-8 max-w-[52ch] text-lg text-fg2" style={delay(140)}>
            {profile.intro}
          </p>

          <ul className="enter mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm" style={delay(210)}>
            <li>
              <TextLink href="#work" arrow="↓">
                Selected work
              </TextLink>
            </li>
            <li>
              <TextLink href={profile.resume} external>
                Résumé
              </TextLink>
            </li>
            <li>
              <TextLink href={profile.github.href} external>
                GitHub
              </TextLink>
            </li>
            <li>
              <TextLink href={`mailto:${profile.email}`}>Email</TextLink>
            </li>
          </ul>
        </div>

        <figure
          className="enter group col-span-full max-w-[280px] md:col-span-4 lg:col-span-3 lg:col-start-10 lg:max-w-none lg:self-end"
          style={delay(260)}
        >
          <div className="aspect-[4/5] overflow-hidden border border-border bg-surface transition-colors duration-500 group-hover:border-border-strong">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={600}
              height={750}
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="label mt-3">Fig. 01 — {profile.name}</figcaption>
        </figure>

        <dl className="enter col-span-full grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-4" style={delay(320)}>
          {META.map((m) => (
            <div key={m.key} className="border-b border-border py-5 sm:pr-6 lg:border-b-0">
              <dt className="label">{m.key}</dt>
              <dd className="mt-2 flex items-baseline gap-2 text-sm text-fg">
                {m.live && <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 -translate-y-px rounded-full bg-accent" />}
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
