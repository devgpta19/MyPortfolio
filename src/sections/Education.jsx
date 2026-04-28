import React from 'react';
import { School, WorkspacePremium } from '@mui/icons-material';

const educationData = [
  {
    id: 1,
    degree: 'PG-DAC (Advanced Computing)',
    institution: 'CDAC, Pune',
    period: 'AUG 2025 — FEB 2026',
    score: '73%',
    desc: 'Intensive post-graduate diploma covering advanced software development, system architecture, and modern web technologies.',
    icon: <WorkspacePremium />
  },
  {
    id: 2,
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'LNCT & Science, Bhopal',
    period: 'OCT 2020 — JUL 2024',
    score: '8.45 CGPA',
    desc: 'Foundational degree in Computer Science, focusing on Data Structures, Algorithms, DBMS, and core engineering principles.',
    icon: <School />
  }
];

const Education = () => {
  return (
    <section id="education" className="section-container education-section">
      <div className="section-header">
        <h2 className="glitch-hover">ACADEMY_RECORDS.LOG</h2>
        <div className="header-line"></div>
      </div>

      <div className="education-timeline">
        {educationData.map((item) => (
          <div key={item.id} className="education-card hud-card">
            <div className="card-header">
              <div className="degree-icon">
                {item.icon}
              </div>
              <div className="header-text">
                <h3>{item.degree}</h3>
                <h4 className="institution">{item.institution}</h4>
              </div>
              <div className="period-badge">
                {item.period}
              </div>
            </div>

            <div className="card-content">
              <p className="edu-desc">{item.desc}</p>
              <div className="score-container">
                <span className="score-label">SYNC_RATE:</span>
                <span className="score-value">{item.score}</span>
              </div>
            </div>
            
            <div className="corner-decoration"></div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .education-timeline {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .education-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: 0.3s;
          overflow: hidden;
        }
        .education-card:hover {
          background: rgba(0, 243, 255, 0.08);
          transform: scale(1.01);
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .degree-icon {
          color: var(--primary);
          background: rgba(0, 243, 255, 0.1);
          padding: 15px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        .header-text { flex: 1; }
        .header-text h3 { font-size: 1.4rem; color: var(--primary); margin-bottom: 5px; }
        .institution { font-size: 1rem; opacity: 0.8; font-family: 'Consolas', monospace; }
        
        .period-badge {
          background: var(--primary);
          color: var(--bg);
          padding: 5px 15px;
          font-family: 'Consolas', monospace;
          font-weight: bold;
          font-size: 0.8rem;
        }

        .edu-desc { line-height: 1.6; opacity: 0.7; max-width: 800px; }
        
        .score-container {
          margin-top: 15px;
          display: flex;
          gap: 10px;
          align-items: center;
          font-family: 'Consolas', monospace;
        }
        .score-label { font-size: 0.8rem; opacity: 0.5; }
        .score-value { color: var(--accent); font-weight: bold; font-size: 1.1rem; }

        .corner-decoration {
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 50px;
          background: linear-gradient(225deg, var(--primary) 0%, transparent 50%);
          opacity: 0.1;
        }

        @media (max-width: 600px) {
          .card-header { flex-direction: column; align-items: flex-start; }
          .period-badge { order: -1; margin-bottom: 10px; }
          .header-text h3 { font-size: 1.1rem; }
        }
      `}</style>
    </section>
  );
};

export default Education;
