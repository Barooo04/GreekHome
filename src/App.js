import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import BuyGreece from './components/BuyGreece';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import FAQ from './components/FAQ';
import TermsAndConditions from './components/TermsAndConditions';
import './App.css';

function AppContent() {
  const location = useLocation();
  const showNavbar = location.pathname !== '/dashboard';

  return (
    <div className="app">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/buying-in-greece" element={<BuyGreece />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 