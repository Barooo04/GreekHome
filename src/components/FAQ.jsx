import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-page">
      <div className="faq-hero">
        <div className="faq-overlay"></div>
        <div className="faq-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to the most common questions about buying property in Greece</p>
        </div>
      </div>

      <section className="faq-section">
        <div className="faq-list">
          <FaqItem
            question="Can foreigners buy property in Greece?"
            answer="Yes, citizens of most countries can buy property in Greece. The process is straightforward, especially for EU citizens. Non-EU buyers may need additional paperwork, but it is absolutely possible!"
          />
          <FaqItem
            question="What are the main steps to purchase a home in Greece?"
            answer="The main steps are: finding the right property, signing a preliminary agreement, legal checks, signing the final contract at the notary, and registering the property. We guide you through each step!"
          />
          <FaqItem
            question="Do I need to speak Greek to buy a house?"
            answer="No, but it helps! Most agents and notaries speak English, and we provide support in both English and Greek to make the process smooth for you."
          />
          <FaqItem
            question="How much are the additional costs and taxes?"
            answer="In general, you should budget around 8-10% of the purchase price for taxes, notary, legal fees, and agent commission. We provide a detailed breakdown in our guide."
          />
          <FaqItem
            question="What documents do I need to buy property in Greece?"
            answer="You'll need a valid passport or ID card, tax number (AFM), and proof of address. Non-EU citizens may need additional documents. We'll help you gather everything needed."
          />
          <FaqItem
            question="Can I get a mortgage in Greece as a foreigner?"
            answer="Yes, many Greek banks offer mortgages to foreigners. The requirements and terms may vary, but we can help you find the best options for your situation."
          />
          <FaqItem
            question="How long does the buying process take?"
            answer="Typically, the process takes 2-3 months from finding the property to completion. This includes legal checks, contract preparation, and final registration."
          />
          <FaqItem
            question="What are the annual property taxes in Greece?"
            answer="Property taxes in Greece are relatively low compared to many other European countries. The exact amount depends on the property value and location. We can provide specific estimates for properties you're interested in."
          />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info-block">
            <div className="footer-logo"><div className="footer-logo-placeholder"></div></div>
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

// FAQ Item Component
function FaqItem({ question, answer }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`} onClick={() => setOpen(o => !o)}>
      <div className="faq-question">
        <span>{question}</span>
        <span className={`faq-arrow${open ? ' open' : ''}`}>▼</span>
      </div>
      <div className="faq-answer-wrapper">
        <div className="faq-answer">{answer}</div>
      </div>
    </div>
  );
}

export default FAQ; 