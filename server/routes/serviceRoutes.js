const express = require('express');
const router = express.Router();
const multer = require('multer');
const serviceController = require('../controllers/serviceController');

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
router.get('/', serviceController.getAllServices);
router.post('/', serviceController.createService);
router.get('/:id', serviceController.getServiceById);
router.put('/:id', serviceController.updateService);
router.delete('/:id', serviceController.deleteService);

// Sub-service routes
router.post('/:serviceId/subservice', serviceController.addSubService);
router.put('/:serviceId/subservice/:subServiceId', serviceController.updateSubService);
router.delete('/:serviceId/subservice/:subServiceId', serviceController.deleteSubService);
router.get('/:serviceId/subservice/:subServiceId', serviceController.getSubServiceById);

module.exports = router;
