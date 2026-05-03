import { useMemo } from 'react';

const experienceData = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Tradylytics',
    period: '2025',
    desc: 'Leading the development of an AI-powered trading journal. Implementing automated trade logging and real-time performance analytics for Indian traders.',
    highlights: [
      'Architected the core analytics engine using Node.js and React.',
      'Integrated multiple brokerage APIs for automated data synchronization.',
      'Optimized database queries for processing large volumes of historical trade data.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container experience-section">
      <div className="section-header">
        <h2>Professional Journey</h2>
      </div>

      <div className="experience-list">
        {experienceData.map((exp) => (
          <div key={exp.id} className="experience-item hud-card">
            <div className="exp-header">
              <div className="exp-title">
                <h3>{exp.role}</h3>
                <h4 className="company">{exp.company}</h4>
              </div>
              <div className="exp-period">{exp.period}</div>
            </div>
            
            <p className="exp-desc">{exp.desc}</p>
            
            <ul className="exp-highlights">
              {exp.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style jsx>{`
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 25px;
          flex-wrap: wrap;
          gap: 20px;
        }
        .exp-title h3 {
          font-size: 1.5rem;
          color: var(--primary);
          font-weight: 800;
          margin-bottom: 5px;
        }
        .company {
          font-size: 1.1rem;
          font-weight: 600;
          opacity: 0.8;
        }
        .exp-period {
          font-size: 0.9rem;
          font-weight: 700;
          padding: 6px 16px;
          background: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          border-radius: 100px;
          border: 1px solid rgba(var(--primary-rgb), 0.2);
        }
        .exp-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          opacity: 0.8;
          margin-bottom: 25px;
        }
        .exp-highlights {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .exp-highlights li {
          font-size: 0.95rem;
          opacity: 0.7;
          position: relative;
          padding-left: 20px;
        }
        .exp-highlights li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--primary);
          font-weight: 800;
        }

        @media (max-width: 600px) {
          .exp-header { flex-direction: column; gap: 10px; }
          .exp-period { align-self: flex-start; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
