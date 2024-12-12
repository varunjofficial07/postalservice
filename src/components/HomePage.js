// HomePage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    role: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:5000/api/login', credentials);

      if (response.data.token) {
        // Store the token in localStorage or state
        localStorage.setItem('token', response.data.token);
        navigate('/user'); // Redirect to the UserPage on successful login
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="homepage-container">
      <h1 className="title">BRSR Reporting - Department of Post</h1>
      <img
        src={require('../assets/india-post-madipakkam-chennai-india-post-2aqnm.avif')}
        alt="India Post"
        className="homepage-image"
      />
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email ID"
            className="input-field"
            value={credentials.email}
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <select
            className="dropdown-field"
            value={credentials.role}
            onChange={(e) => setCredentials({ ...credentials, role: e.target.value })}
          >
            <option value="">Login as</option>
            <option value="Chief Postmaster General">Chief Postmaster General</option>
            <option value="Regional Head">Regional Head</option>
            <option value="Divisional Head">Divisional Head</option>
            <option value="Sub-Divisional Head">Sub-Divisional Head</option>
          </select>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <Link to="/register" className="register-link">
          Not Registered? Register now
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
