// models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  points: {
    type: [String],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
