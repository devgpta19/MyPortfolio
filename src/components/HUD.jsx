import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu } from 'lucide-react';
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import gsap from 'gsap';

const HUD = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    { name: 'Experience', id: 'experience' },
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
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo">DG</div>
        
        <div className="nav-links desktop-only">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {item.name}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <IconButton onClick={toggleTheme} color="primary">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </IconButton>
          <div className="mobile-only">
            <IconButton onClick={() => setIsMenuOpen(true)} color="primary">
              <Menu size={24} />
            </IconButton>
          </div>
        </div>
      </div>

      <Drawer anchor="right" open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <div className="mobile-nav" style={{ width: 250, padding: 20 }}>
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.id} onClick={() => scrollTo(item.id)}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(var(--bg-rgb), 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
        }
        .nav-content {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 24px;
        }
        .nav-logo {
          font-weight: 900;
          font-size: 1.75rem;
          color: var(--primary);
          letter-spacing: -1px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .nav-logo:hover {
          transform: scale(1.05);
        }
        .nav-links {
          display: flex;
          gap: 35px;
        }
        .nav-links button {
          background: none;
          border: none;
          color: var(--text);
          font-family: inherit;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          opacity: 0.6;
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-links button::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-links button:hover {
          opacity: 1;
          color: var(--primary);
          transform: translateY(-2px);
        }
        .nav-links button:hover::after {
          width: 20px;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        @media (max-width: 768px) {
          .navbar { padding: 12px 0; }
          .nav-logo { font-size: 1.5rem; }
        }
      `}</style>
      
      <style jsx global>{`
        .MuiDrawer-paper {
          background: rgba(var(--bg-rgb), 0.95) !important;
          backdrop-filter: blur(20px);
          color: var(--text) !important;
          border-left: 1px solid var(--border) !important;
        }
        .MuiListItemText-primary {
          font-family: 'Inter', sans-serif !important;
          font-weight: 700 !important;
          font-size: 1.1rem !important;
          letter-spacing: -0.5px;
          color: var(--text);
        }
        .MuiListItem-root:hover {
          background: rgba(var(--primary-rgb), 0.1) !important;
        }
      `}</style>
    </nav>
  );
};

export default HUD;
