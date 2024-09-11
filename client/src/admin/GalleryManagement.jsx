import React, { useState } from 'react';
import GalleryForm from '../components/GalleryForm';
import GalleryList from '../components/GalleryList';
import '../App.css';

const GalleryManagement = () => {
  const [refresh, setRefresh] = useState(false);

  const fetchGalleryItems = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h2>Manage Gallery</h2>
      <GalleryForm fetchGalleryItems={fetchGalleryItems} />
      <GalleryList key={refresh} />
    </div>
  );
};

export default GalleryManagement;
