import { useState } from 'react';
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
        <h2>Get In Touch</h2>
        <p className="section-desc">
          I'm currently looking for new opportunities. Whether you have a question 
          or just want to say hi, my inbox is always open!
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card hud-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              required
              multiline
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <div className="form-footer">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={status === 'SENDING'}
                sx={{ borderRadius: '8px', px: 4, py: 1.5 }}
              >
                {status === 'IDLE' && 'Send Message'}
                {status === 'SENDING' && 'Sending...'}
                {status === 'SUCCESS' && 'Message Sent!'}
              </Button>
              
              <div className="social-links">
                <a href="mailto:devansh2002gupta@gmail.com" title="Email">
                  devansh2002gupta@gmail.com
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .section-desc {
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.6;
          font-size: 1.1rem;
        }
        .contact-grid {
          max-width: 800px;
          margin: 0 auto;
        }
        .contact-card {
          padding: 3rem !important;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-footer {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .social-links a {
          text-decoration: none;
          color: var(--text);
          opacity: 0.5;
          font-weight: 600;
          font-size: 0.9rem;
          transition: 0.3s;
        }
        .social-links a:hover {
          opacity: 1;
          color: var(--primary);
        }

        @media (max-width: 650px) {
          .form-row { grid-template-columns: 1fr; }
          .form-footer { flex-direction: column; text-align: center; }
          .contact-card { padding: 1.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
