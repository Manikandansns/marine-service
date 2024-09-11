const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true }, // Store the image path
  updatedAt: { type: Date, default: Date.now },
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
