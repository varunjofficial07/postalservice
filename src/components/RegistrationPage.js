import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegistrationPage.css';
import EmblemOfIndia from '../assets/Emblem_of_India.png';
import IndiaPostImage from '../assets/india-post-madipakkam-chennai-india-post-2aqnm.avif';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    password: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);

      if (response.status === 201) {
        alert('User registered successfully!');
        navigate('/'); // Redirect to login page
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed!');
    }
  };

  return (
    <div className="registration-container">
      {/* Header Image */}
      <div className="header-image-container">
        <img src={EmblemOfIndia} alt="Emblem of India" className="header-image" />
      </div>

      {/* Title */}
      <h1 className="title">Register as a User</h1>

      <div className="content-container">
        {/* Registration Form */}
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="dropdown-field"
            >
              <option value="">Select Role</option>
              <option value="Chief Postmaster General">Chief Postmaster General</option>
              <option value="Regional Head">Regional Head</option>
              <option value="Divisional Head">Divisional Head</option>
              <option value="Sub-Divisional Head">Sub-Divisional Head</option>
            </select>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input-field"
            />
          </div>

          <div className="form-group">
            <label>Post Office Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="input-field"
            />
          </div>

          <button type="submit" className="register-button">Register</button>
        </form>
      </div>

      <Link to="/" className="login-link">
        Already Registered? Login now
      </Link>
    </div>
  );
};

export default RegistrationPage;
