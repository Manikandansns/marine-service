import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const res = await axios.get('http://localhost:5000/api/services', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    setServices(res.data);
  };

  const deleteService = async (id) => {
    await axios.delete(`http://localhost:5000/api/services/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    fetchServices();
  };

  return (
    <div>
      <h3>Services</h3>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service._id}>
              <td>{service.title}</td>
              <td>{service.description}</td>
              <td>
                <button onClick={() => navigate(`/admin/services/edit/${service._id}`)}>Edit</button>
                <button onClick={() => deleteService(service._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceList;
