import { profile } from '@/data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="page flex flex-col gap-3 py-8 font-mono text-xs text-fg3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with React &amp; Vite
        </p>
        <a href="#top" className="transition-colors hover:text-fg">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
