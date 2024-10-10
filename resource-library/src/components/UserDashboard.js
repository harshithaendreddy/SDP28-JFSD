// UserDashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';  

const UserDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [resources, setResources] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`/api/resources?search=${searchTerm}`);
      setResources(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard-container  user-dashboard">
      <h2>User Dashboard</h2>
      <div>
        <input
          type="text"
          placeholder="Search for resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="resource-list">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.fileUrl} download>Download</a>
            <a href={`/feedback/${resource.id}`}>Leave Feedback</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
