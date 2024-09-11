import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios for API calls
import '../../../App.css'; // Ensure the path is correct

const ServiceSection = () => {
  const [services, setServices] = useState([]); // State to store services data
  const navigate = useNavigate(); // Use useNavigate hook

  // Fetch services from the backend API when the component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services'); // Make the API request
        setServices(response.data); // Update the services state with the response data
      } catch (error) {
        console.error('Error fetching services:', error); // Handle any errors
      }
    };

    fetchServices(); // Call the function to fetch services
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Function to navigate to a specific service page
  const handleApplyNow = (serviceId) => {
    navigate(`/services/${serviceId}`); // Navigate to the service detail page using serviceId
  };

  return (
    <div className="service-section">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.length > 0 ? ( // Check if services data is available
          services.map((service) => (
            <div key={service._id} className="service-card">
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button
                  onClick={() => handleApplyNow(service._id)} // Use the service ID from the backend
                  className="apply-button"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Loading services...</p> // Display loading message if services are not yet loaded
        )}
      </div>
    </div>
  );
};

export default ServiceSection;
