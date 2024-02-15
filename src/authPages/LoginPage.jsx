// LoginPage.jsx
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the username and password are valid
    if (username === 'musta' && password === '123456') {
      // Authentication successful
      navigate('/landingpage'); // Redirect to the landing page
    } else {
      // Authentication failed
      setError('Invalid username or password');
    }
  };

  return (
    <div className="loginPage-main">
      <div className="loginPage-sub">
        <h1>Login Page</h1>
        <form action="" className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="login-btn">
            <button type="submit">Login</button>
          </div>
        </form>
        <p className="register-link">
          Don't have an account? <Link to='/newuserRegister'>Register here</Link>
        </p>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
