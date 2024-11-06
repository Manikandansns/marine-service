import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceForm = () => {
  const [title, setTitle] = useState('');
  const [points, setPoints] = useState('');
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState('');
  const { serviceId } = useParams();
  const navigate = useNavigate();

  // Fetch data for editing if serviceId is provided
  useEffect(() => {
    if (serviceId) {
      fetchServiceData();
    }
  }, [serviceId]);

  const fetchServiceData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/services/${serviceId}`);
      const serviceData = res.data;
      setTitle(serviceData.title);
      // Convert points array to newline-separated string
      setPoints(serviceData.points.join('\n'));
      setExistingImage(serviceData.image || '');
    } catch (error) {
      console.error('Error fetching service data:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format points as an array, splitting by line breaks
    const formattedPoints = points.split('\n').filter(point => point.trim() !== '');

    const formData = new FormData();
    formData.append('title', title);
    formattedPoints.forEach((point, index) => formData.append(`points[${index}]`, point));
    if (image) {
      formData.append('image', image);
    }

    try {
      if (serviceId) {
        // Update existing service
        await axios.put(`http://localhost:5000/api/services/${serviceId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        // Add new service
        await axios.post('http://localhost:5000/api/services', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Error submitting service:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{serviceId ? 'Edit Service' : 'Add Service'}</h2>

      <div>
        <label>Title:</label>
        <input
          type="text"
          placeholder="Service Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Points:</label>
        <textarea
          placeholder="Service points"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          required
        />
      </div>

      {existingImage && (
        <div>
          <img src={`http://localhost:5000/${existingImage}`} alt="Existing Service" style={{ width: '100px', height: 'auto' }} />
          <p>Existing Image</p>
        </div>
      )}

      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
        />
      </div>

      <button type="submit">{serviceId ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default ServiceForm;
