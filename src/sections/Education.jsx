

const educationData = [
  {
    id: 1,
    degree: 'PG-DAC (Advanced Computing)',
    institution: 'CDAC, Pune',
    period: 'AUG 2025 — FEB 2026',
    score: '73%',
    desc: 'Intensive post-graduate diploma covering advanced software development, system architecture, and modern web technologies.'
  },
  {
    id: 2,
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'LNCT & Science, Bhopal',
    period: 'OCT 2020 — JUL 2024',
    score: '8.45 CGPA',
    desc: 'Foundational degree in Computer Science, focusing on Data Structures, Algorithms, DBMS, and core engineering principles.'
  }
];

const Education = () => {
  return (
    <section id="education" className="section-container education-section">
      <div className="section-header">
        <h2>Academic Foundation</h2>
      </div>

      <div className="education-list">
        {educationData.map((item) => (
          <div key={item.id} className="education-item hud-card">
            <div className="edu-header">
              <h3 className="degree">{item.degree}</h3>
              <span className="period">{item.period}</span>
            </div>
            <h4 className="institution">{item.institution}</h4>
            <p className="edu-desc">{item.desc}</p>
            <div className="score">
              <span>Result:</span> <strong>{item.score}</strong>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .education-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .education-item {
          border-left: 4px solid var(--primary);
        }
        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .degree {
          font-size: 1.5rem;
          color: var(--primary);
          font-weight: 800;
        }
        .period {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary);
          background: rgba(var(--primary-rgb), 0.1);
          padding: 6px 16px;
          border-radius: 100px;
        }
        .institution {
          font-size: 1.1rem;
          opacity: 0.7;
          margin-bottom: 15px;
          font-weight: 600;
        }
        .edu-desc {
          font-size: 1.05rem;
          opacity: 0.8;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        .score {
          font-size: 0.95rem;
          opacity: 0.9;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.03);
          display: inline-block;
          border-radius: 8px;
        }

        @media (max-width: 600px) {
          .edu-header { flex-direction: column; align-items: flex-start; gap: 10px; }
          .period { order: -1; }
        }
      `}</style>
    </section>
  );
};

export default Education;
