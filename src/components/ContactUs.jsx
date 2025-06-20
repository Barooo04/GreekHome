import React from 'react';
import './ContactUs.css';
import logo from '../images/logo.png';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-us-hero">
        <div className="contact-us-overlay"></div>
        <div className="contact-us-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team of Greek property experts</p>
        </div>
      </div>

      <section className="contact-us-main">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Our Office</h2>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="9" r="2.5" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Address</h3>
                  <p>123 Kolonaki Street</p>
                  <p>Athens, 10675</p>
                  <p>Greece</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                    <path d="M22 6l-10 7L2 6" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <p>hello@mycheapgreekhome.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info-block">
            <div className="footer-logo">
              <img src={logo} alt="GreekHome Logo" className="footer-logo-image" />
            </div>
            <div className="footer-contacts">
              <div className="footer-contact"><span>Email:</span> hello@mycheapgreekhome.com</div>
              <div className="footer-contact"><span>P.IVA:</span> GR123456789</div>
              <a href="/terms" className="footer-link">Terms & Conditions</a>
            </div>
          </div>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="30" height="30" rx="8" fill="#fff" stroke="#284277" strokeWidth="2"/>
                <circle cx="20" cy="20" r="8" stroke="#006bbd" strokeWidth="2" fill="#81c8ee"/>
                <circle cx="28" cy="12" r="2" fill="#006bbd"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="30" height="30" rx="8" fill="#fff" stroke="#284277" strokeWidth="2"/>
                <path d="M24 20h-2v8h-4v-8h-2v-3h2v-2c0-2 1-3 3-3h3v3h-2c-0.5 0-1 0.5-1 1v1h3l-1 3z" fill="#006bbd"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs; 