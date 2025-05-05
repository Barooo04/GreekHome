import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-hero">
        <div className="about-us-overlay"></div>
        <div className="about-us-content">
          <h1>About Us</h1>
          <p>Your trusted guide in the Greek real estate world</p>
        </div>
      </div>

      <section className="about-us-main">
        <div className="about-us-card">
          <div className="about-us-image-container">
            <img 
              src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Greek Home Team" 
              className="about-us-image"
            />
            <div className="greek-pattern"></div>
          </div>
          <div className="about-us-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, GreekHome was born from a passion for Greece and the desire to help people realize their dream of living in this wonderful country. Our team, composed of local and international experts, combines deep knowledge of the Greek real estate market with a personalized approach attentive to each client's needs.
            </p>
            <p>
              We stand out for our transparency, professionalism, and dedication in guiding our clients through every phase of the purchase process, from finding the ideal property to the final signature.
            </p>
          </div>
        </div>

        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L4 12L24 20L44 12L24 4Z" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                  <path d="M4 24L24 32L44 24" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                  <path d="M4 36L24 44L44 36" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Authenticity</h3>
              <p>We select only properties that reflect the true essence of Greece</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24C32 28.4183 28.4183 32 24 32" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                  <path d="M24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                  <path d="M24 16V8" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                  <path d="M24 40V32" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Trust</h3>
              <p>We build lasting relationships based on transparency and honesty</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4L29.2533 18.2918H44.7066L32.7266 27.4164L38.0132 41.7082L24 32.5836L9.9868 41.7082L15.2734 27.4164L3.2934 18.2918H18.7467L24 4Z" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We are committed to providing superior quality service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info-block">
            <div className="footer-logo">GreekHome</div>
            <div className="footer-contacts">
              <div className="footer-contact"><span>Tel:</span> +30 210 1234567</div>
              <div className="footer-contact"><span>Email:</span> info@greekhome.com</div>
              <div className="footer-contact"><span>P.IVA:</span> GR123456789</div>
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

export default AboutUs; 