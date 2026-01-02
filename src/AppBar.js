import React from 'react';
import companylogo from './companylogo.svg';

function AppBar({ user, onLogout }) {
  const barStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };

  const leftStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const logoStyle = {
    height: '40px',
    marginRight: '10px'
  };

  const companyNameStyle = {
    fontSize: '20px',
    fontWeight: '600'
  };

  const userSection = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  };

  const logoutButton = {
    padding: '6px 12px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#fff',
    color: '#007bff',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const handleHover = (e, hover) => {
    e.target.style.backgroundColor = hover ? '#e0e0e0' : '#fff';
  };

  return (
    <div style={barStyle}>
      <div style={leftStyle}>
        <img src={companylogo} alt="Company Logo" style={logoStyle} />
        <span style={companyNameStyle}>Company Name</span>
      </div>
      {user && (
        <div style={userSection}>
          <span>Welcome, {user.username}</span>
          <button
            style={logoutButton}
            onClick={onLogout}
            onMouseOver={(e) => handleHover(e, true)}
            onMouseOut={(e) => handleHover(e, false)}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default AppBar;
