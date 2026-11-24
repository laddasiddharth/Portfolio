import { useState } from 'react';
import { sectionMeta, profile } from '@/data/profile';
import { MORE_WORK, PROJECTS } from '@/data/projects';
import Section from './ui/Section';
import TextLink from './ui/TextLink';
import ProjectRow from './ProjectRow';

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(PROJECTS[0]?.id ?? null);

  return (
    <Section {...sectionMeta('work')} label="Selected work" layout="wide">
      <div
        aria-hidden="true"
        className="label hidden grid-cols-12 gap-x-6 border-b border-border pb-3 md:grid"
      >
        <span className="col-span-1">No.</span>
        <span className="col-span-5">Project</span>
        <span className="col-span-2">Category</span>
        <span className="col-span-3">Stack</span>
      </div>

      <ul>
        {PROJECTS.map((project, i) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={i}
            open={openId === project.id}
            onToggle={() => setOpenId(openId === project.id ? null : project.id)}
          />
        ))}
      </ul>

      <div className="mt-20 grid gap-x-6 gap-y-6 md:grid-cols-12">
        <div className="md:col-span-3">
          <h3 className="label">More work</h3>
          <p className="mt-3 text-sm">
            <TextLink href={`${profile.github.href}?tab=repositories`} external>
              All repositories
            </TextLink>
          </p>
        </div>

        <ul className="border-t border-border md:col-span-9">
          {MORE_WORK.map((item) => (
            <li key={item.name} className="grid gap-x-6 gap-y-1 border-b border-border py-5 md:grid-cols-9">
              <div className="md:col-span-3">
                <TextLink href={item.href} external className="font-medium">
                  {item.name}
                </TextLink>
              </div>
              <div className="md:col-span-6">
                <p className="text-[15px] text-fg2">{item.summary}</p>
                <p className="mt-1.5 font-mono text-xs text-fg3">{item.tech}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
