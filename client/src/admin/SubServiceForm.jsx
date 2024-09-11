import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SubServiceForm = ({ fetchServices }) => {
  const [subService, setSubService] = useState({
    name: '',
    description: '',
    image: null,
  });

  const navigate = useNavigate();
  const { serviceId, subServiceId } = useParams();

  useEffect(() => {
    if (subServiceId) {
      fetchSubServiceData();
    }
  }, [subServiceId]);

  const fetchSubServiceData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/services/${serviceId}/subservice/${subServiceId}`);
      setSubService({
        name: res.data.name,
        description: res.data.description,
        image: null,
      });
    } catch (error) {
      console.error('Error fetching sub-service data:', error);
    }
  };

  const handleChange = (e) => {
    setSubService({ ...subService, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setSubService({ ...subService, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', subService.name);
    formData.append('description', subService.description);
    if (subService.image) {
      formData.append('image', subService.image);
    }

    try {
      if (subServiceId) {
        await axios.put(`http://localhost:5000/api/services/${serviceId}/subservice/${subServiceId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await axios.post(`http://localhost:5000/api/services/${serviceId}/subservice`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      if (fetchServices) fetchServices(); // Ensure fetchServices is a valid function
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error submitting sub-service:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{subServiceId ? 'Edit Sub-Service' : 'Add Sub-Service'}</h2>
      <input
        type="text"
        name="name"
        placeholder="Sub-Service Name"
        value={subService.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Sub-Service Description"
        value={subService.description}
        onChange={handleChange}
        required
      />
      <input type="file" onChange={handleImageChange} />
      <button type="submit">{subServiceId ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default SubServiceForm;
