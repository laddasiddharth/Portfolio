import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/* ================================================================
   GLOBAL BACKGROUND — Immersive Experience
   Features: Noise texture, animated mesh gradients, aurora effects,
   cursor spotlight, floating particles, glass shapes.
   Performance: Optimized with CSS transforms and a lightweight canvas.
   ================================================================ */

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Spotlight Effect
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (spotlightRef.current) {
        // Use transform for better performance rather than left/top
        spotlightRef.current.style.transform = `translate(${e.clientX - 400}px, ${e.clientY - 400}px)`;
      }
    };
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let particles: Array<{ x: number, y: number, vx: number, vy: number, s: number, opacity: number, hue: number }> = [];
    const COUNT = 50;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        s: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() > 0.5 ? 260 : 190,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', background: 'var(--bg)' }}>
      
      {/* 1. Base Gradient / Aurora */}
      <div className="bg-aurora" />

      {/* 2. Animated Mesh Blobs */}
      <div className="mesh-blob blob-1" />
      <div className="mesh-blob blob-2" />
      <div className="mesh-blob blob-3" />

      {/* 3. Global Canvas Particles */}
      <canvas 
        ref={canvasRef} 
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} 
      />

      {/* 4. Floating Glass Shapes */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="glass-shape"
        style={{ top: '15%', left: '10%', width: 120, height: 120, borderRadius: '30%' }}
      />
      <motion.div
        animate={{ 
          y: [0, 40, 0],
          rotate: [0, -15, 10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="glass-shape"
        style={{ bottom: '20%', right: '15%', width: 180, height: 180, borderRadius: '40%' }}
      />
      <motion.div
        animate={{ 
          y: [0, -50, 0],
          x: [0, 30, 0],
          rotate: [0, 20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="glass-shape"
        style={{ top: '40%', right: '25%', width: 80, height: 80, borderRadius: '50%' }}
      />

      {/* 5. Cursor Spotlight */}
      <div 
        ref={spotlightRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 800,
          height: 800,
          background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
          willChange: 'transform',
        }}
      />

      {/* 6. Noise Texture Overlay (Ensures premium grain) */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <style>{`
        /* Aurora Base */
        .bg-aurora {
          position: absolute;
          inset: 0;
          background: linear-gradient(125deg, transparent 20%, rgba(139, 92, 246, 0.05) 50%, rgba(6, 182, 212, 0.05) 80%);
        }

        /* Mesh Gradients */
        .mesh-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.4;
          animation: blob-float 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
        
        .blob-1 {
          top: -10%;
          left: -10%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, var(--violet) 0%, transparent 70%);
          animation-duration: 25s;
        }
        
        .blob-2 {
          bottom: -20%;
          right: -10%;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, var(--cyan) 0%, transparent 70%);
          animation-duration: 30s;
          animation-delay: -5s;
        }
        
        .blob-3 {
          top: 40%;
          left: 30%;
          width: 40vw;
          height: 40vw;
          background: radial-gradient(circle, #ec4899 0%, transparent 70%);
          opacity: 0.15;
          animation-duration: 22s;
          animation-delay: -10s;
        }

        /* Floating Glass Shapes */
        .glass-shape {
          position: absolute;
          background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          pointer-events: none;
        }

        /* HTML dark theme overrides for mesh blobs */
        html[data-theme="light"] .blob-1,
        html[data-theme="light"] .blob-2,
        html[data-theme="light"] .blob-3 {
          opacity: 0.2;
        }
        html[data-theme="light"] .glass-shape {
          background: linear-gradient(135deg, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0.01) 100%);
          border: 1px solid rgba(0,0,0,0.05);
        }

        @keyframes blob-float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5%, 5%) scale(1.1); }
          100% { transform: translate(-5%, -5%) scale(0.95); }
        }
      `}</style>
    </div>
  );
}
