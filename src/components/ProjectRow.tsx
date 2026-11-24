import type { Project } from '@/data/projects';
import TextLink from './ui/TextLink';

type ProjectRowProps = {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
};

const STACK_PREVIEW = 3;

export default function ProjectRow({ project, index, open, onToggle }: ProjectRowProps) {
  const num = String(index + 1).padStart(2, '0');
  const buttonId = `project-${project.id}-button`;
  const panelId = `project-${project.id}-panel`;
  const stackPreview =
    project.tech.slice(0, STACK_PREVIEW).join(', ') +
    (project.tech.length > STACK_PREVIEW ? ` +${project.tech.length - STACK_PREVIEW}` : '');

  return (
    <li className="border-b border-border">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 py-5 text-left md:grid-cols-12 md:gap-x-6 md:py-6"
        >
          <span className="font-mono text-xs text-fg3 md:col-span-1">{num}</span>

          <span className="md:col-span-5">
            <span className="block text-lg font-medium tracking-tight text-fg md:text-xl">{project.name}</span>
            <span className="mt-1 block font-mono text-xs text-fg3 md:hidden">
              {project.category} · {stackPreview}
            </span>
          </span>

          <span className="hidden font-mono text-xs uppercase tracking-label text-fg2 md:col-span-2 md:block">
            {project.category}
          </span>

          <span className="hidden truncate font-mono text-xs text-fg3 md:col-span-3 md:block">{stackPreview}</span>

          <span
            aria-hidden="true"
            className="justify-self-end font-mono text-base text-fg3 transition-colors group-hover:text-accent md:col-span-1"
          >
            {open ? '−' : '+'}
          </span>
        </button>
      </h3>

      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 pb-12 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-2">
            <p className="text-lg text-fg">{project.tagline}</p>
            <p className="mt-4 text-fg2">{project.description}</p>

            <dl className="mt-8 border-t border-border pt-4">
              <dt className="label">Stack</dt>
              <dd className="mt-2 font-mono text-[13px] leading-relaxed text-fg2">{project.tech.join(', ')}</dd>
            </dl>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {project.liveUrl && (
                <li>
                  <TextLink href={project.liveUrl} external>
                    Live site
                  </TextLink>
                </li>
              )}
              {project.githubUrl && (
                <li>
                  <TextLink href={project.githubUrl} external>
                    Source code
                  </TextLink>
                </li>
              )}
            </ul>
          </div>

          <figure className="md:col-span-6 md:col-start-7">
            <div className="aspect-[16/10] overflow-hidden border border-border bg-surface">
              <img
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </figure>
        </div>
      </div>
    </li>
  );
}
