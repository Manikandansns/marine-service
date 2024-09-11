const Gallery = require('../models/Gallery');

// Get all gallery items
exports.getAllGalleryItems = async (req, res) => {
  try {
    const galleryItems = await Gallery.find();
    res.json(galleryItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new gallery item
exports.createGalleryItem = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : '';
    const galleryItem = new Gallery({ title, description, image });
    await galleryItem.save();
    res.status(201).json(galleryItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a gallery item
exports.updateGalleryItem = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : req.body.image;
    const updatedGalleryItem = await Gallery.findByIdAndUpdate(
      req.params.id,
      { title, description, image, updatedAt: Date.now() },
      { new: true }
    );
    res.json(updatedGalleryItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete gallery item
exports.deleteGalleryItem = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Gallery item deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGalleryById = async (req, res) => {
  try {
      const galleryItem = await Gallery.findById(req.params.id);
      if (!galleryItem) {
          return res.status(404).json({ message: 'Gallery item not found' });
      }
      res.json(galleryItem);
  } catch (error) {
      res.status(500).json({ message: 'Server error' });
  }
};
