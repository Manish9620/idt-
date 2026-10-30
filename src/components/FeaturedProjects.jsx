import React, { useState, useRef } from 'react';

/**
 * ProjectCard Component
 * Implements 3D perspective tilt physics, cursor-following emerald shine,
 * hover elevation (translateY(-6px)), and glowing edge transitions.
 */
function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
    transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.3s ease',
  });
  const [shine, setShine] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (max ~8-9 degrees)
    const rotateX = ((y - centerY) / centerY) * -8.5;
    const rotateY = ((x - centerX) / centerX) * 8.5;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`,
      transition: 'transform 0.08s ease-out, box-shadow 0.2s ease, border-color 0.2s ease',
    });

    setShine({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      transition: 'transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s ease, border-color 0.3s ease',
    });
    setShine((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#161b22]/75 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-400/50 hover:shadow-[0_14px_40px_rgba(16,185,129,0.22)] p-6 sm:p-7 transition-all duration-300 will-change-transform overflow-hidden"
    >
      {/* Sleek Interactive Cursor-Following Radial Shine */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(circle 260px at ${shine.x}% ${shine.y}%, rgba(16, 185, 129, 0.16), rgba(163, 230, 53, 0.06) 45%, transparent 75%)`,
          opacity: shine.opacity,
        }}
      />

      {/* Top Ambient Cyber Highlight Line */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Card Header & Metadata */}
      <div className="relative z-10 mb-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-lime-400 px-2.5 py-1 rounded-md bg-lime-400/10 border border-lime-400/20">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
            {project.badge}
          </span>
          <span className="font-mono text-xs text-zinc-500 group-hover:text-emerald-400/80 transition-colors">
            {project.index}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors duration-200 mb-2.5">
          {project.title}
        </h3>

        {/* 2-Sentence Project Description */}
        <p className="text-sm text-zinc-300 leading-relaxed font-normal">
          {project.description}
        </p>
      </div>

      {/* Card Footer: Tech Badges & Action Buttons */}
      <div className="relative z-10 mt-5 pt-4 border-t border-emerald-500/10 flex flex-col gap-4">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-[#0d1117]/80 text-emerald-300/90 border border-emerald-500/25 group-hover:border-emerald-500/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons: Live Demo & GitHub Code */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          {/* Live Demo Button */}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-black bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-lime-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(163,230,53,0.45)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <span>Live Demo</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          {/* GitHub Code Button */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-[#0d1117]/80 hover:bg-[#1f242c] border border-emerald-500/30 hover:border-lime-400/60 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>GitHub Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * FeaturedProjects Component
 * Renders the filter pill navigation and the 3-column responsive grid
 * of interactive 3D perspective tilt cards.
 */
export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Web Apps', 'AI / ML', 'Mini-Projects'];

  const projectsData = [
    {
      id: 'p1',
      index: '// 01',
      title: 'Inventory Management System',
      category: 'Web Apps',
      badge: 'Full Stack App',
      description:
        'Streamlines real-time asset tracking and stock-level notifications for campus labs and small businesses. Eliminates supply bottlenecks with automated low-stock threshold triggers and dynamic analytics.',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Chart.js'],
      demoUrl: 'https://example.com/inventory-demo',
      githubUrl: 'https://github.com/manishshirvi/inventory-management',
    },
    {
      id: 'p2',
      index: '// 02',
      title: 'Real-Time Vision & Analytics with Python',
      category: 'AI / ML',
      badge: 'AI / Computer Vision',
      description:
        'Leverages deep neural networks and OpenCV to process live camera feeds for automated attendance and gesture recognition. Delivers sub-second inference at 30+ FPS with edge deployment and zero cloud latency.',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'NumPy'],
      demoUrl: 'https://example.com/python-vision-demo',
      githubUrl: 'https://github.com/manishshirvi/python-cv-analytics',
    },
    {
      id: 'p3',
      index: '// 03',
      title: '[REPLACE: Project 3 Title, e.g., Student Notes Marketplace]',
      category: 'Web Apps',
      secondaryCategory: 'Mini-Projects',
      badge: 'Campus Marketplace',
      description:
        'A peer-to-peer portal designed for university students to publish, discover, and rate semester study guides and lecture notes. Integrates instant semantic search, verified student ratings, and fast browser document previews.',
      tech: ['Tailwind', 'Node.js', 'Express', 'PostgreSQL'],
      demoUrl: 'https://example.com/notes-marketplace-demo',
      githubUrl: 'https://github.com/manishshirvi/student-notes-marketplace',
    },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === project.category) return true;
    if (project.secondaryCategory === activeFilter) return true;
    return false;
  });

  return (
    <section id="projects" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 border-t border-emerald-500/15">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-lime-400 mb-2.5 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>// PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-emerald-400 to-lime-300 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Selected real-world applications, intelligent AI models, and student tools engineered with modern tech stacks.
          </p>
        </div>

        {/* Filter Pill Row */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'text-black bg-gradient-to-r from-emerald-400 to-lime-400 shadow-[0_0_20px_rgba(16,185,129,0.35)] font-semibold'
                    : 'text-zinc-400 hover:text-white bg-[#161b22]/70 hover:bg-[#161b22] border border-emerald-500/20 hover:border-emerald-500/40'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State fallback if a filter yields 0 items */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 px-4 rounded-2xl bg-[#161b22]/50 border border-emerald-500/15">
          <p className="font-mono text-sm text-zinc-400">
            No projects found under <span className="text-emerald-400">"{activeFilter}"</span>.
          </p>
          <button
            type="button"
            onClick={() => setActiveFilter('All')}
            className="mt-4 px-4 py-2 rounded-xl text-xs font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:border-lime-400"
          >
            Show All Projects
          </button>
        </div>
      )}

      {/* GitHub Callout Footer */}
      <div className="mt-14 pt-8 border-t border-emerald-500/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="text-xs font-mono text-zinc-400">
          Interested in more repositories & experimentations?
        </div>
        <a
          href="https://github.com/manishshirvi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-lime-300 transition-colors"
        >
          <span>View full project archive on GitHub</span>
          <span>&rarr;</span>
        </a>
      </div>
    </section>
  );
}

