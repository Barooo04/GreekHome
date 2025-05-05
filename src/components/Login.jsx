import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qui andrà la logica di login
    console.log('Login attempt:', { email, password });
    // Per ora reindirizziamo direttamente alla dashboard
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-overlay"></div>
      <div className="login-content">
        <div className="login-box">
          <h1>Welcome Back</h1>
          <p className="login-subtitle">Sign in to your account</p>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="login-button-send">
              Sign In
            </button>

            <div className="forgot-password-container">
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; 