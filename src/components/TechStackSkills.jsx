import React, { useState } from 'react';

/**
 * Official & Semiotic SVG Icons for Tech Badges
 * All SVGs are inline, lightweight, and render crisp at any resolution.
 */
const TechIcon = ({ name, className = 'w-4 h-4' }) => {
  switch (name) {
    case 'cpp':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#34d399" />
          <path d="M10 10a3 3 0 100 4" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 11v2m-1-1h2m2-1v2m-1-1h2" stroke="#6ee7b7" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'python':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M11.91 2c-3.1 0-2.91 1.34-2.91 1.34l.01 1.39h2.95v.42H6.04S4 4.92 4 8.01c0 3.1 1.78 2.99 1.78 2.99h1.06v-1.48s-.06-1.78 1.74-1.78h3v-.89s.02-.85.83-.85h3.04V4.18S15.45 2 11.91 2zm-1.63 1.15a.62.62 0 110 1.24.62.62 0 010-1.24z"
            fill="#34d399"
          />
          <path
            d="M12.09 22c3.1 0 2.91-1.34 2.91-1.34l-.01-1.39h-2.95v-.42h5.92s2.04.23 2.04-2.86c0-3.1-1.78-2.99-1.78-2.99h-1.06v1.48s.06 1.78-1.74 1.78h-3v.89s-.02.85-.83.85H8.55v1.81S8.55 22 12.09 22zm1.63-1.15a.62.62 0 110-1.24.62.62 0 010 1.24z"
            fill="#a3e635"
          />
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect width="20" height="20" x="2" y="2" rx="3.5" fill="#161b22" stroke="#eab308" strokeWidth="1.5" />
          <path
            d="M9.5 15.2c.4.7.9 1.2 1.8 1.2 1 0 1.5-.5 1.5-1.5v-6h1.8v6c0 1.9-1.2 2.8-3.1 2.8-1.5 0-2.5-.8-2.8-1.7l.8-.8zm5.5.9c.5.5 1.2.9 2.2.9 1.1 0 1.8-.6 1.8-1.4 0-.9-.7-1.3-1.9-1.8-1.5-.6-2.5-1.3-2.5-2.7 0-1.5 1.2-2.7 3-2.7 1.2 0 2 .4 2.6 1.1l-.9.9c-.4-.5-1-.8-1.7-.8-.8 0-1.3.5-1.3 1.1 0 .7.5 1.1 1.7 1.6 1.6.7 2.7 1.3 2.7 2.9 0 1.7-1.3 2.8-3.4 2.8-1.4 0-2.4-.5-3.1-1.4l.8-.9z"
            fill="#facc15"
          />
        </svg>
      );
    case 'typescript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect width="20" height="20" x="2" y="2" rx="3.5" fill="#161b22" stroke="#38bdf8" strokeWidth="1.5" />
          <path
            d="M6 10h5m-2.5 0v7M14 10.5c.5-.4 1.2-.6 2-.6 1.3 0 2.2.8 2.2 2s-.8 1.8-2 2.3c-.9.4-1.2.7-1.2 1.2 0 .5.4.9 1.2.9.8 0 1.5-.4 2-.8"
            stroke="#38bdf8"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 19c3 1.5 7 1.5 10 0M6 15c4 2 8 2 12 0" stroke="#f97316" strokeLinecap="round" />
          <path d="M10 4c-1 2 1 3-1 6M14 3c-1 2 1 3-1 6M12 11c-2 2 0 4-1 6" stroke="#34d399" strokeLinecap="round" />
        </svg>
      );
    case 'sql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#10b981" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" stroke="#10b981" />
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.6">
          <circle cx="12" cy="12" r="2" fill="#38bdf8" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path
            d="M6 12c1.5-3 3.5-3.5 5.5-2 1.5 1.1 2.5 2 4.5 2 2 0 3.5-1.5 4.5-4-1.5 3-3.5 3.5-5.5 2-1.5-1.1-2.5-2-4.5-2-2 0-3.5 1.5-4.5 4z"
            fill="#38bdf8"
          />
          <path
            d="M2 17c1.5-3 3.5-3.5 5.5-2 1.5 1.1 2.5 2 4.5 2 2 0 3.5-1.5 4.5-4-1.5 3-3.5 3.5-5.5 2-1.5-1.1-2.5-2-4.5-2-2 0-3.5 1.5-4.5 4z"
            fill="#34d399"
          />
        </svg>
      );
    case 'nodejs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.8">
          <path d="M12 2l8 4.6v9.2l-8 4.6-8-4.6V6.6L12 2z" />
          <path d="M12 7l4 2.3v4.6l-4 2.3-4-2.3V9.3L12 7z" fill="#22c55e" fillOpacity="0.2" />
        </svg>
      );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8">
          <circle cx="6" cy="6" r="2.5" fill="#f97316" />
          <circle cx="18" cy="9" r="2.5" fill="#f97316" />
          <circle cx="6" cy="18" r="2.5" fill="#f97316" />
          <path d="M6 8.5v7m0-3.5c3 0 7-1 9-3" strokeLinecap="round" />
        </svg>
      );
    case 'docker':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8">
          <rect x="5" y="10" width="2" height="2" fill="#38bdf8" />
          <rect x="8" y="10" width="2" height="2" fill="#38bdf8" />
          <rect x="11" y="10" width="2" height="2" fill="#38bdf8" />
          <rect x="8" y="7" width="2" height="2" fill="#38bdf8" />
          <rect x="11" y="7" width="2" height="2" fill="#38bdf8" />
          <path d="M2 13c1.5 2 4 3 8 3s9-1.5 11-4c.5-1 0-2-1.5-2-1 0-2.5 1-4 1H2z" />
        </svg>
      );
    case 'fastapi':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M13 6l-5 7h4l-1 5 6-8h-4l2-4z" fill="#a3e635" stroke="#a3e635" />
        </svg>
      );
    case 'dsa':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="5" r="2.5" fill="#10b981" />
          <circle cx="6" cy="17" r="2.5" fill="#a3e635" />
          <circle cx="18" cy="17" r="2.5" fill="#a3e635" />
          <path d="M10.5 7L7.5 15M13.5 7l3 8" stroke="#34d399" />
        </svg>
      );
    case 'oop':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="#a3e635" />
          <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" stroke="#10b981" />
        </svg>
      );
    case 'dbms':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="4" width="18" height="6" rx="2" stroke="#34d399" />
          <rect x="3" y="14" width="18" height="6" rx="2" stroke="#10b981" />
          <circle cx="7" cy="7" r="1" fill="#a3e635" />
          <circle cx="7" cy="17" r="1" fill="#a3e635" />
          <path d="M14 7h4M14 17h4" stroke="#a3e635" strokeLinecap="round" />
        </svg>
      );
    case 'os':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="#10b981" />
          <rect x="9" y="9" width="6" height="6" fill="#10b981" fillOpacity="0.3" stroke="#a3e635" />
          <path d="M9 1v3m6-3v3M9 20v3m6-3v3M1 9h3m-3 6h3M20 9h3m-3 6h3" stroke="#34d399" strokeLinecap="round" />
        </svg>
      );
    case 'networks':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="9" y="2" width="6" height="5" rx="1.5" stroke="#10b981" />
          <rect x="2" y="17" width="6" height="5" rx="1.5" stroke="#a3e635" />
          <rect x="16" y="17" width="6" height="5" rx="1.5" stroke="#a3e635" />
          <path d="M12 7v5m0 0H5v5m7-5h7v5" stroke="#34d399" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
      );
  }
};

/**
 * SkillPill Component
 * Renders an interactive badge that scales up (scale-105), glows with an emerald border,
 * and reveals a sleek tooltip showing comfort level.
 */
function SkillPill({ skill }) {
  const [isHovered, setIsHovered] = useState(false);

  // Status color styles for comfort levels
  const getLevelBadge = (level) => {
    switch (level) {
      case 'Proficient':
        return {
          text: 'text-emerald-300',
          dot: 'bg-emerald-400',
          border: 'border-emerald-500/40',
          bg: 'bg-emerald-950/90',
        };
      case 'Familiar':
        return {
          text: 'text-lime-300',
          dot: 'bg-lime-400',
          border: 'border-lime-500/40',
          bg: 'bg-lime-950/90',
        };
      case 'Currently Learning':
      default:
        return {
          text: 'text-teal-300',
          dot: 'bg-teal-400',
          border: 'border-teal-500/40',
          bg: 'bg-teal-950/90',
        };
    }
  };

  const levelStyle = getLevelBadge(skill.level);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Tooltip */}
      <div
        className={`absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-200 z-30 whitespace-nowrap ${
          isHovered ? 'opacity-100 -translate-y-1 scale-100' : 'opacity-0 translate-y-2 scale-95'
        }`}
      >
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${levelStyle.bg} ${levelStyle.border} border shadow-[0_4px_15px_rgba(0,0,0,0.7)] backdrop-blur-md`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${levelStyle.dot} animate-pulse`} />
          <span className={`font-mono text-[10px] font-semibold uppercase tracking-wider ${levelStyle.text}`}>
            {skill.level}
          </span>
          {/* Tooltip downward caret */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-solid border-t-emerald-900 border-t-4 border-x-transparent border-x-4 border-b-0" />
        </div>
      </div>

      {/* Skill Badge */}
      <button
        type="button"
        className={`group relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#161b22]/70 hover:bg-[#161b22] border transition-all duration-200 cursor-pointer select-none ${
          isHovered
            ? 'scale-105 border-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.35)] -translate-y-0.5'
            : 'border-emerald-500/20 hover:border-emerald-500/40'
        }`}
      >
        <div className="flex items-center justify-center w-5 h-5 transition-transform group-hover:scale-110">
          <TechIcon name={skill.icon} />
        </div>
        <span className="font-mono text-xs font-medium text-zinc-200 group-hover:text-emerald-300 transition-colors">
          {skill.name}
        </span>
      </button>
    </div>
  );
}

/**
 * TechStackSkills Component
 * 3 categorized groups:
 * 1. Languages
 * 2. Frameworks & Tools
 * 3. Core CS Concepts
 */
export default function TechStackSkills() {
  const categories = [
    {
      id: 'languages',
      title: 'Languages',
      badge: 'Syntax & Logic',
      description: 'Foundational programming languages used for problem solving and software architecture.',
      skills: [
        { name: 'C++', icon: 'cpp', level: 'Proficient' },
        { name: 'Python', icon: 'python', level: 'Proficient' },
        { name: 'JavaScript', icon: 'javascript', level: 'Proficient' },
        { name: 'TypeScript', icon: 'typescript', level: 'Familiar' },
        { name: 'Java', icon: 'java', level: 'Familiar' },
        { name: 'SQL', icon: 'sql', level: 'Proficient' },
      ],
    },
    {
      id: 'frameworks-tools',
      title: 'Frameworks & Tools',
      badge: 'Development Ecosystem',
      description: 'Modern component libraries, backends, styling toolkits, and DevOps automation.',
      skills: [
        { name: 'React', icon: 'react', level: 'Proficient' },
        { name: 'Tailwind CSS', icon: 'tailwind', level: 'Proficient' },
        { name: 'Node.js', icon: 'nodejs', level: 'Familiar' },
        { name: 'Git & GitHub', icon: 'git', level: 'Proficient' },
        { name: 'FastAPI', icon: 'fastapi', level: 'Currently Learning' },
        { name: 'Docker', icon: 'docker', level: 'Currently Learning' },
      ],
    },
    {
      id: 'core-concepts',
      title: 'Core CS Concepts',
      badge: 'Computer Science Core',
      description: 'Theoretical fundamentals, systems engineering principles, and data management.',
      skills: [
        { name: 'Data Structures & Alg', icon: 'dsa', level: 'Proficient' },
        { name: 'Object-Oriented (OOP)', icon: 'oop', level: 'Proficient' },
        { name: 'DBMS & Modeling', icon: 'dbms', level: 'Proficient' },
        { name: 'Operating Systems (OS)', icon: 'os', level: 'Familiar' },
        { name: 'Computer Networks', icon: 'networks', level: 'Familiar' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-emerald-500/15">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-lime-400 mb-2.5 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>// CAPABILITIES & MASTERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack & <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            A breakdown of my software engineering capabilities, development toolchain, and academic CS competencies.
          </p>
        </div>

        {/* Legend for Comfort Levels */}
        <div className="flex flex-wrap items-center gap-3 bg-[#161b22]/70 p-2.5 rounded-xl border border-emerald-500/15">
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]"></span>
            <span>Proficient</span>
          </div>
          <span className="text-zinc-600">//</span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_6px_#a3e635]"></span>
            <span>Familiar</span>
          </div>
          <span className="text-zinc-600">//</span>
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_6px_#2dd4bf]"></span>
            <span>Learning</span>
          </div>
        </div>
      </div>

      {/* 3 Tidy Category Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {categories.map((cat, idx) => (
          <div
            key={cat.id}
            className="group relative flex flex-col justify-between rounded-2xl bg-[#161b22]/70 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.14)] p-6 sm:p-7 transition-all duration-300 overflow-hidden"
          >
            {/* Top Emerald Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent group-hover:via-lime-400/60 transition-all duration-500" />

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="font-mono text-[11px] font-semibold text-lime-400 uppercase tracking-wider px-2.5 py-0.5 rounded bg-lime-400/10 border border-lime-400/20">
                  {cat.badge}
                </span>
                <span className="font-mono text-xs text-zinc-500">
                  0{idx + 1} // 03
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                {cat.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-normal">
                {cat.description}
              </p>
            </div>

            {/* Interactive Skill Badges with Tooltips */}
            <div className="flex flex-wrap gap-2.5 pt-4 border-t border-emerald-500/10">
              {cat.skills.map((skill) => (
                <SkillPill key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Subtle Terminal Micro-Prompt */}
      <div className="mt-12 text-center">
        <span className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-emerald-300 transition-colors">
          <span className="text-emerald-400">&gt;</span>
          <span>Hover badges to inspect comfort level and proficiency</span>
        </span>
      </div>
    </section>
  );
}

