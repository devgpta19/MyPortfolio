import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Skills = () => {
  const radarData = {
    labels: ['Frontend', 'Backend', 'Database', 'Tools', 'Core Concepts', 'Languages'],
    datasets: [
      {
        label: 'Developer Attributes',
        data: [95, 90, 85, 80, 90, 92],
        backgroundColor: 'rgba(0, 243, 255, 0.2)',
        borderColor: '#00f3ff',
        borderWidth: 2,
        pointBackgroundColor: '#00f3ff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00f3ff',
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' },
        pointLabels: {
          color: '#00f3ff',
          font: { family: 'Consolas', size: 14 }
        },
        ticks: { display: false, stepSize: 20 },
        suggestedMin: 0,
        suggestedMax: 100
      }
    },
    plugins: {
      legend: { display: false }
    }
  };

  const skillGroups = [
    { title: 'Frontend', skills: ['React.js', 'Vite', 'Material UI (MUI)', 'Chart.js', 'SCSS', 'GSAP'] },
    { title: 'Backend', skills: ['Spring Boot', '.NET 8', 'REST APIs', 'JWT', 'RBAC', 'Java'] },
    { title: 'Data', skills: ['MySQL', 'Database Design', 'Normalization', 'Entity Framework'] },
    { title: 'Tools', skills: ['Git', 'Docker', 'Postman', 'VS Code', 'JIRA', 'Agile'] }
  ];

  return (
    <section id="skills" className="section-container skills-section">
      <div className="section-header">
        <h2 className="glitch-hover">ATTRIBUTE_MATRIX</h2>
        <div className="header-line"></div>
      </div>

      <div className="skills-grid">
        <div className="radar-container hud-card">
          <Radar data={radarData} options={radarOptions} />
        </div>

        <div className="skills-list-container">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-group hud-card">
              <h4>{group.title}</h4>
              <div className="skill-tags">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-tag">[{skill}]</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          background: rgba(0,0,0,0.2);
          padding: 60px 15px;
        }
        .section-header {
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .section-header h2 { font-size: 1.8rem; }
        .header-line { flex: 1; height: 1px; background: var(--primary); opacity: 0.3; }
        
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          align-items: center;
        }
        .radar-container {
          padding: 20px;
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }
        .skills-list-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .skill-group { padding: 1.2rem; }
        .skill-group h4 {
          color: var(--primary);
          margin-bottom: 12px;
          font-size: 0.85rem;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-tag {
          font-family: 'Consolas', monospace;
          font-size: 0.75rem;
          color: var(--text);
          opacity: 0.7;
          transition: 0.3s;
        }

        @media (max-width: 1024px) {
          .skills-grid { 
            grid-template-columns: 1fr; 
            gap: 40px;
          }
          .radar-container { order: -1; }
        }
        @media (max-width: 600px) {
          .skills-list-container { grid-template-columns: 1fr; }
          .section-header h2 { font-size: 1.4rem; }
          .radar-container { padding: 10px; }
        }
      `}</style>

    </section>
  );
};

export default Skills;
