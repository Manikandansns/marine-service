import { useState, useEffect } from 'react';
import axios from 'axios';
import './ServicePage.css';

const ServicePage = () => {
  // State to store services data
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch services from the backend on component mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        setServices(response.data); // Set the services data
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch services', err);
        setLoading(false);
      }
    };

    fetchServices(); // Call the function to fetch services
  }, []);

  // Handle loading state
  if (loading) {
    return <p>Loading services...</p>;
  }

  // Handle error state
  if (error) {
    return <p>{error}</p>;
  }

  // Render services and sub-services
  return (
    <div className="servicepage-wrapper">
      <h1>Services</h1>
      {services.length === 0 ? (
        <p>No services available</p>
      ) : (
        services.map((service) => (
          <div key={service._id} className="servicepage-container">
          <div className='servicepage-main-container'>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="servicepage-main-container-cardimage">
            {service.image && (
              <img
                className="service-image"
                src={`http://localhost:5000${service.image}`}
                alt={service.title}
              />
            )}
            </div>
            </div>

            <div className='servicepage-sub-container'>
            <h3 className="sub-services-heading">Sub-Services</h3>
            {service.subServices.length === 0 ? (
              <p>No sub-services available</p>
            ) : (
              <ul className="sub-service-list">
                {service.subServices.map((subService) => (
                  <li key={subService._id} className="sub-service-item">
                    
                    <div className="servicepage-sub-container-cardimage">
                    {subService.image && (
                      <img
                        className="sub-service-image"
                        src={`http://localhost:5000${subService.image}`}
                        alt={subService.name}
                      />
                    )}
                    </div>
                    <div className="servicepage-sub-container-cardcontainer">
                    <h4>{subService.name}</h4>
                    <p>{subService.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ServicePage;
