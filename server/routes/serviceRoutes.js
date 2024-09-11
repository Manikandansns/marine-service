const express = require('express');
const multer = require('multer');
const {
  getAllServices, createService, updateService, deleteService,
  addSubService, updateSubService, deleteSubService
} = require('../controllers/serviceController');

const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

// Get all services
router.get('/', getAllServices);

// Get a single service with sub-services
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a service
router.post('/', upload.single('image'), createService);

// Update a service
router.put('/:id', upload.single('image'), updateService);

// Delete a service
router.delete('/:id', deleteService);

// Add a sub-service
router.post('/:serviceId/subservice', upload.single('image'), addSubService);

// Update a sub-service
router.put('/:serviceId/subservice/:subServiceId', upload.single('image'), updateSubService);

// Delete a sub-service
router.delete('/:serviceId/subservice/:subServiceId', deleteSubService);

module.exports = router;
