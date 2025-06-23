import React from 'react';
import './Home.css';
import logo from '../images/logo.png';
import Bubbles from './Bubbles';

const Home = () => {

  return (
    <>
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img src={logo} alt="My Cheap Greek Home Logo" className="hero-logo" />
          <p>
            <span>Your Dream Home in Greece</span>
          </p>
          <p>Handpicked by Me, Just for You.</p>
        </div>
      </div>
      {/* Sezione descrittiva */}
      <section className="about-section">
        <div className="about-text">
          <h2>DREAM IN GREEK (Ouzo optional, but encouraged)</h2>
          <p>
            Tired of doomscrolling when you could be daydreaming about whitewashed villages and sun-drenched terraces?
            <br />
            Sign up for my Weekly Property & Lifestyle Newsletter — landing in your inbox every Friday like a fresh breeze off the Aegean.
          </p>
          <h4>What you'll get:</h4>
          <ul>
            <li>4 handpicked gems under €100k</li>
            <li>Real photos (not the 'creative angle' kind)</li>
            <li>Prices in actual Euros</li>
            <li>Direct contact info for the agent (no middlemen or mystery)</li>
            <li>Tips, advice, and a little local know-how</li>
            <li>Plus – a traditional Greek recipe to stir your soul (and your appetite)</li>
          </ul>
          <p>
            My Instagram? Just the tip of the feta.
            <br />
            This newsletter is the full mezze platter.
          </p>
          <p>
            So let me be your eyes, ears, and very unofficial tour guide in Greece.
            <br />
            It's your weekly mini escape to the Mediterranean — no passport required.
          </p>
          <p>
            You're going to LOVE it. Cross my heart and smash a plate.
          </p>
        </div>
        <div className="about-svgs">
          <Bubbles />
        </div>
      </section>
      {/* Sezione Buying in Greece preview */}
      <section className="buying-section">
        <h2>Buying in Greece</h2>
        <p className="buying-desc">
          Curious about how to buy a home in Greece? We guide you through every step: from understanding the legal process and finding the right property, to dealing with paperwork and settling into your new Greek life. Whether you're looking for a holiday retreat or a permanent move, our resources and tips make your journey smooth and safe.
        </p>
        <a href="/buying-in-greece" className="buying-link-button">Read our full guide</a>
      </section>
      {/* Sezione come lavoriamo */}
      <section className="howwework-section">
        <div className="howwework-img-container">
          <div className="howwework-img-decor">
            {/* Immagine con contorni decorativi */}
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Greek landscape" className="howwework-img" />
            <svg className="howwework-svg-decor" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="60" cy="60" rx="55" ry="55" stroke="#81c8ee" strokeWidth="4" strokeDasharray="12 10" fill="none"/>
            </svg>
          </div>
        </div>
        <div className="howwework-text">
          <h2>How We Work</h2>
          <p>
            At My Cheap Greek Home, we believe in a personal and transparent approach. We carefully select each property, collaborate only with trusted local agents, and provide you with honest, unbiased advice. Our process is tailored to your needs: from the first contact to the final signature, we are by your side, making your Greek property journey smooth, safe, and enjoyable.
          </p>
        </div>
      </section>
      {/* Sezione recensioni con 3 card */}
      <section className="reviews-section">
        <h2>What our clients say</h2>
        <div className="reviews-cards">
          <div className="review-card decorated">
            <div className="review-decor decor-azur"></div>
            <div className="review-text">"My Cheap Greek Home made my dream of living in Greece possible! The weekly updates and personal advice were invaluable. Highly recommended!"</div>
            <div className="review-author">
              <span className="review-flag">🇺🇸</span>
              <span className="review-name">Susan Murphy</span>
            </div>
            <div className="review-decor decor-gold"></div>
          </div>
          <div className="review-card decorated">
            <div className="review-decor decor-azur"></div>
            <div className="review-text">"I live for Thursdays thanks to this fabulous newsletter. It feeds our plan to move to Greece while educating us at the same time."</div>
            <div className="review-author">
              <span className="review-flag">🇬🇧</span>
              <span className="review-name">Deborah Seidner</span>
            </div>
            <div className="review-decor decor-gold"></div>
          </div>
          <div className="review-card decorated">
            <div className="review-decor decor-azur"></div>
            <div className="review-text">"This week's newsletter is amazing! Love it... I want them all! The best resource for Greek properties."</div>
            <div className="review-author">
              <span className="review-flag">🇮🇪</span>
              <span className="review-name">Happy Subscriber</span>
            </div>
            <div className="review-decor decor-gold"></div>
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
    </>
  );
};

export default Home; 