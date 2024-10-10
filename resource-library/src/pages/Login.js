import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css';  // Importing the new CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // For programmatic navigation

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'admin123') {
      navigate('/admin-dashboard');
    } else if (username === 'user' && password === 'user123') {
      navigate('/user-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src="/images/library.gif" alt="Library" />
      </div>
      <div className="form-section">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/">Register</a></p> {/* Link to the root page */}
      </div>
    </div>
  );
};

export default Login;
