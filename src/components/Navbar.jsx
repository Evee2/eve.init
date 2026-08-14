import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const sections = [
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/#projects' },
  { label: 'Architecture', to: '/#architecture' },
  { label: 'Contact', to: '/#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line/[0.18] bg-[rgba(7,14,27,0.78)] backdrop-blur-xl">
      <div className="shell flex items-center justify-between gap-4 py-4">
        <Link to="/" className="font-display text-xl font-bold tracking-[0.08em]">
          eve<span className="text-warm">.init</span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">
          {sections.map((section) => (
            <a key={section.label} href={section.to} className="text-sm text-muted transition hover:text-ink">
              {section.label}
            </a>
          ))}
          <NavLink
            to="/resume"
            className={({ isActive }) => `text-sm transition hover:text-ink ${isActive ? 'text-ink' : 'text-muted'}`}
          >
            Resume
          </NavLink>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/[0.18] bg-white/[0.04] md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="card-surface mx-4 mb-4 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
          {sections.map((section) => (
            <a
              key={section.label}
              href={section.to}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-ink"
            >
              {section.label}
            </a>
          ))}
          <Link to="/resume" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 text-sm text-muted hover:bg-white/5 hover:text-ink">
            Resume
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
