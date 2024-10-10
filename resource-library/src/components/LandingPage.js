import React from 'react';
import { useNavigate } from 'react-router-dom'; // Replaced useHistory with useNavigate

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleUserClick = () => {
    navigate('/user-register'); // Navigate to user registration page
  };

  const handleAdminClick = () => {
    navigate('/admin-register'); // Navigate to admin registration page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Library Platform</h1>
      <p>Please choose your role to proceed:</p>
      <div>
        <button onClick={handleUserClick}>User</button>
        <button onClick={handleAdminClick} style={{ marginLeft: '10px' }}>
          Admin
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
