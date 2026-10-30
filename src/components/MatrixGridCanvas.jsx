import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas Component
 * Renders a subtle, high-performance HTML5 canvas dot matrix grid.
 * Features:
 * - Cyber-Emerald / Lime color scheme
 * - Gentle ambient mathematical wave undulation
 * - Interactive mouse ripple & perspective displacement
 * - Auto-adapts to retina/HiDPI screens and window resize
 */
export default function MatrixGridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Grid configuration
    const SPACING = 34; // distance between dots
    const INFLUENCE_RADIUS = 160; // mouse interaction radius
    const MAX_DISPLACEMENT = 16; // max pixels pushed by cursor
    const BASE_DOT_RADIUS = 1.25;

    // Mouse state
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    // Store grid points
    interface GridPoint {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      phase: number;
    }
    let points = [];

    const initGrid = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Generate points
      points = [];
      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = c * SPACING - SPACING / 2;
          const baseY = r * SPACING - SPACING / 2;
          points.push({
            baseX,
            baseY,
            x: baseX,
            y: baseY,
            phase: (c + r) * 0.25,
          });
        }
      }
    };

    initGrid();

    // Event listeners
    const handleResize = () => {
      initGrid();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
      mouse.active = false;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove);

    // Animation Loop
    let time = 0;
    const render = () => {
      time += 0.02;

      // Smooth mouse interpolation (spring-like lag)
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective cyber lines between close points near mouse
      const len = points.length;
      for (let i = 0; i < len; i++) {
        const p = points[i];

        // Ambient undulating sine wave
        const waveX = Math.cos(time * 0.6 + p.phase) * 1.5;
        const waveY = Math.sin(time * 0.7 + p.phase) * 2.2;

        let curX = p.baseX + waveX;
        let curY = p.baseY + waveY;

        // Mouse displacement calculation
        const dx = curX - mouse.x;
        const dy = curY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let intensity = 0;
        let dotRadius = BASE_DOT_RADIUS;
        let fillStyle = 'rgba(16, 185, 129, 0.14)'; // Crisp emerald base

        if (dist < INFLUENCE_RADIUS) {
          // Normalize proximity factor (1 at center, 0 at edge)
          const factor = Math.cos((dist / INFLUENCE_RADIUS) * (Math.PI / 2));
          intensity = Math.pow(factor, 1.8);

          // Push points outward like a ripple
          const angle = Math.atan2(dy, dx);
          const push = intensity * MAX_DISPLACEMENT;
          curX += Math.cos(angle) * push;
          curY += Math.sin(angle) * push;

          // Enlarge dots near cursor
          dotRadius = BASE_DOT_RADIUS + intensity * 2.2;

          // Transition to bright cyber-lime / neon emerald
          const r = Math.round(16 + intensity * (163 - 16));  // 16 -> 163 (lime-400)
          const g = Math.round(185 + intensity * (230 - 185)); // 185 -> 230
          const b = Math.round(129 - intensity * (129 - 53));  // 129 -> 53
          const alpha = 0.2 + intensity * 0.75;
          fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(curX, curY, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = fillStyle;
        ctx.fill();

        // Optional tiny glow ring for dots with high intensity
        if (intensity > 0.65) {
          ctx.beginPath();
          ctx.arc(curX, curY, dotRadius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(163, 230, 53, ${(intensity * 0.25).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
      aria-hidden="true"
    />
  );
}

