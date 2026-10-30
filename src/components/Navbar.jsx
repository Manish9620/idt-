import React, { useState, useEffect } from 'react';

/**
 * Navbar Component
 * Floating frosted-glass navigation bar.
 * - Stays fixed on scroll with dynamic blur depth & shadow
 * - Cyber-Emerald aesthetics (#0d1117 carbon background, #10b981 emerald, #a3e635 lime)
 * - Name/Logo with terminal-inspired styling
 * - Clean navigation links with interactive hover states
 * - Mobile responsive drawer with animated toggle
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
      <nav
        aria-label="Main Navigation"
        className={`w-full max-w-5xl transition-all duration-300 rounded-2xl border ${
          scrolled
            ? 'bg-[#0d1117]/85 backdrop-blur-xl border-emerald-500/25 shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(16,185,129,0.1)] py-2.5 px-4 sm:px-6'
            : 'bg-[#0d1117]/65 backdrop-blur-md border-emerald-500/15 shadow-[0_4px_20px_rgba(0,0,0,0.4)] py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
            onClick={() => setActiveLink('Home')}
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500/20 to-lime-500/10 border border-emerald-500/40 group-hover:border-lime-400 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.35)] transition-all duration-300">
              <span className="font-mono text-xs font-bold text-emerald-400 group-hover:text-lime-300 transition-colors">
                &lt;M/&gt;
              </span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Manish Shirvi
              </span>
              <span className="text-[11px] font-mono text-emerald-400/80 tracking-widest uppercase">
                dev.portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-[#161b22]/70 p-1.5 rounded-xl border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.name)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-emerald-500/15 shadow-[0_0_10px_rgba(16,185,129,0.15)]'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-[2px] bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Action Button & Terminal indicator */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:border-lime-400 rounded-lg hover:shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:text-lime-300 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Say Hello</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-zinc-300 hover:text-white bg-white/5 border border-emerald-500/20 hover:border-emerald-500/40 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-5 h-5 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-emerald-500/15 animate-fadeIn">
            <div className="flex flex-col gap-1.5 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name);
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg text-zinc-300 hover:text-white hover:bg-emerald-500/10 hover:border-emerald-500/20 border border-transparent transition-all"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-emerald-400/60">&gt;</span>
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono font-medium text-black bg-gradient-to-r from-emerald-400 to-lime-400 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all"
                >
                  <span>Get in Touch</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

