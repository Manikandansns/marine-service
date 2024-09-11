import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the sub-service page with the serviceId
    navigate(`/services/${service._id}`);
  };

  return (
    <div className="service-card" onClick={handleClick}>
      <h2>{service.title}</h2>
      <p>{service.description}</p>
      <img src={`http://localhost:5000${service.image}`} alt={service.title} className="service-image" />
    </div>
  );
};

export default ServiceCard;
