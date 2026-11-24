import { ACHIEVEMENTS } from '@/data/achievements';
import { sectionMeta } from '@/data/profile';
import Section from './ui/Section';
import TextLink from './ui/TextLink';

export default function Recognition() {
  return (
    <Section {...sectionMeta('recognition')}>
      <ol className="border-t border-border">
        {ACHIEVEMENTS.map((a) => (
          <li key={a.event} className="grid gap-x-6 gap-y-3 border-b border-border py-8 md:grid-cols-9">
            <p className="font-mono text-[13px] text-fg3 md:col-span-3">{a.year}</p>

            <div className="md:col-span-6">
              <h3 className="text-lg font-medium tracking-tight text-fg">{a.event}</h3>
              {a.result && (
                <p className="mt-1 font-mono text-xs uppercase tracking-label text-accent">{a.result}</p>
              )}
              <p className="mt-3 text-fg2">{a.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                {a.links.map((link) => (
                  <li key={link.href}>
                    <TextLink href={link.href} external>
                      {link.label}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
