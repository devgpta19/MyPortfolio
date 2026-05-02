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
        <div className="nav-links desktop-only">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="glitch-hover">
              {item.name}
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
          padding: 30px;
        }
        .hud-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: auto;
          background: var(--glass);
          backdrop-filter: blur(20px);
          padding: 12px 30px;
          border: 1px solid var(--border);
          border-radius: 100px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }
        .nav-links {
          display: flex;
          gap: 40px;
        }
        .nav-links button {
          background: none;
          border: none;
          color: var(--text);
          font-family: inherit;
          font-size: 0.95rem;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.7;
          position: relative;
        }
        .nav-links button:hover {
          opacity: 1;
          color: var(--primary);
          transform: translateY(-2px);
        }
        .nav-links button::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: 0.3s;
        }
        .nav-links button:hover::after {
          width: 100%;
        }
        .hud-left {
          position: absolute;
          left: 40px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: auto;
        }
        .social-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
          align-items: center;
        }
        .social-column a { 
          color: var(--text); 
          opacity: 0.6;
          transition: 0.3s; 
        }
        .social-column a:hover { 
          color: var(--primary); 
          opacity: 1;
          transform: scale(1.2);
        }
        .line-dec { 
          width: 1px; 
          height: 80px; 
          background: linear-gradient(to bottom, var(--primary), transparent); 
        }

        .hud-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          pointer-events: auto;
          gap: 20px;
        }
        .health-bar-container {
          width: 250px;
          background: var(--glass);
          padding: 15px 20px;
          border-radius: 100px;
          border: 1px solid var(--border);
          backdrop-filter: blur(10px);
        }
        .health-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text);
          opacity: 0.5;
          margin-bottom: 8px;
          letter-spacing: 1px;
        }
        .health-track {
          height: 4px;
          width: 100%;
          background: rgba(255,255,255,0.05);
          border-radius: 10px;
          overflow: hidden;
        }
        .health-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          box-shadow: 0 0 15px var(--primary);
          transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .resume-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 100px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        }
        .resume-btn:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(99, 102, 241, 0.4);
          filter: brightness(1.1);
        }

        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .hud-container { padding: 15px; }
          .hud-top { padding: 10px 20px; border-radius: 20px; }
          .health-bar-container { width: 150px; padding: 10px 15px; }
          .resume-btn { padding: 10px 20px; font-size: 0.8rem; }
        }
      `}</style>
    </nav>
  );
};

export default HUD;
