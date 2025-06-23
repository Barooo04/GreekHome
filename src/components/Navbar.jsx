import React, { useState, useEffect } from 'react';
import {  useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${location.pathname === '/' ? 'on-home' : ''}`}>
      <div className="navbar-container">
        <div className={`navbar-logo ${isScrolled ? 'scrolled' : ''}`}>
          <img src={logo} alt="GreekHome Logo" className="navbar-logo-image" />
        </div>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className={`navbar-link ${isActive('/') ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            Home
          </a>
          <a href="/buying-in-greece" className={`navbar-link ${isActive('/buying-in-greece') ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            Buying in Greece
          </a>
          <a href="/faq" className={`navbar-link ${isActive('/faq') ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            FAQ
          </a>
          <a href="/contact-us" className={`navbar-link ${isActive('/contact-us') ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
            Contact Us
          </a>
          {/*
          <button onClick={() => navigate('/login')} className={`login-button ${isScrolled ? 'scrolled' : ''}`}>
            Login
          </button>
          */}
        </div>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 