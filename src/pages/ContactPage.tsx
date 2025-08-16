import React from 'react';


const ContactPage: React.FC = () => (
  <div className="about-page section">
    <div className="site-container">
      <h1>Contact / Inquiry</h1>
      <div className="contact-layout">
        <div className="contact-card card">
          <form className="contact-form">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Company Name (optional)
              <input type="text" name="company" />
            </label>
            <label>
              Country
              <input type="text" name="country" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              WhatsApp / Phone
              <input type="text" name="phone" required />
            </label>
            <label>
              Message
              <textarea name="message" required />
            </label>
            <button type="submit">Submit</button>
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

export default ContactPage;
