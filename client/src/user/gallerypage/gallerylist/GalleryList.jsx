import { useState, useEffect } from 'react';
import axios from 'axios';
import '../GalleryPage.css'; // Assuming you have a separate CSS file for gallery page styling

const GalleryList = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/gallery', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setGalleryItems(res.data);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      }
    };

    fetchGalleryItems();
  }, []);

  return (
    <div className="gallery-container">
      {galleryItems.map((item) => (
        <div className="gallery-item" key={item._id}>
          <div className="gallery-card">
            <div className="gallery-card-front">
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.title}
                className="gallery-image"
              />
            </div>
            <div className="gallery-card-back">
              <p className="gallery-title">{item.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryList;
