// server.js
import cors from "cors";
import express from "express";
// const express = require('express');
import mongoose from "mongoose";
// const mongoose = require('mongoose');
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/brsr", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// User schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  location: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, "amsocshcihsich", { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Register route
app.post('/api/register', async (req, res) => {
  const { name, email, password, role, location } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      location
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
