import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const { serviceId } = useParams();

  useEffect(() => {
    if (serviceId) {
      fetchServiceData();
    }
  }, [serviceId]);

  const fetchServiceData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/services/${serviceId}`);
      setTitle(res.data.title);
      setDescription(res.data.description);
      // Assuming the image URL might be included in the response
    } catch (error) {
      console.error('Error fetching service data:', error);
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
      if (serviceId) {
        await axios.put(`http://localhost:5000/api/services/${serviceId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.post('http://localhost:5000/api/services', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error submitting service:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{serviceId ? 'Edit Service' : 'Add Service'}</h2>
      <input
        type="text"
        placeholder="Service Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Service Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <button type="submit">{serviceId ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default ServiceForm;
