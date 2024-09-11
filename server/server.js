const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // Loads environment variables
const adminRoutes = require('./routes/adminRoutes');  // Admin routes
const serviceRoutes = require('./routes/serviceRoutes');  // Service routes
const galleryRoutes = require('./routes/galleryRoutes');  // Gallery routes
const path = require('path');  // Built-in module for serving static files

const app = express();

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Serve static files for uploaded content (e.g., images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/admin', adminRoutes);  // Admin routes
app.use('/api/services', serviceRoutes);  // Service routes
app.use('/api/gallery', galleryRoutes);  // Gallery routes

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
