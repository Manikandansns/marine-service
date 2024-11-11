import { useState, useEffect } from 'react';
import axios from 'axios';
import './ServicePage.css';
import CustomSeparator from '../../components/breadcrumb/BreadCrumb';
import ServiceBanner from './servicebanner/ServiceBanner';

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
    <ServiceBanner/>
    <div className="servicepage-heading-wrapper">
    <h1 className='servicepage-heading'>Services</h1>
    <p className='servicepage-para'>Explore Our Professional Services</p>
    </div>
      {services.length === 0 ? (
        <p>No services available</p>
      ) : (
        services.map((service) => (
          
          <div key={service._id} className="servicepage-container">

            <div className="servicepage-main-container-wrapper">
              
              <div className="servicepage-main-container">
              <div className="servicepage-main-container-cardimage">
                {service.image && (
                  <img
                    className="service-image"
                    src={`http://localhost:5000/${service.image}`}
                    alt={service.title}
                  />
                )}
              </div>
              <div className="servicepage-main-container-points">
              <h2 className='servicepage-card-heading'>{service.title}</h2>  
              <div className="servicepage-points-wrapper">
              {Array.isArray(service.points) ? (
                <ul className="servicepage-points-list">
                  {service.points.map((point, index) => (
                    <li  className="servicepage-list" key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p>{service.points}</p>
              )}
              </div>
              </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ServicePage;
