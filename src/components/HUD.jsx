import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import gsap from 'gsap';

const HUD = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);

    let ctx = gsap.context(() => {
      // HUD Entry Animation
      gsap.from('.hud-element', {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      ctx.revert();
    };
  }, []);

  const navItems = [
    { name: 'Status', id: 'hero' },
    { name: 'Academy', id: 'education' },
    { name: 'Attributes', id: 'skills' },
    { name: 'Missions', id: 'projects' },
    { name: 'Comm Link', id: 'contact' }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="hud-container">
      {/* Top HUD Bar */}
      <div className="hud-top hud-element">
        <div className="player-stats">
          <div className="stat-item">
            <span className="stat-label">EXP:</span>
            <span className="stat-value">5+ MODS</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">LVL:</span>
            <span className="stat-value">FS DEV</span>
          </div>
        </div>

        <div className="nav-links desktop-only">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="glitch-hover">
              [{item.name}]
            </button>
          ))}
        </div>

        <div className="hud-actions">
          <IconButton onClick={toggleTheme} color="primary" className="hud-icon">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
          <div className="mobile-only">
            <IconButton onClick={() => setIsMenuOpen(true)} color="primary">
              <Menu size={24} />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Side HUD Element (Fixed) */}
      <div className="hud-left hud-element desktop-only">
        <div className="social-column">
          <a href="https://github.com/devgpta19" target="_blank" rel="noreferrer"><GitHub size={20} /></a>
          <a href="https://linkedin.com/in/devgpta19" target="_blank" rel="noreferrer"><LinkedIn size={20} /></a>
          <div className="line-dec"></div>
        </div>
      </div>

      {/* Scroll Progress HUD (Health Bar) */}
      <div className="hud-bottom hud-element">
        <div className="health-bar-container">
          <div className="health-label">SYNC PROGRESS</div>
          <div className="health-track">
            <div className="health-fill" style={{ width: `${scrollProgress}%` }}></div>
          </div>
        </div>
        <button className="resume-btn" onClick={() => window.open('https://drive.google.com/file/d/1tW7PhK327iajaLIpCigaMtJJxCkT0ACs/view?usp=drive_link', '_blank')}>
          <Download size={16} /> DOWNLOAD_DATA.PDF
        </button>
      </div>

      {/* Mobile Menu */}
      <Drawer anchor="right" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className="mobile-nav" style={{ width: 250, padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setIsMenuOpen(false)}><X /></IconButton>
          </div>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.id} onClick={() => scrollTo(item.id)}>
                <ListItemText primary={`[ ${item.name} ]`} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      <style jsx>{`
        .hud-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 100;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
        }
        .hud-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: auto;
          background: rgba(5, 10, 15, 0.8);
          backdrop-filter: blur(10px);
          padding: 15px 25px;
          border: 1px solid var(--border);
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        .player-stats {
          display: flex;
          gap: 20px;
          font-family: 'Consolas', monospace;
          font-size: 0.9rem;
          color: var(--primary);
        }
        .stat-label { opacity: 0.7; margin-right: 5px; }
        .stat-value { font-weight: bold; }
        .nav-links {
          display: flex;
          gap: 30px;
        }
        .nav-links button {
          background: none;
          border: none;
          color: var(--text);
          font-family: inherit;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s;
        }
        .hud-left {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: auto;
          background: rgba(5, 10, 15, 0.8);
          backdrop-filter: blur(10px);
          padding: 20px 15px;
          border: 1px solid var(--border);
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        .social-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
        }
        .social-column a { color: var(--primary); transition: 0.3s; }
        .social-column a:hover { color: var(--accent); }
        .line-dec { width: 1px; height: 100px; background: var(--primary); opacity: 0.5; }

        .hud-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: auto;
          background: rgba(5, 10, 15, 0.8);
          backdrop-filter: blur(10px);
          padding: 15px 25px;
          border: 1px solid var(--border);
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        .health-bar-container {
          width: 300px;
        }
        .health-label {
          font-family: 'Consolas', monospace;
          font-size: 0.7rem;
          color: var(--primary);
          margin-bottom: 5px;
        }
        .health-track {
          height: 6px;
          width: 100%;
          background: rgba(255,255,255,0.1);
          border: 1px solid var(--border);
        }
        .health-fill {
          height: 100%;
          background: var(--primary);
          box-shadow: 0 0 10px var(--primary);
          transition: width 0.1s linear;
        }
        .resume-btn {
          background: var(--primary);
          color: var(--bg);
          border: none;
          padding: 10px 20px;
          font-family: 'Consolas', monospace;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: 0.3s;
        }
        .resume-btn:hover {
          background: var(--accent);
          transform: translateY(-5px);
        }

        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .hud-top { padding: 5px 10px; }
          .health-bar-container { width: 120px; }
          .player-stats { gap: 8px; font-size: 0.65rem; }
          .resume-btn { padding: 8px 12px; font-size: 0.75rem; gap: 5px; }
        }
        @media (max-width: 480px) {
          .health-bar-container { display: none; }
          .player-stats { flex-direction: column; gap: 2px; }
        }
        @media (min-width: 769px) {
          .mobile-only { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default HUD;
