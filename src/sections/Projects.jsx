import React from 'react';
import { ExternalLink, Terminal } from 'lucide-react';
import { GitHub } from '@mui/icons-material';

const projects = [
  {
    id: 1,
    title: 'FINTRACK',
    subtitle: 'PERSONAL FINANCE TRACKER',
    desc: 'Full-stack finance management with secure JWT auth & role-based access. Interactive dashboards using Chart.js.',
    tech: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'Chart.js'],
    difficulty: 'HARD',
    status: 'COMPLETED',
    links: { github: 'https://github.com/devgpta19/FINANCE-TRACKER', live: '#' }
  },
  {
    id: 2,
    title: 'MENUPRO',
    subtitle: 'RESTAURANT MGMT SYSTEM',
    desc: 'Real-time reservation engine for 100+ bookings. RBAC implementation reducing manual operations by 35%.',
    tech: ['.NET 8', 'React.js', 'MySQL', 'Entity Framework'],
    difficulty: 'MEDIUM',
    status: 'DEPLOYED',
    links: { github: 'https://github.com/jangthesuyog300-glitch/MenuPro', live: '#' }
  },
  {
    id: 3,
    title: 'CAFE CENTRAL',
    subtitle: 'POS SYSTEM',
    desc: 'Desktop POS supporting 500+ transactions. Optimized DB with 8+ tables, 40% faster queries via indexing.',
    tech: ['Java', 'JDBC', 'MySQL', 'SQL'],
    difficulty: 'MEDIUM',
    status: 'ARCHIVED',
    links: { github: 'https://github.com/devgpta19/Cafe-Management-System', live: '#' }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container projects-section">
      <div className="section-header">
        <h2 className="text-gradient">Featured Projects</h2>
        <div className="header-line"></div>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card hud-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>
            </div>

            <div className="project-content">
              <p className="project-desc">{project.desc}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-footer">
              <div className="project-actions">
                <a href={project.links.github} className="action-btn">
                  <GitHub sx={{ fontSize: 20 }} /> Codebase
                </a>
                <a href={project.links.live} className="action-btn primary">
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: 50px;
        }
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }
        .header-line {
          width: 60px;
          height: 4px;
          background: var(--primary);
          border-radius: 2px;
        }
        .projects-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }
        .project-card {
           display: flex;
           flex-direction: column;
           gap: 20px;
           height: 100%;
        }
        
        .project-title { 
          font-size: 1.75rem; 
          font-weight: 800;
          color: var(--text); 
          margin-bottom: 5px;
          letter-spacing: -0.02em;
        }
        .project-subtitle { 
          font-size: 0.9rem; 
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary);
          margin-bottom: 15px; 
          opacity: 0.8; 
        }
        
        .project-desc { 
          font-size: 1.05rem; 
          line-height: 1.6; 
          margin-bottom: 25px; 
          opacity: 0.7;
        }
        
        .project-tech { 
          display: flex; 
          flex-wrap: wrap; 
          gap: 8px; 
          margin-top: auto;
        }
        .tech-badge {
          background: rgba(129, 140, 248, 0.08);
          color: var(--primary);
          padding: 6px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 100px;
          border: 1px solid rgba(129, 140, 248, 0.1);
        }
        
        .project-footer {
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }
        .project-actions { 
          display: flex; 
          justify-content: space-between;
          align-items: center;
        }
        .action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: var(--text);
          font-size: 0.85rem;
          font-weight: 700;
          transition: 0.3s;
          opacity: 0.6;
        }
        .action-btn:hover { 
          color: var(--primary); 
          opacity: 1;
        }
        .action-btn.primary { 
          color: var(--primary); 
          opacity: 1;
        }
        .action-btn.primary:hover { 
          color: var(--accent); 
        }

        @media (max-width: 768px) {
           .projects-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
