import React from 'react';
import './BuyGreece.css';

const BuyGreece = () => {
  return (
    <div className="buy-greece-container">
      <div className="buy-greece-hero">
        <div className="buy-greece-overlay"></div>
        <div className="buy-greece-content">
          <h1>Buying in Greece</h1>
          <p>Your complete guide to owning a piece of Greek paradise</p>
        </div>
      </div>

      <section className="buy-greece-main">
        <div className="process-section">
          <h2>The Buying Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Initial Consultation</h3>
                <p>We begin with a detailed discussion about your requirements, budget, and preferences. This helps us understand your vision and guide you towards the perfect property.</p>
                <img 
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Initial Consultation" 
                  className="step-image"
                />
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Property Selection</h3>
                <p>Our team carefully curates a selection of properties that match your criteria. We personally visit each property to ensure it meets our high standards.</p>
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" 
                  alt="Property Selection" 
                  className="step-image"
                />
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Legal Process</h3>
                <p>We guide you through all legal aspects, from property checks to contract preparation. Our legal team ensures everything is properly documented and secure.</p>
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80" 
                  alt="Legal Process" 
                  className="step-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <div className="info-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L4 12L24 20L44 12L24 4Z" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                <path d="M4 24L24 32L44 24" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                <path d="M4 36L24 44L44 36" stroke="#2c3e50" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3>Property Types</h3>
            <p>From traditional island homes to modern city apartments, discover the diverse range of properties available in Greece.</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4Z" stroke="#2c3e50" strokeWidth="2" fill="none"/>
                <path d="M24 12V24L32 28" stroke="#2c3e50" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3>Timeline</h3>
            <p>Understand the typical timeline for purchasing property in Greece, from initial search to final ownership.</p>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 4L29.2533 18.2918H44.7066L32.7266 27.4164L38.0132 41.7082L24 32.5836L9.9868 41.7082L15.2734 27.4164L3.2934 18.2918H18.7467L24 4Z" stroke="#2c3e50" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <h3>Costs & Taxes</h3>
            <p>Get a clear understanding of all costs involved, including taxes, fees, and additional expenses.</p>
          </div>
        </div>

        <div className="cta-section">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Contact us today to begin your property search in Greece</p>
            <button className="cta-button">Get in Touch</button>
          </div>
          <div className="cta-image">
            <img 
                  src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Greek Landscape" 
            />
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

export default BuyGreece; 