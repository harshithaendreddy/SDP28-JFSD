import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('file', file);

    try {
      await axios.post('/api/upload', formData);
      alert('File uploaded successfully');
    } catch (err) {
      console.error(err);
    }
  };

  // Define styles
  const inputStyle = {
    width: '92%', // Adjust width as needed
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  // Header styles with navigation
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#232F3E',
    color: '#fff',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 3,
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const searchBarStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
    marginRight: '20px',
  };
  
  const searchInputStyle = {
    width: '90%',  // Reduced from 100% to 90%
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };
  

  const navItemsStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const navItemStyle = {
    color: '#fff',
    textDecoration: 'none',
    padding: '0 10px',
  };

  // Sidebar and menu styles
  const offCanvasMenuStyle = {
    position: 'fixed',
    top: 0,
    left: isMenuOpen ? 0 : '-250px', // Adjust width as needed
    width: '250px',
    height: '100%',
    backgroundColor: '#232F3E', // Same color as the header
    color: '#fff',
    transition: 'left 0.3s ease',
    padding: '10px',
    zIndex: 2,
  };

  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: isMenuOpen ? 'block' : 'none',
    zIndex: 1,
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div style={backdropStyle} onClick={toggleMenu}></div>
      <div style={offCanvasMenuStyle}>
        <a href="/" style={navItemStyle}>Home</a>
        <a href="/" style={navItemStyle}>Upload</a>
        <a href="/" style={navItemStyle}>Settings</a>
      </div>

      {/* Header Section */}
      <header style={headerStyle}>
        <div style={logoStyle}>
          <button
            onClick={toggleMenu}
            style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', marginRight: '10px' }}
          >
            &#9776; {/* Hamburger icon */}
          </button>
          <h2 style={{ margin: 0 }}>Logo</h2> {/* Placeholder for logo */}
        </div>

        <div style={searchBarStyle}>
          <input
            type="text"
            placeholder="Search"
            style={searchInputStyle}
          />
          <nav style={navItemsStyle}>
            <a href="/" style={navItemStyle}>Competitive</a>
            <a href="/" style={navItemStyle}>Higher Studies</a>
            <a href="/" style={navItemStyle}>Cart</a>
          </nav>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <div className="dashboard-container admin-dashboard" style={{ marginTop: '100px' }}>
        <h2>Admin Dashboard</h2>
        <form className="admin-form" onSubmit={handleFileUpload}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={inputStyle} // Apply styles here
            />
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              style={inputStyle} // Apply styles here
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={inputStyle} // Apply styles here
            />
          </div>
          <div>
            <label>File</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
};

export default AdminDashboard;
