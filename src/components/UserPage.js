import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './UserPage.css';
import BackgroundImage from '../assets/Indian-post-office-vadakkus.jpg';

const UserPage = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleProfile = () => {
    setProfileVisible(!profileVisible);
  };

  const goBack = () => {
    setMenuVisible(false);
    setProfileVisible(false);
  };

  const handleLogout = () => {
    // Clear user data (e.g., tokens) here
    // localStorage.removeItem('authToken'); // Example of clearing a token
    navigate('/'); // Redirect to home page
  };

  return (
    <div
      className="userpage-container"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.9,
      }}
    >
      {/* Header */}
      <header className="header">
        <div className="menu-bar" onClick={toggleMenu}>
          ☰ Menu
        </div>
        <div className="user-profile" onClick={toggleProfile}>
          <img
            src={require('../assets/219988.png')}
            alt="User Profile"
            className="profile-icon"
          />
        </div>
      </header>

      {/* Sidebar Menu */}
      <nav className={`sidebar ${menuVisible ? 'visible' : ''}`}>
        <button className="back-button" onClick={goBack}>
          Back
        </button>
        <ul>
          <li>View Post Details</li>
          <li>New Employee Registration</li>
          <li>Search Post</li>
          <li>View Employees Details</li>
        </ul>
      </nav>

      {/* User Profile Dropdown */}
      <div className={`user-profile-dropdown ${profileVisible ? 'visible' : ''}`}>
        <button className="back-button" onClick={goBack}>
          Back
        </button>
        <ul>
          <li>Update Profile</li>
          <li>Change Password</li>
          <li>Settings</li>
          <li onClick={handleLogout}>Logout</li> {/* Attach logout handler */}
        </ul>
      </div>

      {/* Main Content */}
      <main className="main-content">
      <div 
  className="section-box dashboard"
  onClick={() => {
    const dashboardModal = document.createElement('div');
    dashboardModal.style.position = 'fixed';
    dashboardModal.style.top = '0';
    dashboardModal.style.left = '0';
    dashboardModal.style.width = '100%';
    dashboardModal.style.height = '100%';
    dashboardModal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    dashboardModal.style.zIndex = '1000';
    dashboardModal.style.display = 'flex';
    dashboardModal.style.justifyContent = 'center';
    dashboardModal.style.alignItems = 'center';

    const iframeContainer = document.createElement('div');
    iframeContainer.style.position = 'relative';
    iframeContainer.style.width = '90%';
    iframeContainer.style.maxWidth = '1140px';
    iframeContainer.style.height = '80%';
    iframeContainer.style.maxHeight = '541.25px';

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '-30px';
    closeButton.style.right = '0';
    closeButton.style.backgroundColor = 'white';
    closeButton.style.color = 'black';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => document.body.removeChild(dashboardModal);

    const iframe = document.createElement('iframe');
    iframe.title = "DoP Dashboard Final";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.src = "https://app.powerbi.com/reportEmbed?reportId=412061f5-e103-44c5-ae44-9ce2cd5217d8&autoAuth=true&ctid=406d14a1-bb58-45cc-87c7-a94bd579c71d";
    iframe.frameBorder = "0";
    iframe.allowFullScreen = true;

    iframeContainer.appendChild(closeButton);
    iframeContainer.appendChild(iframe);
    dashboardModal.appendChild(iframeContainer);
    document.body.appendChild(dashboardModal);

    dashboardModal.onclick = (e) => {
      if (e.target === dashboardModal) {
        document.body.removeChild(dashboardModal);
      }
    };
  }}
>
  <h2>Dashboard</h2>
  <p>Quick stats and insights</p>
</div>
        <div
          className="section-box reporting"
          onClick={() => window.location.href = 'http://localhost:3001/'}// Navigate to NewReport page
        >
          <h2>Reporting Section</h2>
          <p>Submit sustainability metrics via the BRSR framework.</p>
        </div>
        {/* <div className="section-box transactions">
          <h2>Enhanced Logistics</h2>
          <p>Optimized Routes</p>
        </div> */}
        <div 
  className="section-box transactions"
  onClick={() => {
    const mapsModal = document.createElement('div');
    mapsModal.style.position = 'fixed';
    mapsModal.style.top = '0';
    mapsModal.style.left = '0';
    mapsModal.style.width = '100%';
    mapsModal.style.height = '100%';
    mapsModal.style.backgroundColor = 'rgba(0,0,0,0.8)';
    mapsModal.style.zIndex = '1000';
    mapsModal.style.display = 'flex';
    mapsModal.style.justifyContent = 'center';
    mapsModal.style.alignItems = 'center';

    const iframeContainer = document.createElement('div');
    iframeContainer.style.position = 'relative';
    iframeContainer.style.width = '90%';
    iframeContainer.style.maxWidth = '1200px';
    iframeContainer.style.height = '80%';
    iframeContainer.style.maxHeight = '800px';

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '-30px';
    closeButton.style.right = '0';
    closeButton.style.backgroundColor = 'white';
    closeButton.style.color = 'black';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => document.body.removeChild(mapsModal);

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a47df06b185%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1623164983123!5m2!1sen!2sus";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "0";
    iframe.allowFullScreen = true;
    iframe.loading = "lazy";

    iframeContainer.appendChild(closeButton);
    iframeContainer.appendChild(iframe);
    mapsModal.appendChild(iframeContainer);
    document.body.appendChild(mapsModal);

    mapsModal.onclick = (e) => {
      if (e.target === mapsModal) {
        document.body.removeChild(mapsModal);
      }
    };
  }}
>
  <h2>Enhanced Logistics</h2>
  <p>Optimized Routes</p>
</div>
        <div className="section-box tools-help">
          <h2>Knowledge Sharing & Help</h2>
          <p>Access user guides and tools for assistance.</p>
        </div>
        <div className="section-box tools-help" onClick={() => window.location.href = 'https://guileless-granita-8af434.netlify.app/'}>
          <h2>Leader Board</h2>
          <p>Sustainability Leaders</p>
        </div>
      </main>
    </div>
  );
};

export default UserPage;

