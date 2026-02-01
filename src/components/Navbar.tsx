import React, { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Tours', href: '#tours' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Stories', href: '#testimonials' },
  { label: 'Contact', href: '#newsletter' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-black/90 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-primary-yellow tracking-tight">
          Travel<span className="text-white">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-white/90 hover:text-primary-yellow text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#tours"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-primary-yellow text-primary-black font-semibold text-sm hover:bg-primary-yellow/90 transition-colors"
        >
          Book a Tour
        </a>

        <button
          type="button"
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-primary-black border-t border-white/10 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-2 text-white/90 hover:text-primary-yellow font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#tours"
            className="block py-2 text-primary-yellow font-semibold"
            onClick={() => setOpen(false)}
          >
            Book a Tour
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
