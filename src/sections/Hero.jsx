import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from('.hero-title span', {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(2)'
      });

      gsap.from('.stat-row', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        ease: 'power2.out'
      });

      gsap.from('.hero-avatar', {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'elastic.out(1, 0.5)'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" className="section-container hero-section" ref={containerRef}>
      <div className="hero-grid">
        {/* Profile Card */}
        <div className="hero-profile-card hud-card">
          <div className="hero-avatar">
            <div className="avatar-placeholder">DG</div>
            <div className="avatar-ring"></div>
          </div>
          <div className="hero-info">
            <h1 className="hero-title">
              <span>DEVANSH</span> <span>GUPTA</span>
            </h1>
            <h2 className="hero-subtitle">FULL STACK DEVELOPER // CLASS: ARCHITECT</h2>
            <p className="hero-bio">
              Frontend / Full Stack Developer skilled in React.js, TypeScript, and REST APIs. 
              Proven in performance optimization (up to 40%) and secure authentication.
            </p>
          </div>
        </div>

        {/* Character Stats Card */}
        <div className="hero-stats-card hud-card">
          <h3 className="section-label">CHARACTER_STATS.EXE</h3>
          <div className="stats-list">
            <StatRow label="SPEED" value="95" sub="Optimization Enthusiast" />
            <StatRow label="INTEL" value="90" sub="Problem Solver" />
            <StatRow label="STAMINA" value="85" sub="Scalable Architecture" />
            <StatRow label="LUCK" value="99" sub="Clean Code Logic" />
          </div>
          <div className="hero-links">
             <div className="link-item">Location: Pune, Maharashtra</div>
             <div className="link-item">Status: Ready for Deployment</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 120px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 30px;
          align-items: center;
        }
        .hero-profile-card {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .hero-avatar {
          position: relative;
          width: 150px;
          height: 150px;
        }
        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background: var(--primary);
          color: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 800;
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
        .avatar-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          border: 2px dashed var(--primary);
          border-radius: 50%;
          animation: spin 10s linear infinite;
        }
        @keyframes spin { from { rotate: 0deg; } to { rotate: 360deg; } }
        
        .hero-title {
          font-size: 4rem;
          line-height: 1;
          margin-bottom: 10px;
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }
        .hero-title span { display: inline-block; }
        .hero-subtitle {
          color: var(--primary);
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
        .hero-bio {
          font-size: 1.1rem;
          line-height: 1.6;
          opacity: 0.8;
          max-width: 600px;
        }
        
        .section-label {
          color: var(--accent);
          font-size: 0.9rem;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--accent);
          display: inline-block;
        }
        .stats-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 30px;
        }
        .hero-links {
          font-family: 'Consolas', monospace;
          font-size: 0.9rem;
          opacity: 0.7;
        }

        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 2.5rem; }
        }
      `}</style>
    </section>
  );
};

const StatRow = ({ label, value, sub }) => (
  <div className="stat-row">
    <div className="stat-meta">
      <span className="stat-row-label">{label}</span>
      <span className="stat-row-value">{value}%</span>
    </div>
    <div className="stat-bar-bg">
      <div className="stat-bar-fill" style={{ width: `${value}%` }}></div>
    </div>
    <div className="stat-sub">{sub}</div>
    <style jsx>{`
      .stat-row { margin-bottom: 10px; }
      .stat-meta { display: flex; justify-content: space-between; margin-bottom: 5px; font-family: 'Consolas', monospace; font-weight: bold; }
      .stat-row-label { font-size: 0.8rem; opacity: 0.8; }
      .stat-row-value { color: var(--primary); }
      .stat-bar-bg { height: 4px; background: rgba(255,255,255,0.1); }
      .stat-bar-fill { height: 100%; background: var(--primary); box-shadow: 0 0 10px var(--primary); }
      .stat-sub { font-size: 0.7rem; opacity: 0.5; margin-top: 3px; font-style: italic; }
    `}</style>
  </div>
);

export default Hero;
