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
        <h2 className="text-gradient">Academic Foundation</h2>
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
                <span className="score-label">ACHIEVEMENT:</span>
                <span className="score-value">{item.score}</span>
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
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 25px;
          flex-wrap: wrap;
        }
        .degree-icon {
          color: var(--primary);
          background: rgba(129, 140, 248, 0.1);
          padding: 15px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .header-text { flex: 1; }
        .header-text h3 { font-size: 1.5rem; color: var(--text); margin-bottom: 5px; font-weight: 700; }
        .institution { font-size: 1.1rem; opacity: 0.6; font-weight: 500; }
        
        .period-badge {
          background: rgba(129, 140, 248, 0.1);
          color: var(--primary);
          padding: 8px 20px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.85rem;
          border: 1px solid rgba(129, 140, 248, 0.2);
        }

        .edu-desc { line-height: 1.8; opacity: 0.7; max-width: 800px; font-size: 1.1rem; }
        
        .score-container {
          margin-top: 20px;
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .score-label { font-size: 0.75rem; opacity: 0.5; font-weight: 800; letter-spacing: 1px; }
        .score-value { color: var(--accent); font-weight: 800; font-size: 1.2rem; font-family: var(--font-mono); }

        @media (max-width: 768px) {
          .card-header { gap: 15px; }
          .header-text h3 { font-size: 1.2rem; }
          .period-badge { order: -1; width: 100%; text-align: center; }
        }
      `}</style>
    </section>
  );
};

export default Education;
