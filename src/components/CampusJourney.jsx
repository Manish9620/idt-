import React, { useState } from 'react';

/**
 * CampusJourney Component
 * Features:
 * - Illuminated emerald vertical timeline with glowing nodal dots
 * - 3 Milestones: 2026, 2025, 2024 with concise 1-line notes
 * - Compact 2x2 Achievement Badges grid with cyber-emerald hover highlights
 */
export default function CampusJourney() {
  const [activeMilestone, setActiveMilestone] = useState(null);

  const milestones = [
    {
      year: '2026',
      title: 'Make Money // Scaling Production Products & Career Launch',
      note: 'Monetizing full-stack software architectures, launching commercial SaaS experiments, and securing high-impact engineering roles.',
      status: 'Upcoming Goal',
      badgeColor: 'border-emerald-400 text-emerald-300 bg-emerald-950/60',
      nodeColor: 'bg-emerald-400 shadow-[0_0_12px_#10b981]',
    },
    {
      year: '2025',
      title: 'Make Money // High-Growth Internships & Client Solutions',
      note: 'Landing top-tier developer internships, delivering paid freelance web solutions, and turning algorithmic knowledge into scalable software.',
      status: 'Current Focus',
      badgeColor: 'border-lime-400 text-lime-300 bg-lime-950/60',
      nodeColor: 'bg-lime-400 shadow-[0_0_12px_#a3e635]',
    },
    {
      year: '2024',
      title: 'Make Money // First Paid Client Work & Hackathon Wins',
      note: 'Kickstarting initial client contracts, winning campus hackathons with cash prizes, and building revenue-driven developer tools.',
      status: 'Completed',
      badgeColor: 'border-teal-400 text-teal-300 bg-teal-950/60',
      nodeColor: 'bg-teal-400 shadow-[0_0_12px_#2dd4bf]',
    },
  ];

  const achievements = [
    {
      icon: '🏆',
      title: '1st Place - University Hackathon',
      subtitle: 'Built an AI-assisted campus navigation tool with 4-person team',
      metric: 'Top 1% of 60 Teams',
    },
    {
      icon: '⚡',
      title: '150+ LeetCode Solved',
      subtitle: 'Consistent focus on Graphs, Trees, and Dynamic Programming',
      metric: 'Top 15% Contest Rating',
    },
    {
      icon: '👥',
      title: 'Tech Club Organizer',
      subtitle: 'Spearheaded peer programming circles and workshops for 200+ students',
      metric: '5+ Campus Workshops',
    },
    {
      icon: '📜',
      title: 'Full-Stack Certified',
      subtitle: 'Validated competence in modern React architectures, APIs, and databases',
      metric: 'Certified Developer',
    },
  ];

  return (
    <section id="campus-life" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-emerald-500/15">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-lime-400 mb-2.5 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>// TIMELINE & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">Campus Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            My collegiate milestones, developer milestones, and key achievements outside the lecture hall.
          </p>
        </div>

        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#161b22]/80 border border-emerald-500/20 text-xs font-mono text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>B.Tech Undergrad // Active Journey</span>
        </div>
      </div>

      {/* Main 2-Column Split: Timeline (Left) & Achievement Grid (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Vertical Illuminated Milestone Timeline (7 cols) */}
        <div className="lg:col-span-7 relative pl-6 sm:pl-8">
          {/* Continuous Glowing Emerald Connecting Line */}
          <div className="absolute left-[11px] sm:left-[15px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-emerald-400 via-teal-400 to-lime-400/30 shadow-[0_0_10px_rgba(16,185,129,0.45)]" />

          <div className="flex flex-col gap-8">
            {milestones.map((m, idx) => {
              const isHovered = activeMilestone === idx;
              return (
                <div
                  key={m.year}
                  className="relative group"
                  onMouseEnter={() => setActiveMilestone(idx)}
                  onMouseLeave={() => setActiveMilestone(null)}
                >
                  {/* Glowing Nodal Dot on Line */}
                  <div
                    className={`absolute -left-[27px] sm:-left-[31px] top-4 w-4 h-4 rounded-full border-2 border-[#0d1117] transition-all duration-300 z-10 flex items-center justify-center ${
                      m.nodeColor
                    } ${isHovered ? 'scale-125 ring-4 ring-emerald-500/30' : ''}`}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Milestone Card */}
                  <div
                    className={`relative p-5 sm:p-6 rounded-2xl bg-[#161b22]/70 backdrop-blur-xl border transition-all duration-300 ${
                      isHovered
                        ? 'border-emerald-400/60 shadow-[0_8px_30px_rgba(16,185,129,0.2)] -translate-y-1 bg-[#161b22]/90'
                        : 'border-emerald-500/20 hover:border-emerald-500/40'
                    }`}
                  >
                    {/* Top Meta: Year & Status Pill */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {m.year}
                        </span>
                        <span className="text-zinc-600">//</span>
                        <span className={`font-mono text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md border ${m.badgeColor}`}>
                          {m.status}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-zinc-500">
                        Milestone 0{idx + 1}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-base sm:text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors mb-2">
                      {m.title}
                    </h3>

                    {/* 1-Line Concise Note */}
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {m.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Compact 2x2 Achievement Badges (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-xs font-semibold text-lime-400 uppercase tracking-wider">
              // Highlights & Achievements
            </span>
            <span className="font-mono text-[11px] text-zinc-500">4 Verified Badges</span>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-4 sm:p-4.5 rounded-2xl bg-[#161b22]/70 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_8px_25px_rgba(16,185,129,0.18)] hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Subtle top edge glow */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="font-mono text-[10px] text-emerald-400/80 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/20">
                      {item.metric}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mb-1.5 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-[11px] text-zinc-400 leading-relaxed font-normal">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership & Activities Callout Box */}
          <div className="mt-2 p-4 rounded-xl bg-gradient-to-r from-emerald-950/30 to-lime-950/20 border border-emerald-500/20 flex items-start gap-3">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold shrink-0">
              ⚡
            </div>
            <div className="text-xs text-zinc-300 leading-relaxed">
              <strong className="text-white font-semibold">Campus Leadership:</strong> Active student community contributor, hosting open coding sessions, AI reading groups, and mentoring freshmen developers.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

