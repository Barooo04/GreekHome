import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  // Questi dati dovrebbero venire dal backend dopo il login
  const userData = {
    name: "Mario Rossi",
    email: "mario.rossi@example.com",
    birthDate: "15/03/1985",
    phone: "+39 123 456 7890",
    address: "Via Roma 123, Milano",
    subscription: {
      plan: "Premium",
      price: "29.99",
      nextBilling: "15/04/2024"
    },
    card: {
      type: "Visa",
      last4: "4242"
    }
  };

  const handleLogout = () => {
    // Qui andrà la logica di logout
    navigate('/');
  };

  const handleCancelSubscription = () => {
    // Qui andrà la logica per cancellare l'abbonamento
    console.log('Cancellazione abbonamento');
  };

  const handleContactSupport = () => {
    // Qui andrà la logica per contattare l'assistenza
    console.log('Contatto assistenza');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Welcome back, {userData.name}</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>

        <div className="dashboard-cards">
          <div className="dashboard-card subscription-card">
            <h2>Your Plan</h2>
            <div className="subscription-details">
              <div className="subscription-info">
                <span className="plan-name">{userData.subscription.plan}</span>
                <span className="plan-price">€{userData.subscription.price}/month</span>
                <span className="next-billing">Next billing: {userData.subscription.nextBilling}</span>
              </div>
              <button 
                onClick={handleCancelSubscription} 
                className="cancel-subscription-button"
              >
                Cancel Subscription
              </button>
            </div>
          </div>

          <div className="dashboard-card payment-card">
            <h2>Payment Method</h2>
            <div className="card-details">
              <div className="card-icon">
                {userData.card.type === 'Visa' ? (
                  <svg viewBox="0 0 24 24" width="40" height="40">
                    <path fill="#1A1F71" d="M22.4 4H1.6C.7 4 0 4.7 0 5.6v12.8c0 .9.7 1.6 1.6 1.6h20.8c.9 0 1.6-.7 1.6-1.6V5.6c0-.9-.7-1.6-1.6-1.6z"/>
                    <path fill="#F7B600" d="M22.4 4H1.6C.7 4 0 4.7 0 5.6v12.8c0 .9.7 1.6 1.6 1.6h20.8c.9 0 1.6-.7 1.6-1.6V5.6c0-.9-.7-1.6-1.6-1.6z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="40" height="40">
                    <path fill="#FF5F00" d="M22.4 4H1.6C.7 4 0 4.7 0 5.6v12.8c0 .9.7 1.6 1.6 1.6h20.8c.9 0 1.6-.7 1.6-1.6V5.6c0-.9-.7-1.6-1.6-1.6z"/>
                  </svg>
                )}
              </div>
              <div className="card-info">
                <span className="card-type">{userData.card.type}</span>
                <span className="card-number">•••• {userData.card.last4}</span>
              </div>
            </div>
          </div>

          <div className="dashboard-card personal-info-card">
            <h2>Personal Information</h2>
            <div className="personal-info-details">
              <div className="info-row">
                <span className="info-label">Full Name</span>
                <span className="info-value">{userData.name}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email</span>
                <span className="info-value">{userData.email}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Birth Date</span>
                <span className="info-value">{userData.birthDate}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Phone</span>
                <span className="info-value">{userData.phone}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Address</span>
                <span className="info-value">{userData.address}</span>
              </div>
            </div>
          </div>

          <div className="dashboard-card support-card">
            <h2>Need Help?</h2>
            <div className="support-content">
              <div className="support-icon">
                <svg viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92c-.5.51-.86.97-1.04 1.69-.08.32-.13.68-.13 1.14h-2v-.5c0-.46.08-.9.22-1.31.2-.58.53-1.1.95-1.52l1.24-1.26c.46-.44.68-1.1.55-1.8-.13-.72-.69-1.33-1.39-1.53-1.11-.31-2.14.32-2.47 1.27-.12.35-.43.58-.79.58-.07 0-.14-.01-.21-.02-.39-.08-.65-.46-.57-.85.47-1.8 2.12-2.97 4.03-2.97 1.34 0 2.59.67 3.33 1.79.74 1.12.74 2.49.01 3.62z"/>
                </svg>
              </div>
              <p className="support-text">Our support team is here to help you with any questions or issues you may have.</p>
              <button onClick={handleContactSupport} className="support-button">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 