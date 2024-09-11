import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState(''); // For displaying existing image if needed
  const { serviceId } = useParams();
  const navigate = useNavigate();

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
      setExistingImage(res.data.image || ''); // Adjust if needed based on API response
    } catch (error) {
      console.error('Error fetching service data:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
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
        <label>Description:</label>
        <textarea
          placeholder="Service Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      {existingImage && (
        <div>
          <img src={`http://localhost:5000${existingImage}`} alt="Existing Service" style={{ width: '100px', height: 'auto' }} />
        </div>
      )}
      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">{serviceId ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default ServiceForm;
