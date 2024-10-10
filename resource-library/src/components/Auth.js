import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Replaced useHistory with useNavigate

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // New navigate hook

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    if (email === 'admin@example.com') {
      navigate('/admin-dashboard'); // Navigate to admin dashboard
    } else {
      navigate('/user-dashboard'); // Navigate to user dashboard
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth;
