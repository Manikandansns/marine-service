const Service = require('../models/Service');

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new service
exports.createService = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';
    const service = new Service({ title, description, image });
    await service.save();
    res.json(service);
    console.log(service);
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a service
exports.updateService = async (req, res) => {
  try {
    console.log(req.body)
    const { title, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { title, description, image, updatedAt: Date.now() },
      { new: true }
    );
    res.json(updatedService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a sub-service
exports.addSubService = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const { name, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';

    // Find the main service by ID
    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    // Push the new sub-service into the subServices array
    service.subServices.push({ name, description, image });

    // Save the updated service document
    await service.save();

    res.json(service); // Respond with the updated service data
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update a sub-service
exports.updateSubService = async (req, res) => {
  try {
    const { serviceId, subServiceId } = req.params;
    console.log(serviceId, subServiceId);
    const { name, description } = req.body;
    console.log(name, description)
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    console.log(image)
    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    const subService = service.subServices.id(subServiceId);
    if (!subService) return res.status(404).json({ message: 'Sub-service not found' });

    subService.name = name;
    subService.description = description;
    subService.image = image;

    await service.save();
    res.json(service);
    console.log(subService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a service
exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Service deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a sub-service
exports.deleteSubService = async (req, res) => {
  try {
    const { serviceId, subServiceId } = req.params;
    const service = await Service.findById(serviceId);
    if (!service) return res.status(404).json({ error: 'Service not found' });

    service.subServices.id(subServiceId).remove();
    await service.save();
    res.status(200).json({ message: 'Sub-service deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a service by ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a sub-service by ID
exports.getSubServiceById = async (req, res) => {
  try {
    const { serviceId, subServiceId } = req.params;
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    const subService = service.subServices.id(subServiceId);
    if (!subService) {
      return res.status(404).json({ message: 'Sub-service not found' });
    }

    res.json(subService);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch sub-services for a specific service
exports.getSubServicesForService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.serviceId);
    if (!service) return res.status(404).json({ message: 'Service not found' });

    res.json(service.subServices); // Return the sub-services of the found service
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};