import React, { useState } from 'react';

/**
 * Hero Component
 * Cyber-Emerald intro screen designed for high impact:
 * - Animated blinking radar pill status badge
 * - Bold typographic headline with emerald-to-lime neon gradient
 * - Student bio with replaceable degree & college prompt
 * - Interactive primary button with hover lift & glow
 * - Secondary outline button with resume icon & feedback
 * - Ambient cyber accents & metadata tags
 */
export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('manish.shirvi@example.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-28 pb-16 overflow-hidden">
      {/* Ambient Cyber Lighting (Dark matte background with neon emerald & lime atmospheric depth) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-tr from-emerald-500/12 via-teal-500/8 to-lime-400/10 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -left-20 w-72 h-72 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -right-20 w-80 h-80 bg-lime-500/8 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Cyber Corner Decals (Terminal grid markers) */}
      <div className="absolute top-24 left-8 hidden lg:block font-mono text-[11px] text-emerald-500/30 select-none pointer-events-none">
        <div>[SYS_STATUS: ONLINE]</div>
        <div>[PORT: 3000 // PROTOCOL: HTTPS]</div>
      </div>
      <div className="absolute top-24 right-8 hidden lg:block font-mono text-[11px] text-right text-emerald-500/30 select-none pointer-events-none">
        <div>[NODE: ASIA-SOUTH1]</div>
        <div>[UPTIME: 99.98%]</div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Status Badge: Animated blinking radar pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#161b22]/90 border border-emerald-500/30 hover:border-lime-400/60 shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 group cursor-default mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10b981]"></span>
          </span>
          <span className="font-mono text-xs font-semibold text-emerald-300 tracking-wide">
            Student Developer <span className="text-emerald-500/60">//</span> Open for Internships
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime-400 group-hover:scale-125 transition-transform"></span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
          Hey, I am <span className="text-white">Manish shirvi</span>
          <span className="text-emerald-400"> — </span>
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(16,185,129,0.3)]">
            Building the Future of Tech.
          </span>
        </h1>

        {/* Student Bio */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-normal mb-10 px-2">
          <span className="text-emerald-300/90 font-medium">
            [REPLACE: YOUR DEGREE & COLLEGE, e.g., 2nd Year aiml student passionate about web development, AI, and building real-world projects.]
          </span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          {/* Primary Action Button: Glowing Emerald with hover lift */}
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-[#0d1117] bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-lime-400 shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(163,230,53,0.5)] transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 group cursor-pointer"
          >
            <span>View My Projects</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Secondary Action Button: Outline with emerald/lime hover */}
          <a
            href="#resume"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-sm font-medium tracking-wide text-zinc-200 hover:text-white bg-[#161b22]/70 hover:bg-[#161b22] border border-emerald-500/35 hover:border-lime-400 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
          >
            <svg
              className="w-4 h-4 text-emerald-400 group-hover:text-lime-300 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <span>Download Resume / CV</span>
          </a>
        </div>

        {/* Tech Stack & Quick Information Badges */}
        <div className="w-full max-w-2xl pt-8 border-t border-emerald-500/15 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <span className="font-mono text-xs text-zinc-500 mr-1">// CORE FOCUS:</span>
          {['React / Next.js', 'Tailwind CSS', 'AI & Machine Learning', 'Python', 'FastAPI', 'System Design'].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#161b22]/80 text-zinc-300 border border-emerald-500/20 hover:border-lime-400/50 hover:text-emerald-300 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Quick Contact Micro-action */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-300 transition-colors focus:outline-none"
          >
            <span className="text-emerald-400">&gt;</span>
            <span>manish.shirvi@example.com</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400">
              {copiedEmail ? 'Copied! ✓' : 'Click to copy'}
            </span>
          </button>
        </div>

      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400/70">
          Scroll to explore
        </span>
        <div className="w-4 h-7 rounded-full border border-emerald-500/40 flex justify-center p-1">
          <div className="w-1 h-1.5 bg-emerald-400 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

