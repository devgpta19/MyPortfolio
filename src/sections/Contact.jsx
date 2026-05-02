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
        <h2 className="text-gradient">Get In Touch</h2>
        <div className="header-line"></div>
      </div>

      <div className="contact-grid">
        <div className="contact-info hud-card">
          <div className="info-header">
            <h3>Let's Collaborate</h3>
            <p>Ready to discuss your next project or just want to say hi? I'm always open to new opportunities and interesting conversations.</p>
          </div>
          <div className="contact-details">
            <div className="detail">
              <span className="label">EMAIL</span>
              <span className="value">devansh2002gupta@gmail.com</span>
            </div>
            <div className="detail">
              <span className="label">LOCATION</span>
              <span className="value">Pune, India</span>
            </div>
            <div className="detail">
              <span className="label">LINKEDIN</span>
              <span className="value">linkedin.com/in/devgupta19</span>
            </div>
          </div>
        </div>

        <form className="contact-form hud-card" onSubmit={handleSubmit}>
          <h3 className="form-title">Send Message</h3>
          
          <div className="form-fields">
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              color="primary"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              color="primary"
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              color="primary"
              required
              multiline
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={status === 'SENDING'}
            endIcon={status === 'SENDING' ? null : <Send />}
          >
            {status === 'IDLE' && 'Send Message'}
            {status === 'SENDING' && 'Sending...'}
            {status === 'SUCCESS' && 'Message Sent!'}
          </Button>
        </form>
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
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
          align-items: start;
        }
        
        .info-header h3 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: var(--text);
        }
        .info-header p {
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.7;
          margin-bottom: 40px;
        }
        
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        .detail { display: flex; flex-direction: column; gap: 5px; }
        .detail .label { 
          font-size: 0.75rem; 
          font-weight: 800; 
          color: var(--primary); 
          letter-spacing: 2px;
        }
        .detail .value { 
          font-size: 1.1rem; 
          color: var(--text); 
          font-weight: 500;
        }
        
        .form-title {
          font-size: 1.5rem;
          margin-bottom: 30px;
          font-weight: 700;
        }
        .form-fields {
          display: flex;
          flex-direction: column;
          gap: 25px;
          margin-bottom: 30px;
        }

        :global(.MuiOutlinedInput-root) {
          border-radius: 12px !important;
          background: rgba(255, 255, 255, 0.02);
        }
        :global(.MuiInputLabel-root) {
          color: var(--text) !important;
          opacity: 0.6;
        }
        :global(.MuiOutlinedInput-notchedOutline) {
          border-color: var(--border) !important;
        }
        :global(.MuiButton-containedPrimary) {
          background: var(--primary) !important;
          color: white !important;
          padding: 12px 30px !important;
          font-weight: 700 !important;
          text-transform: none !important;
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
          .info-header p { margin-bottom: 20px; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
