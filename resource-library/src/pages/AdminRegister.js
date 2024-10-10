import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.css'; // Import the styles

const AdminRegister = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleAdminRegister = (e) => {
    e.preventDefault();

    // Simulate admin registration logic
    console.log('Admin registered:', { adminUsername, password });
    
    // After successful registration, redirect to the login page
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src="/images/library.gif" alt="Library" />
      </div>
      <div className="form-section">
        <h1>Admin Registration</h1>
        <form onSubmit={handleAdminRegister}>
          <input
            type="text"
            placeholder="Admin Username"
            value={adminUsername}
            onChange={(e) => setAdminUsername(e.target.value)}
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

export default AdminRegister;
