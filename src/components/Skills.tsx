import { SKILL_GROUPS } from '@/data/skills';
import Section from './ui/Section';

export default function Skills() {
  return (
    <Section id="stack" index="03" label="Stack">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="border-t border-border pt-4">
            <h3 className="label">{group.title}</h3>
            <ul className="mt-4 space-y-1.5 text-fg">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
