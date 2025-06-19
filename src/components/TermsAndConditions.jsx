import React from 'react';
import './TermsAndConditions.css';
import logo from '../images/logo.png';

const TermsAndConditions = () => (
  <div className="terms-page">
    <div className="terms-hero">
      <div className="terms-hero-overlay"></div>
      <div className="terms-hero-content">
        <h1>Terms & Conditions</h1>
      </div>
    </div>
    <div className="terms-container">
      <div className="terms-content">
        <p>Last updated: May 2024</p>
        <h2>1. Introduction</h2>
        <p>
          Welcome to My Cheap Greek Home. By accessing or using our website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.
        </p>
        <h2>2. Data Collection & Privacy</h2>
        <p>
          We value your privacy. My Cheap Greek Home does <strong>not</strong> collect or process any personal data except for the information you voluntarily provide through our contact or login forms (such as your name, email address, and message). We do not use cookies for tracking, profiling, or marketing purposes.
        </p>
        <h2>3. Use of Your Data</h2>
        <p>
          The data you submit via our forms is used solely to respond to your requests, provide our services, or manage your account. Your data will <strong>never</strong> be sold, shared, or used for marketing without your explicit consent.
        </p>
        <h2>4. Data Storage & Security</h2>
        <p>
          We take appropriate technical and organizational measures to protect your data. Your information is stored securely and is accessible only to authorized personnel. We retain your data only as long as necessary to fulfill your request or as required by law.
        </p>
        <h2>5. Your Rights (GDPR)</h2>
        <p>
          In accordance with the General Data Protection Regulation (GDPR), you have the right to:
          <ul>
            <li>Access your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw your consent at any time</li>
            <li>Object to or restrict processing of your data</li>
          </ul>
          To exercise your rights, please contact us at <a href="mailto:info@greekhome.com">info@greekhome.com</a>.
        </p>
        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites.
        </p>
        <h2>7. Changes to These Terms</h2>
        <p>
          We may update these Terms & Conditions from time to time. Any changes will be posted on this page with an updated revision date.
        </p>
        <h2>8. Contact</h2>
        <p>
          For any questions regarding these Terms & Conditions or your data, please contact us at <a href="mailto:info@greekhome.com">info@greekhome.com</a>.
        </p>
      </div>
    </div>
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

export default TermsAndConditions; 