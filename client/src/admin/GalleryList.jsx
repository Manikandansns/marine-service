import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GalleryList = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    const res = await axios.get('http://localhost:5000/api/gallery');
    setGalleryItems(res.data);
  };

  const deleteGalleryItem = async (id) => {
    await axios.delete(`http://localhost:5000/api/gallery/${id}`);
    fetchGalleryItems();
  };

  return (
    <div>
      <h2>Gallery List</h2>
      <ul>
        {galleryItems.map((item) => (
          <li key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img src={`http://localhost:5000${item.image}`} alt={item.title} width="100" />
            <button onClick={() => deleteGalleryItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryList;
