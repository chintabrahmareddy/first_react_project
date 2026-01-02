import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple authentication logic
    if (username === '' && password === '') {
      onLogin({ username });
    } else {
      alert('Invalid credentials');
    }
  };

  const container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #6e8efb, #a777e3)', // nice gradient background
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  };

  const formStyle = {
    background: '#fff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    width: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const titleStyle = {
    marginBottom: '30px',
    fontSize: '24px',
    color: '#333'
  };

  const inputGroup = {
    width: '100%',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column'
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: '600',
    color: '#555'
  };

  const inputStyle = {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'all 0.3s ease',
    fontSize: '14px'
  };

  const buttonStyle = {
    padding: '12px',
    width: '100%',
    borderRadius: '8px',
    border: 'none',
    background: '#6e8efb',
    color: '#fff',
    fontWeight: '600',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s ease'
  };

  const buttonHover = {
    background: '#5970f0'
  };

  return (
    <div style={container}>
      <form
        onSubmit={handleSubmit}
        style={formStyle}
      >
        <h2 style={titleStyle}>Login</h2>

        <div style={inputGroup}>
          <label style={labelStyle}>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            placeholder="Enter username"
          />
        </div>

        <div style={inputGroup}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            placeholder="Enter password"
          />
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.background = buttonHover.background)}
          onMouseOut={(e) => (e.target.style.background = buttonStyle.background)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
