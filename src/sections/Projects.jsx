
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const projects = [
  {
    id: 1,
    title: 'FINTRACK',
    subtitle: 'PERSONAL FINANCE TRACKER',
    desc: 'Full-stack finance management with secure JWT auth & role-based access. Interactive dashboards using Chart.js.',
    tech: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'Chart.js'],
    links: { github: 'https://github.com/devgpta19/FINANCE-TRACKER', live: 'https://finance-tracker-git-main-devansh-guptas-projects-be597bb9.vercel.app' }
  },
  {
    id: 2,
    title: 'MENUPRO',
    subtitle: 'RESTAURANT MGMT SYSTEM',
    desc: 'Real-time reservation engine for 100+ bookings. RBAC implementation reducing manual operations by 35%.',
    tech: ['.NET 8', 'React.js', 'MySQL', 'Entity Framework'],
    links: { github: 'https://github.com/jangthesuyog300-glitch/MenuPro', live: '#' }
  },
  {
    id: 3,
    title: 'CAFE CENTRAL',
    subtitle: 'POS SYSTEM',
    desc: 'Desktop POS supporting 500+ transactions. Optimized DB with 8+ tables, 40% faster queries via indexing.',
    tech: ['Java', 'JDBC', 'MySQL', 'SQL'],
    links: { github: 'https://github.com/devgpta19/Cafe-Management-System', live: '#' }
  }
];

const Projects = () => {
  const chartData = {
    labels: ['Fintrack', 'MenuPro', 'CafeCentral'],
    datasets: [
      {
        label: 'Complexity Score',
        data: [95, 82, 70],
        backgroundColor: 'rgba(56, 189, 248, 0.7)',
        hoverBackgroundColor: '#38bdf8',
        borderRadius: 8,
        borderSkipped: false,
        barThickness: 40,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#0f172a',
        padding: 12,
        titleFont: { family: 'Inter', size: 14 },
        bodyFont: { family: 'Inter', size: 13 },
      }
    },
    scales: {
      x: {
        grid: { display: false, drawBorder: false },
        ticks: { display: false }
      },
      y: {
        grid: { display: false, drawBorder: false },
        ticks: {
          color: '#64748b',
          font: { family: 'Inter', size: 13, weight: '700' }
        }
      }
    }
  };

  return (
    <section id="projects" className="section-container projects-section">
      <div className="section-header">
        <h2>Mission Portfolio</h2>
      </div>

      <div className="projects-grid-main">
        <div className="chart-container hud-card">
          <div className="chart-header">
            <h3>System Complexity</h3>
            <p>Calculated based on architecture & features</p>
          </div>
          <div className="chart-wrapper">
            <Bar
              data={chartData}
              options={chartOptions}
            />
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card hud-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map(t => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <a href={project.links.github} className="link">GitHub</a>
                <a href={project.links.live} className="link primary">Live Demo</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-grid-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        .chart-container {
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 30px;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          position: sticky;
          top: 100px;
        }
        .chart-header h3 {
          font-size: 1.2rem;
          color: var(--primary);
          font-weight: 800;
          margin-bottom: 5px;
        }
        .chart-header p {
          font-size: 0.8rem;
          opacity: 0.5;
        }
        .chart-wrapper {
          width: 100%;
          height: 250px;
        }
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          height: auto;
        }
        .project-title {
          font-size: 1.5rem;
          margin-bottom: 12px;
          font-weight: 800;
          color: var(--primary);
        }
        .project-desc {
          font-size: 1rem;
          opacity: 0.7;
          margin-bottom: 30px;
          line-height: 1.7;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }
        .tech-badge {
          font-size: 0.7rem;
          background: rgba(var(--primary-rgb), 0.1);
          color: var(--primary);
          padding: 6px 14px;
          border-radius: 100px;
          font-weight: 700;
          letter-spacing: 0.5px;
          border: 1px solid rgba(var(--primary-rgb), 0.2);
        }
        .project-footer {
          padding-top: 25px;
          border-top: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .link {
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          color: var(--text);
          opacity: 0.5;
          transition: 0.3s ease;
        }
        .link:hover { opacity: 1; transform: translateX(3px); }
        .link.primary { 
          color: var(--primary); 
          opacity: 1; 
          background: rgba(var(--primary-rgb), 0.1);
          padding: 8px 16px;
          border-radius: 8px;
        }
        .link.primary:hover {
          background: rgba(var(--primary-rgb), 0.2);
        }

        @media (max-width: 1100px) {
          .projects-grid-main { grid-template-columns: 1fr; }
          .chart-container { position: relative; top: 0; margin-bottom: 40px; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
