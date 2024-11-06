// components/ServiceList.js
import { useEffect, useState } from 'react';
import { getServices, deleteService } from '../services/api';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const response = await getServices();
    setServices(response.data);
  };

  const handleDelete = async (id) => {
    await deleteService(id);
    fetchServices(); // Refresh list after deletion
  };

  return (
    <div>
      <h1>Service List</h1>
      {services.map((service) => (
        <div key={service._id}>
          <h2>{service.title}</h2>
          <img src={`http://localhost:5000/${service.image}`} alt={service.title} />
          <ul>
            {service.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <button onClick={() => handleDelete(service._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
