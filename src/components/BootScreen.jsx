import { useState, useEffect } from 'react';
import gsap from 'gsap';

const BootScreen = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);

  const bootLogs = [
    'INITIALIZING_CORE_SYSTEMS...',
    'LOADING_DEVANSH_OS_V2.0.4...',
    'CONNECTING_TO_DATABASE_SYNC...',
    'MOUNTING_REACT_MODULES...',
    'OPTIMIZING_COMPONENT_LIBRARY...',
    'STARTING_GSAP_ENGINE...',
    'ESTABLISHING_COMM_LINK...',
    'SYNC_COMPLETE. WELCOME, ARCHITECT.'
  ];

  useEffect(() => {
    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev.slice(-4), bootLogs[currentLog]]);
        currentLog++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          gsap.to('.boot-screen', {
            opacity: 0,
            y: -100,
            duration: 1,
            ease: 'power4.in',
            onComplete: onComplete
          });
        }, 500);
      }
    }, 400);

    const progInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 5;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progInterval);
    };
  }, [onComplete]);

  return (
    <div className="boot-screen">
      <div className="boot-content">
        <div className="logo-container">
          <div className="logo-text">DG</div>
        </div>
        
        <div className="progress-container">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="progress-info">
            <span className="progress-label">INITIALIZING SYSTEM</span>
            <span className="progress-percent">{progress}%</span>
          </div>
        </div>

        <div className="log-window">
          {logs.map((log, i) => (
            <div key={i} className="log-line">
              {log}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .boot-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          color: #0f172a;
          font-family: 'Inter', sans-serif;
        }
        [data-theme='dark'] .boot-screen {
          background: #0f172a;
          color: #f8fafc;
        }
        .boot-content {
          width: 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }
        .logo-container {
          text-align: center;
          font-size: 3rem;
          font-weight: 800;
          letter-spacing: -2px;
          color: #0284c7;
        }
        [data-theme='dark'] .logo-container {
          color: #38bdf8;
        }
        
        .progress-container {
          width: 100%;
        }
        .progress-track {
          height: 2px;
          background: rgba(0, 0, 0, 0.05);
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 12px;
        }
        [data-theme='dark'] .progress-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .progress-fill {
          height: 100%;
          background: #0284c7;
          transition: width 0.2s ease-out;
        }
        [data-theme='dark'] .progress-fill {
          background: #38bdf8;
        }
        .progress-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1px;
          opacity: 0.5;
        }
        
        .log-window {
          height: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          opacity: 0.4;
          text-align: center;
        }
        .log-line {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default BootScreen;
