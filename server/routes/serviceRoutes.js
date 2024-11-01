const express = require('express');
const router = express.Router();
const multer = require('multer');
const {getAllServices, createService, getServiceById, updateService, deleteService, addSubService, getSubServicesForService, updateSubService, deleteSubService, getSubServiceById} = require('../controllers/serviceController');

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

// Define your routes here
router.get('/', getAllServices);
router.post('/', createService);
router.get('/:id', getServiceById);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

// Sub-service routes
router.post('/:serviceId/subservice', addSubService);
router.get('/:serviceId/subservices', getSubServicesForService);
router.put('/:serviceId/subservice/:subServiceId', updateSubService);
router.delete('/:serviceId/subservice/:subServiceId', deleteSubService);
router.get('/:serviceId/subservice/:subServiceId', getSubServiceById);

module.exports = router;
