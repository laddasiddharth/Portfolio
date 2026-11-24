import { profile, sectionMeta } from '@/data/profile';
import Section from './ui/Section';

export default function About() {
  return (
    <Section {...sectionMeta('about')}>
      <p className="max-w-[40ch] text-h2 font-medium text-fg">{profile.bio}</p>

      <div className="mt-14 grid gap-6 md:grid-cols-9">
        <h3 className="label md:col-span-3">Focus</h3>
        <ol className="border-t border-border md:col-span-6">
          {profile.focus.map((item, i) => (
            <li key={item} className="flex items-baseline gap-4 border-b border-border py-4">
              <span className="font-mono text-xs text-fg3">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-fg">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
