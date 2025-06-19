import React from 'react';
import './BuyGreece.css';
import logo from '../images/logo.png';

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
          <h2>How to Buy Property in Greece (Step by Step)</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Check Your Eligibility</h3>
                <p><strong>EU citizens:</strong> Can buy property freely.</p>
                <p><strong>Non-EU citizens:</strong> Can buy, but may need special permission for border or island areas (especially near Turkey or military zones). Not usually an issue in most tourist-friendly regions.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Get a Greek Tax Number (AFM)</h3>
                <p>Essential for any financial/legal transaction in Greece.</p>
                <p>Can be arranged by your lawyer or accountant with your passport and basic ID.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Open a Greek Bank Account</h3>
                <p>Needed for transferring funds and paying taxes.</p>
                <p>Often requires proof of income, residence, and your AFM.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Appoint a Local Lawyer</h3>
                <p>Your lawyer will:</p>
                <ul>
                  <li>Do title searches</li>
                  <li>Confirm ownership and land use</li>
                  <li>Check for debts or planning issues</li>
                  <li>Handle contracts</li>
                </ul>
                <p><strong>This is essential. Never skip legal help.</strong></p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Sign a Pre-Contract (Optional but Common)</h3>
                <p>A basic agreement with a deposit (around 10%).</p>
                <p>It removes the property from the market and begins the paperwork process.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">6</div>
              <div className="step-content">
                <h3>Final Contract (Symvolaio) & Notary</h3>
                <p>Signed in front of a public notary (mandatory).</p>
                <p>Your lawyer and a certified translator (if needed) will assist.</p>
                <p>Balance of payment is made here.</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">7</div>
              <div className="step-content">
                <h3>Pay Purchase Taxes</h3>
                <ul>
                  <li><strong>Transfer Tax:</strong> Usually 3.09% of the property's official value.</li>
                  <li><strong>Notary and legal fees:</strong> Typically 1–2% each.</li>
                  <li><strong>Agent's fee:</strong> Around 2–2.5%, usually split between buyer and seller.</li>
                </ul>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">8</div>
              <div className="step-content">
                <h3>Register the Property</h3>
                <p>Your lawyer will register your ownership with the Land Registry or Cadastre.</p>
                <p>This is the final legal step to making the property truly yours.</p>
              </div>
            </div>
          </div>

          <div className="costs-summary">
            <h3>Total Buying Costs Estimate:</h3>
            <p><strong>Add 7–10% on top of the sale price to cover all fees and taxes.</strong></p>
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
            <div className="footer-logo">
              <img src={logo} alt="GreekHome Logo" className="footer-logo-image" />
            </div>
            <div className="footer-contacts">
              <div className="footer-contact"><span>Tel:</span> +30 210 1234567</div>
              <div className="footer-contact"><span>Email:</span> info@greekhome.com</div>
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

export default BuyGreece; 