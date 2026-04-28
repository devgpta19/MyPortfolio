import React, { useState, useEffect } from 'react';
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
          <div className="logo-glitch">DG</div>
        </div>
        
        <div className="log-window">
          {logs.map((log, i) => (
            <div key={i} className="log-line">
              <span className="cursor">&gt;</span> {log}
            </div>
          ))}
        </div>

        <div className="progress-container">
          <div className="progress-label">SYSTEM_LOAD: {progress}%</div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .boot-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #050a0f;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          color: #00f3ff;
          font-family: 'Consolas', monospace;
        }
        .boot-content {
          width: 400px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .logo-container {
          text-align: center;
          font-size: 5rem;
          font-weight: 800;
          position: relative;
        }
        .logo-glitch {
          animation: glitch-anim 2s infinite;
        }
        @keyframes glitch-anim {
          0% { transform: translate(0); text-shadow: 2px 0 red, -2px 0 blue; }
          20% { transform: translate(-2px, 1px); }
          40% { transform: translate(2px, -1px); }
          60% { transform: translate(-2px, 1px); text-shadow: -2px 0 red, 2px 0 blue; }
          100% { transform: translate(0); }
        }
        
        .log-window {
          height: 120px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 5px;
          font-size: 0.8rem;
          opacity: 0.8;
        }
        .log-line {
          display: flex;
          gap: 10px;
        }
        .cursor {
          animation: blink 0.5s infinite;
        }
        @keyframes blink { 50% { opacity: 0 } }
        
        .progress-container {
          width: 100%;
        }
        .progress-label {
          font-size: 0.7rem;
          margin-bottom: 5px;
        }
        .progress-track {
          height: 4px;
          background: rgba(255,255,255,0.1);
        }
        .progress-fill {
          height: 100%;
          background: #00f3ff;
          box-shadow: 0 0 10px #00f3ff;
          transition: width 0.1s linear;
        }
      `}</style>
    </div>
  );
};

export default BootScreen;
