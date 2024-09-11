const mongoose = require('mongoose');

const subServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true }, // Image for sub-service
});

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }, // Store the image path
  subServices: [subServiceSchema], // Array of sub-services
  updatedAt: { type: Date, default: Date.now },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
