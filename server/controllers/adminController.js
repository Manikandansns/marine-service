const Admin = require('../models/Admin');  // Ensure the Admin model is correctly imported
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Admin login
exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;  // Extract username and password from the request body

  try {
    // Find the admin by username
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
