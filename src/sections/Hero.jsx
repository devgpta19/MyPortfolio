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
              <span className="text-gradient">DEVANSH</span> <span className="text-gradient">GUPTA</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer & Software Architect</h2>
            <p className="hero-bio">
              Building high-performance, scalable web applications with a focus on user experience and technical excellence. 
              Specializing in React, Node.js, and Cloud Infrastructure.
            </p>
          </div>
        </div>

        {/* Character Stats Card */}
        <div className="hero-stats-card hud-card">
          <h3 className="section-label">Core Competencies</h3>
          <div className="stats-list">
            <StatRow label="FRONTEND ARCHITECTURE" value="95" sub="React, Next.js, Performance" />
            <StatRow label="BACKEND SYSTEMS" value="90" sub="Node.js, Python, Java" />
            <StatRow label="SYSTEM DESIGN" value="85" sub="Scalability & Reliability" />
            <StatRow label="DEV OPS" value="80" sub="CI/CD, Cloud, Docker" />
          </div>
          <div className="hero-links">
             <div className="link-item">Base: Pune, Maharashtra</div>
             <div className="link-item">Availability: Open for Innovation</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 140px;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .hero-profile-card {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .hero-avatar {
          position: relative;
          width: 140px;
          height: 140px;
        }
        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 800;
          border-radius: 40px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        .avatar-ring {
          position: absolute;
          top: -10px;
          left: -10px;
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          border: 2px solid var(--primary);
          opacity: 0.3;
          border-radius: 50px;
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes pulse { 
          0%, 100% { transform: scale(1); opacity: 0.3; } 
          50% { transform: scale(1.05); opacity: 0.1; } 
        }
        
        .hero-title {
          font-size: 5rem;
          line-height: 0.9;
          margin-bottom: 20px;
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          letter-spacing: -0.04em;
        }
        .hero-subtitle {
          color: var(--text);
          font-size: 1.5rem;
          margin-bottom: 25px;
          font-weight: 600;
          opacity: 0.9;
        }
        .hero-bio {
          font-size: 1.2rem;
          line-height: 1.8;
          opacity: 0.7;
          max-width: 650px;
        }
        
        .section-label {
          color: var(--primary);
          font-size: 1rem;
          margin-bottom: 25px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .stats-list {
          display: flex;
          flex-direction: column;
          gap: 25px;
          margin-bottom: 35px;
        }
        .hero-links {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          display: flex;
          gap: 20px;
          opacity: 0.6;
        }

        @media (max-width: 1100px) {
          .hero-title { font-size: 4rem; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-title { font-size: 3rem; }
          .hero-section { padding-top: 100px; }
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
      .stat-row { margin-bottom: 15px; }
      .stat-meta { display: flex; justify-content: space-between; margin-bottom: 8px; font-weight: 700; }
      .stat-row-label { font-size: 0.75rem; opacity: 0.6; letter-spacing: 1px; }
      .stat-row-value { color: var(--primary); font-family: var(--font-mono); }
      .stat-bar-bg { height: 6px; background: rgba(255,255,255,0.05); border-radius: 10px; overflow: hidden; }
      .stat-bar-fill { height: 100%; background: linear-gradient(90deg, var(--primary), var(--accent)); border-radius: 10px; }
      .stat-sub { font-size: 0.75rem; opacity: 0.5; margin-top: 6px; }
    `}</style>
  </div>
);

export default Hero;
