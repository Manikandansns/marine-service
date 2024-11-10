import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../HomePage.css';
import SkeletonCard from '../../../components/skeletoncard/SkeletonCard'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ServiceSection = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New state for loading
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetch
      }
    };

    fetchServices();
  }, []);

  const handleApplyNow = () => {
    navigate('/service');
  };

  return (
    <div className="service-section"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h2>Our Services</h2>
      <div className="service-cards">
        {isLoading ? (
          // Render skeleton cards while loading
          Array(5).fill().map((_, index) => <SkeletonCard key={index} />)
        ) : (
          services.map((service) => (
            <div key={service._id} className="service-card">
              <div className="service-img-card">
                <img src={`http://localhost:5000/${service.image}`} alt={service.title} className="service-image" />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                {Array.isArray(service.points) ? (
                  <ul className={`overflow-dots ${isExpanded ? 'expanded' : ''}`}>
                    {service.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{service.points}</p>
                )}
                <button
                  onClick={() => handleApplyNow()}
                  className="apply-button"
                >
                  See More
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceSection;
