import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ServiceCard from '../../components/ServiceCard';

const HomePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const res = await axios.get('http://localhost:5000/api/services');
      setServices(res.data);
    };

    fetchServices();
  }, []);

  return (
    <div className="home-page">
      <h1>Marine Services</h1>
      <div className="service-grid">
        {services.map(service => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
