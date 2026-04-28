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
        <h2 className="glitch-hover">MISSION_LOG.EXE</h2>
        <div className="header-line"></div>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card hud-card">
            <div className="project-header">
              <div className="project-meta">
                <span className={`difficulty ${project.difficulty.toLowerCase()}`}>
                  DIFF: {project.difficulty}
                </span>
                <span className="status">STATUS: {project.status}</span>
              </div>
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
                  <GitHub size={18} /> SOURCE
                </a>
                <a href={project.links.live} className="action-btn primary">
                  <ExternalLink size={18} /> DEPLOYMENT
                </a>
              </div>
              <div className="terminal-icon">
                <Terminal size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .project-card {
           display: grid;
           grid-template-columns: 1fr;
           gap: 20px;
           transition: 0.4s;
        }
        .project-card:hover {
          transform: translateX(10px);
          border-color: var(--accent);
        }
        .project-meta {
          display: flex;
          gap: 20px;
          font-family: 'Consolas', monospace;
          font-size: 0.7rem;
          margin-bottom: 10px;
        }
        .difficulty.hard { color: var(--accent); }
        .difficulty.medium { color: #ffcc00; }
        .status { color: #00ff00; opacity: 0.8; }

        .project-title { font-size: 2rem; color: var(--primary); }
        .project-subtitle { font-size: 0.9rem; margin-bottom: 15px; opacity: 0.6; }
        
        .project-desc { font-size: 1rem; line-height: 1.5; margin-bottom: 20px; border-left: 2px solid var(--primary); padding-left: 15px; }
        
        .project-tech { display: flex; flex-wrap: wrap; gap: 10px; }
        .tech-badge {
          background: rgba(255,255,255,0.05);
          padding: 4px 10px;
          font-size: 0.75rem;
          font-family: 'Consolas', monospace;
          border: 1px solid rgba(255,255,255,0.1);
        }
        
        .project-footer {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px dashed rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .project-actions { display: flex; gap: 15px; }
        .action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: var(--text);
          font-size: 0.8rem;
          font-weight: bold;
          font-family: 'Consolas', monospace;
          transition: 0.3s;
        }
        .action-btn:hover { color: var(--primary); }
        .action-btn.primary { color: var(--primary); }
        .action-btn.primary:hover { color: var(--accent); }
        
        .terminal-icon { color: var(--primary); opacity: 0.3; }

        @media (min-width: 900px) {
           .project-card {
             grid-template-columns: 2fr 1fr;
             grid-template-areas: "header header" "content footer";
           }
           .project-header { grid-area: header; }
           .project-content { grid-area: content; }
           .project-footer { grid-area: footer; border-top: none; padding-top: 0; align-items: flex-end; flex-direction: column; }
           .project-actions { flex-direction: column; align-items: flex-end; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
