import React from 'react';

const AboutPage: React.FC = () => (
  <div className="about-page section">
    <div className="site-container">
      <h1>About Us</h1>
      <section>
        <h2>Company Overview</h2>
        <p>Exoglobe India Private Limited is a quality-driven export house based in India, committed to supplying authentic Indian agricultural products to global markets. We start our journey with spices and plan to expand into multiple categories over time.</p>
      </section>
      <section>
        <h2>Mission Statement</h2>
        <p>To connect global buyers with the finest Indian agricultural exports, ensuring quality, authenticity, and reliability in every shipment.</p>
      </section>
      <section>
        <h2>Vision</h2>
        <p>To become a globally trusted name in Indian exports through innovation, service excellence, and sustainable partnerships.</p>
      </section>
      <section>
        <h2>Core Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Quality</li>
          <li>Commitment</li>
          <li>Customer-first approach</li>
        </ul>
      </section>
      <section>
        <h2>Founder's Message</h2>
        <blockquote>
          I started Exoglobe with a mission to bring the unmatched quality of Indian spices to the world. Our roots are local, but our vision is global.
        </blockquote>
      </section>
    </div>

    {/* Contact / Inquiry Section (migrated from ContactPage) */}
    <div className="contact-section">
      <h1>Contact / Inquiry</h1>
      <div className="contact-layout">
        <div className="contact-card card" style={{padding: '2.2rem 2rem', boxShadow: '0 8px 32px rgba(30,41,59,0.10)', border: 'none', background: 'rgba(255,255,255,0.98)'}}>
          <div style={{marginBottom: '1.5rem', textAlign: 'center'}}>
            <h2 style={{margin: 0, color: 'var(--brand-1)', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '0.5px'}}>Send Us a Message</h2>
            <p style={{color: '#64748b', fontSize: '1rem', marginTop: '0.5rem'}}>We usually respond within 24 hours.</p>
          </div>
          <form className="contact-form" style={{display: 'flex', flexDirection: 'column', gap: '1.1rem'}}>
            <div style={{display: 'flex', gap: '1rem'}}>
              <div style={{flex: 1}}>
                <label style={{fontWeight: 600, color: 'var(--brand-1)'}}>Name</label>
                <input type="text" name="name" required style={{width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: '1rem', marginTop: 4}} />
              </div>
              <div style={{flex: 1}}>
                <label style={{fontWeight: 600, color: 'var(--brand-1)'}}>Company (optional)</label>
                <input type="text" name="company" style={{width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: '1rem', marginTop: 4}} />
              </div>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
              <div style={{flex: 1}}>
                <label style={{fontWeight: 600, color: 'var(--brand-1)'}}>Country</label>
                <input type="text" name="country" required style={{width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: '1rem', marginTop: 4}} />
              </div>
              <div style={{flex: 1}}>
                <label style={{fontWeight: 600, color: 'var(--brand-1)'}}>Email</label>
                <input type="email" name="email" required style={{width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: '1rem', marginTop: 4}} />
              </div>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
              <div style={{flex: 1}}>
                <label style={{fontWeight: 600, color: 'var(--brand-1)'}}>WhatsApp / Phone</label>
                <input type="text" name="phone" required style={{width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: '1rem', marginTop: 4}} />
              </div>
            </div>
            <div>
              <label style={{fontWeight: 600, color: 'var(--brand-1)'}}>Message</label>
              <textarea name="message" required rows={4} style={{width: '100%', padding: '0.7rem', borderRadius: 8, border: '1px solid #cbd5e1', fontSize: '1rem', marginTop: 4, resize: 'vertical'}} />
            </div>
            <button type="submit" style={{marginTop: '0.5rem', background: 'linear-gradient(90deg, var(--brand-1), var(--brand-2))', color: '#fff', fontWeight: 700, fontSize: '1.1rem', border: 'none', borderRadius: 8, padding: '0.9rem 0', boxShadow: '0 4px 18px rgba(56,189,248,0.10)', cursor: 'pointer', letterSpacing: '0.5px', transition: 'background 0.2s'}}>Send Inquiry</button>
          </form>
        </div>
        <aside className="contact-card">
          <section className="contact-details">
            <h2>Contact Details</h2>
            <ul>
              <li>Email: youremail@example.com</li>
              <li>Phone/WhatsApp: +91-XXXXXXXXXX</li>
              <li>Location: City, State, India</li>
              <li>Business Hours: Mon–Sat, 10 AM–6 PM IST</li>
            </ul>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </section>
        </aside>
      </div>
    </div>
  </div>
);

export default AboutPage;
