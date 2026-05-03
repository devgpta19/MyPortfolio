import { useEffect, useRef } from 'react';
import { Button } from '@mui/material';
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
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hi, I'm</span>
            <span className="text-gradient name">Devansh Gupta</span>
          </h1>
          <h2 className="hero-subtitle"> </h2>
          <p className="hero-bio">
            I specialize in building scalable, high-performance web applications. 
            Passionate about crafting clean code and exceptional user experiences 
            through modern engineering practices.
          </p>
          <div className="hero-actions">
            <Button variant="contained" color="primary" size="large" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              Explore Projects
            </Button>
            <Button variant="outlined" color="primary" size="large" onClick={() => window.open('https://drive.google.com/file/d/1tW7PhK327iajaLIpCigaMtJJxCkT0ACs/view?usp=drive_link', '_blank')}>
              My Resume
            </Button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-card hud-card">
            <div className="avatar-box">
              <div className="avatar-placeholder">DG</div>
            </div>
            <div className="status-badge">
              <span className="dot"></span>Open to Work
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 140px;
          min-height: 80vh;
          display: flex;
          align-items: center;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }
        .hero-title {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }
        .greeting {
          font-size: 1.5rem;
          font-weight: 600;
          opacity: 0.6;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .hero-subtitle {
          font-size: 1.75rem;
          color: var(--text);
          margin-top: 30px;
          height: 5px;
          margin-bottom: 30px;
          font-weight: 500;
          opacity: 0.8;
        }
        .hero-bio {
          font-size: 1.2rem;
          max-width: 600px;
          margin-bottom: 40px;
          opacity: 0.7;
          line-height: 1.8;
        }
        .hero-actions {
          display: flex;
          gap: 20px;
        }
        
        .hero-image-container {
          display: flex;
          justify-content: center;
        }
        .hero-card {
          width: 300px;
          text-align: center;
          padding: 40px !important;
          background: rgba(255, 255, 255, 0.02) !important;
        }
        .avatar-box {
          width: 120px;
          height: 120px;
          margin: 0 auto 30px;
          padding: 10px;
          border: 2px dashed var(--primary);
          border-radius: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background: var(--primary);
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          box-shadow: 0 10px 30px rgba(2, 132, 199, 0.3);
        }
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(34, 197, 94, 0.1);
          color: #22c55e;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 700;
        }
        .dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: blink 2s infinite;
        }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .hero-title {
            font-size: 3rem;
            align-items: center;
          }
          .hero-bio {
            margin: 0 auto 30px;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-image-container {
            order: -1;
            justify-content: center;
          }
        }
        @media (max-width: 600px) {
          .hero-title { font-size: 2.25rem; }
          .hero-section { padding-top: 100px; }
          .hero-actions { flex-direction: column; width: 100%; }
          .hero-actions :global(button) { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
