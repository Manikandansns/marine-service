const express = require('express');
const multer = require('multer');
const { getAllGalleryItems, createGalleryItem, updateGalleryItem, deleteGalleryItem, getGalleryById } = require('../controllers/galleryController');

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

router.get('/', getAllGalleryItems);
router.post('/', upload.single('image'), createGalleryItem);
router.put('/:id', upload.single('image'), updateGalleryItem);
router.delete('/:id', deleteGalleryItem);
router.get('/:id', getGalleryById)

module.exports = router;
