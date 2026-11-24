import { profile } from '@/data/profile';
import TextLink from './ui/TextLink';

const META = [
  { key: 'Focus', value: profile.focus.join(' · ') },
  { key: 'Currently', value: profile.currently },
  { key: 'Status', value: profile.status, live: true },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="pb-section pt-28 md:pt-36">
      <div className="page grid-page gap-y-14">
        <div className="col-span-full lg:col-span-8">
          <p className="label">
            {profile.role} — {profile.education}
          </p>

          <h1 id="hero-title" className="mt-6 max-w-[18ch] text-display font-medium text-fg">
            {profile.headline}
          </h1>

          <p className="mt-8 max-w-[52ch] text-lg text-fg2">{profile.intro}</p>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
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

        <figure className="col-span-full max-w-[280px] md:col-span-4 lg:col-span-3 lg:col-start-10 lg:max-w-none lg:self-end">
          <div className="aspect-[4/5] overflow-hidden border border-border bg-surface">
            <img
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
              width={600}
              height={750}
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="label mt-3">Fig. 01 — {profile.name}</figcaption>
        </figure>

        <dl className="col-span-full grid grid-cols-1 border-t border-border sm:grid-cols-3">
          {META.map((m) => (
            <div key={m.key} className="border-b border-border py-5 sm:border-b-0 sm:pr-6">
              <dt className="label">{m.key}</dt>
              <dd className="mt-2 flex items-center gap-2 text-sm text-fg">
                {m.live && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />}
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
