import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; // Import the styles

const UserRegister = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleRegister = (e) => {
    e.preventDefault();

    // Simulate user registration logic
    console.log('User registered:', { username, password });
    
    // After successful registration, redirect to the login page
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src="/images/library.gif" alt="Library" />
      </div>
      <div className="form-section">
        <h1>User Registration</h1>
        <form onSubmit={handleRegister}>
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
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default UserRegister;
