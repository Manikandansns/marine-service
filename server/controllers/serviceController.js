// controllers/serviceController.js
const Service = require('../models/Service');
const path = require('path');

// Create a new service with image upload
exports.createService = async (req, res) => {
    try {
      const { title, points } = req.body;
      const image = req.file ? req.file.path : '';
  
      const newService = new Service({ image, title, points });
      await newService.save();
      res.status(201).json(newService);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a service by ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a service with a new image
exports.updateService = async (req, res) => {
    try {
      const { title, points } = req.body;
      const updatedData = { title, points };
  
      if (req.file) {
        updatedData.image = req.file.path;
      }
  
      const updatedService = await Service.findByIdAndUpdate(req.params.id, updatedData, { new: true });
      if (!updatedService) return res.status(404).json({ message: 'Service not found' });
      res.status(200).json(updatedService);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Delete a service
exports.deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) return res.status(404).json({ message: 'Service not found' });
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
