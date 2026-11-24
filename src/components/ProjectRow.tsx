import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Project } from '@/data/projects';
import { cn } from '@/lib/utils';
import TextLink from './ui/TextLink';

type ProjectRowProps = {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
};

const STACK_PREVIEW = 3;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export default function ProjectRow({ project, index, open, onToggle }: ProjectRowProps) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  // Closed panels stay mounted for the height animation, so take them out of
  // the tab order and accessibility tree with `inert`.
  useEffect(() => {
    panelRef.current?.toggleAttribute('inert', !open);
  }, [open]);

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
          <span
            className={cn(
              'font-mono text-xs transition-colors duration-300 group-hover:text-accent md:col-span-1',
              open ? 'text-accent' : 'text-fg3',
            )}
          >
            {num}
          </span>

          <span className="md:col-span-5">
            <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
              <span className="text-lg font-medium tracking-tight text-fg md:text-xl">{project.name}</span>
              {project.badge && (
                <span className="font-mono text-[11px] uppercase tracking-label text-accent">{project.badge}</span>
              )}
            </span>
            <span className="mt-1 block font-mono text-xs text-fg3 md:hidden">
              {project.category} · {stackPreview}
            </span>
          </span>

          <span className="hidden font-mono text-xs uppercase tracking-label text-fg2 transition-colors duration-300 group-hover:text-fg md:col-span-2 md:block">
            {project.category}
          </span>

          <span className="hidden truncate font-mono text-xs text-fg3 transition-colors duration-300 group-hover:text-fg2 md:col-span-3 md:block">
            {stackPreview}
          </span>

          <span
            aria-hidden="true"
            className={cn(
              'inline-block justify-self-end font-mono text-base leading-none transition-[transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-accent md:col-span-1',
              open ? 'rotate-45 text-fg' : 'text-fg3',
            )}
          >
            +
          </span>
        </button>
      </h3>

      <motion.div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={
          reduce
            ? { duration: 0 }
            : { height: { duration: 0.5, ease: EASE_OUT }, opacity: { duration: open ? 0.4 : 0.2, delay: open ? 0.1 : 0 } }
        }
        style={{ overflow: 'hidden' }}
        ref={panelRef}
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 pb-12 md:grid-cols-12">
          <div className="md:col-span-6 md:col-start-2">
            <p className="label">{project.context}</p>
            <p className="mt-4 text-lg text-fg">{project.tagline}</p>
            <p className="mt-4 text-fg2">{project.description}</p>

            <ul className="mt-6 space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="grid grid-cols-[1rem_1fr] text-[15px] leading-relaxed text-fg2">
                  <span aria-hidden="true" className="text-fg3">
                    –
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <dl className="border-t border-border pt-4">
              <dt className="label">Stack</dt>
              <dd className="mt-2 font-mono text-[13px] leading-relaxed text-fg2">{project.tech.join(', ')}</dd>
            </dl>

            <ul className="mt-8 flex flex-col gap-3 text-sm">
              {project.links.map((link) => (
                <li key={link.href}>
                  <TextLink href={link.href} external>
                    {link.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </li>
  );
}
