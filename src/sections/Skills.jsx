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
    { title: 'Frontend', skills: ['React.js', 'Vite', 'Material UI (MUI)', 'Chart.js', 'SCSS', 'GSAP', 'HTML', 'CSS', 'JavaScript'] },
    { title: 'Backend', skills: ['Spring Boot', '.NET 8','ASP.NET MVC', 'ASP.NET Core', 'REST APIs', 'JWT', 'RBAC', 'Java'] },
    { title: 'Data', skills: ['MySQL', 'Database Design', 'Normalization', 'Entity Framework', 'Hibernate'] },
    { title: 'Tools', skills: ['Git', 'Postman', 'VS Code', 'JIRA', 'Agile', 'Visual Studio'] }
  ];

  return (
    <section id="skills" className="section-container skills-section">
      <div className="section-header">
        <h2 className="text-gradient">Technical Expertise</h2>
        <div className="header-line"></div>
      </div>

      <div className="skills-grid">
        <div className="radar-container hud-card">
          <Radar 
            data={{
              ...radarData,
              datasets: [{
                ...radarData.datasets[0],
                backgroundColor: 'rgba(129, 140, 248, 0.2)',
                borderColor: '#818cf8',
                pointBackgroundColor: '#818cf8',
                pointHoverBackgroundColor: '#fb7185',
              }]
            }} 
            options={{
              ...radarOptions,
              scales: {
                r: {
                  ...radarOptions.scales.r,
                  pointLabels: {
                    color: '#94a3b8',
                    font: { family: 'Outfit', size: 14, weight: 'bold' }
                  },
                  angleLines: { color: 'rgba(255, 255, 255, 0.05)' },
                  grid: { color: 'rgba(255, 255, 255, 0.05)' }
                }
              }
            }} 
          />
        </div>

        <div className="skills-list-container">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="skill-group hud-card">
              <h4>{group.title}</h4>
              <div className="skill-tags">
                {group.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
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
        
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        .radar-container {
          padding: 30px;
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }
        .skills-list-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .skill-group { 
          padding: 1.5rem; 
        }
        .skill-group h4 {
          color: var(--primary);
          margin-bottom: 15px;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 700;
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .skill-tag {
          font-size: 0.85rem;
          color: var(--text);
          opacity: 0.7;
          background: rgba(255, 255, 255, 0.03);
          padding: 4px 10px;
          border-radius: 4px;
          transition: 0.3s;
        }
        .skill-tag:hover {
          opacity: 1;
          color: var(--primary);
          background: rgba(129, 140, 248, 0.1);
        }

        @media (max-width: 1100px) {
          .skills-grid { grid-template-columns: 1fr; gap: 40px; }
          .radar-container { order: -1; }
        }
        @media (max-width: 600px) {
          .skills-list-container { grid-template-columns: 1fr; }
        }
      `}</style>

    </section>
  );
};

export default Skills;
