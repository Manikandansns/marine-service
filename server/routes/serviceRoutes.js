// routes/serviceRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// Configure multer for storing uploaded files in 'uploads' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

// Routes with image upload
router.post('/services', upload.single('image'), serviceController.createService);
router.put('/services/:id', upload.single('image'), serviceController.updateService);
router.get('/services', serviceController.getAllServices);
router.get('/services/:id', serviceController.getServiceById);
router.delete('/services/:id', serviceController.deleteService);

module.exports = router;
