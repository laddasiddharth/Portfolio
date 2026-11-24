import { EDUCATION } from '@/data/education';
import Section from './ui/Section';

export default function Education() {
  return (
    <Section id="education" index="04" label="Education">
      <ol className="border-t border-border">
        {EDUCATION.map((edu) => (
          <li key={edu.degree} className="grid gap-x-6 gap-y-3 border-b border-border py-8 md:grid-cols-9">
            <div className="md:col-span-3">
              <p className="font-mono text-[13px] text-fg3">{edu.date}</p>
              {edu.current && <p className="mt-2 font-mono text-xs uppercase tracking-label text-accent">Current</p>}
            </div>
            <div className="md:col-span-6">
              <h3 className="text-lg font-medium tracking-tight text-fg">{edu.degree}</h3>
              <p className="mt-1 text-fg2">{edu.school}</p>
              {edu.major && <p className="mt-3 text-sm text-fg2">{edu.major}</p>}
              {edu.desc && <p className="mt-2 text-sm text-fg3">{edu.desc}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
