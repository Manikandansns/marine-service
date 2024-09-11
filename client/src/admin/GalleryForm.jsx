import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const GalleryForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const { galleryId } = useParams();  // Get galleryId from URL
  const navigate = useNavigate();

  useEffect(() => {
    if (galleryId) {
      fetchGalleryItem();
    }
  }, [galleryId]);

  const fetchGalleryItem = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/gallery/${galleryId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setTitle(res.data.title);
      setDescription(res.data.description);
    } catch (error) {
      console.error('Error fetching gallery item:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    try {
      if (galleryId) {
        // Update gallery item
        await axios.put(`http://localhost:5000/api/gallery/${galleryId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
      } else {
        // Add new gallery item
        await axios.post('http://localhost:5000/api/gallery', formData, {
          headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
      }
      navigate('/admin/dashboard');  // Redirect to dashboard after submission
    } catch (error) {
      console.error('Error submitting gallery item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{galleryId ? 'Edit Gallery Item' : 'Add Gallery Item'}</h2>
      <input
        type="text"
        placeholder="Gallery Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Gallery Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">{galleryId ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default GalleryForm;
