import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SubServiceForm = ({ fetchServices }) => {
  const [subService, setSubService] = useState({
    name: '',
    description: '',
    image: null,
  });
  const [existingImage, setExistingImage] = useState(''); // For displaying existing image if needed

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
        image: null, // Reset image to allow upload of new image
      });
      setExistingImage(res.data.image || ''); // Adjust if needed based on API response
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
      fetchServices(); // Refresh the service list
      navigate(`/admin/service/${serviceId}`);
    } catch (error) {
      console.error('Error submitting sub-service:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{subServiceId ? 'Edit Sub-Service' : 'Add Sub-Service'}</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Sub-Service Name"
          value={subService.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          placeholder="Sub-Service Description"
          value={subService.description}
          onChange={handleChange}
          required
        />
      </div>
      {existingImage && (
        <div>
          <img src={`http://localhost:5000${existingImage}`} alt="Existing Sub-Service" style={{ width: '100px', height: 'auto' }} />
        </div>
      )}
      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">{subServiceId ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default SubServiceForm;
