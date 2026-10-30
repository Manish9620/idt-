import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import TechStackSkills from './components/TechStackSkills';
import CampusJourney from './components/CampusJourney';
import MatrixGridCanvas from './components/MatrixGridCanvas';

/**
 * Main Application Component
 * Theme: Cyber-Emerald / Dark Mode (#0d1117 matte carbon base)
 */
export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-zinc-100 selection:bg-emerald-500 selection:text-black overflow-x-hidden">
      {/* Background HTML5 Canvas with Matrix-Dot Ripple Effect */}
      <MatrixGridCanvas />

      {/* Floating Frosted-Glass Navigation Bar */}
      <Navbar />

      {/* Hero Opening Screen */}
      <main>
        <Hero />

        {/* Featured Projects Showcase with 3D Tilt Cards & Filter Pills */}
        <FeaturedProjects />

        {/* Interactive Tech Stack & Skills Section with Tooltips & Badges */}
        <TechStackSkills />

        {/* Education & Campus Journey: Milestone Timeline & 2x2 Achievements */}
        <CampusJourney />

        {/* Additional Portfolio Sections */}
        <section id="about" className="relative z-10 max-w-5xl mx-auto px-6 py-24 border-t border-emerald-500/10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-emerald-400 text-sm">01.</span>
            <h2 className="text-2xl font-bold text-white tracking-tight">About Me</h2>
            <div className="h-[1px] bg-emerald-500/20 flex-1 ml-4" />
          </div>
          <p className="text-zinc-400 max-w-2xl leading-relaxed">
            I am a student developer passionate about machine learning, scalable backend architectures, and crafting intuitive, responsive web experiences. When I am not writing code, you can find me exploring open-source repositories or participating in hackathons.
          </p>
        </section>

        <section id="contact" className="relative z-10 max-w-5xl mx-auto px-6 py-24 border-t border-emerald-500/10 text-center">
          <div className="inline-block font-mono text-xs text-lime-400 mb-3 tracking-widest uppercase">
            // Ready to collaborate?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Let's Connect</h2>
          <p className="text-zinc-400 max-w-lg mx-auto mb-8">
            Whether you have an internship opportunity, project idea, or just want to chat about AI and web development, my inbox is always open.
          </p>
          <a
            href="mailto:manish.shirvi@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-emerald-400 to-lime-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300"
          >
            Send an Email &rarr;
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-emerald-500/10 py-8 text-center text-xs font-mono text-zinc-500">
        Designed & Built by Manish Shirvi &bull; Cyber-Emerald Theme
      </footer>
    </div>
  );
}
