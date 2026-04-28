import React, { useState } from 'react';
import { Send, Terminal as TerminalIcon } from 'lucide-react';
import { TextField, Button } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('IDLE'); // IDLE, SENDING, SUCCESS

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('SENDING');
    // Simulate API call
    setTimeout(() => {
      setStatus('SUCCESS');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('IDLE'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container contact-section">
      <div className="section-header">
        <h2 className="glitch-hover">COMM_LINK.TERM</h2>
        <div className="header-line"></div>
      </div>

      <div className="contact-grid">
        <div className="contact-info hud-card">
          <div className="terminal-header">
            <TerminalIcon size={20} />
            <span>CONNECTION_STATUS: SECURE</span>
          </div>
          <div className="terminal-body">
            <p className="typing">Ready to start a new mission together?</p>
            <div className="contact-details">
              <div className="detail">
                <span className="label">EMAIL:</span>
                <span className="value">devansh2002gupta@gmail.com</span>
              </div>
              <div className="detail">
                <span className="label">LOCA:</span>
                <span className="value">Pune, India [IST]</span>
              </div>
              <div className="detail">
                <span className="label">LINK:</span>
                <span className="value">linkedin.com/in/devgupta19</span>
              </div>
            </div>
            <div className="terminal-cursor">_</div>
          </div>
        </div>

        <form className="contact-form hud-card" onSubmit={handleSubmit}>
          <h3 className="form-title">SEND_TRANSMISSION</h3>
          
          <div className="form-fields">
            <TextField
              label="SUBJECT.NAME"
              variant="outlined"
              fullWidth
              color="primary"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <TextField
              label="RETURN.ADDR"
              variant="outlined"
              fullWidth
              color="primary"
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <TextField
              label="DATA.PAYLOAD"
              variant="outlined"
              fullWidth
              color="primary"
              required
              multiline
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={status === 'SENDING'}
            endIcon={status === 'SENDING' ? null : <Send />}
          >
            {status === 'IDLE' && 'EXECUTE_SEND'}
            {status === 'SENDING' && 'UPLOADING...'}
            {status === 'SUCCESS' && 'DATA_SENT_SUCCESSFULLY'}
          </Button>
        </form>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 30px;
          align-items: start;
        }
        
        .terminal-header {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--primary);
          font-family: 'Consolas', monospace;
          font-size: 0.8rem;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 10px;
        }
        .terminal-body {
          font-family: 'Consolas', monospace;
          color: var(--primary);
        }
        .typing {
           margin-bottom: 20px;
           overflow: hidden;
           white-space: nowrap;
           border-right: 2px solid var(--primary);
           width: 0;
           animation: type 2s steps(40) forwards;
        }
        @keyframes type { from { width: 0 } to { width: 100% } }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 30px;
        }
        .detail { display: flex; gap: 15px; font-size: 0.9rem; }
        .detail .label { opacity: 0.6; width: 60px; }
        .detail .value { color: var(--text); }
        
        .terminal-cursor {
          display: inline-block;
          animation: blink 1s infinite;
          font-size: 1.2rem;
          margin-top: 20px;
        }
        @keyframes blink { 50% { opacity: 0 } }
        
        .form-title {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: var(--primary);
        }
        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 30px;
        }

        :global(.MuiOutlinedInput-root) {
          border-radius: 0 !important;
        }
        :global(.MuiInputLabel-root) {
          color: var(--primary) !important;
          opacity: 0.7;
          font-family: 'Consolas', monospace !important;
        }
        :global(.MuiOutlinedInput-notchedOutline) {
          border-color: var(--border) !important;
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
