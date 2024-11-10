import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css'

const GalleryForm = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState(''); // For displaying existing image if needed
  const { galleryId } = useParams();
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
      setExistingImage(res.data.image || '');
      console.log(res.data.image);
    } catch (error) {
      console.error('Error fetching gallery item:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    if (image) {
      formData.append('image', image);
    }

    try {
      if (galleryId) {
        await axios.put(`http://localhost:5000/api/gallery/${galleryId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
      } else {
        await axios.post('http://localhost:5000/api/gallery', formData, {
          headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
      }
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error submitting gallery item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="gallery-form">
      <h2>{galleryId ? 'Edit Gallery Item' : 'Add Gallery Item'}</h2>

      <div className="form-section">
        <label>Title:</label>
        <input
          type="text"
          placeholder="Gallery Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      {existingImage && (
        <div className="form-section">
          <img src={`http://localhost:5000${existingImage}`} alt="Existing Gallery" />
        </div>
      )}

      <div className="form-section">
        <label>Image:</label>
        <input type="file" onChange={handleImageChange} />
      </div>

      <button type="submit">{galleryId ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default GalleryForm;
