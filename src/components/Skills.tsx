import { sectionMeta } from '@/data/profile';
import { SKILL_GROUPS } from '@/data/skills';
import Section from './ui/Section';

export default function Skills() {
  return (
    <Section {...sectionMeta('stack')}>
      <dl className="border-t border-border">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="grid gap-x-6 gap-y-2 border-b border-border py-5 md:grid-cols-9">
            <dt className="label pt-0.5 md:col-span-3">{group.title}</dt>
            <dd className="text-fg md:col-span-6">
              <ul className="flex flex-wrap gap-x-1">
                {group.items.map((item, i) => (
                  <li key={item}>
                    {item}
                    {i < group.items.length - 1 && (
                      <span aria-hidden="true" className="text-fg3">
                        ,
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
