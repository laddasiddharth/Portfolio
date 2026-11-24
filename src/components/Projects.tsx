import { useState } from 'react';
import { PROJECTS } from '@/data/projects';
import Section from './ui/Section';
import ProjectRow from './ProjectRow';

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(PROJECTS[0]?.id ?? null);

  return (
    <Section id="work" index="01" label="Selected work" layout="wide">
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
    </Section>
  );
}
