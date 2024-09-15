// src/pages/SubServicePage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the URL parameters
import axios from 'axios'; // Import axios for API calls
import './SubServicePage.css'; // Ensure the path is correct

const SubServicePage = () => {
  const { serviceId } = useParams(); // Get the serviceId from URL parameters
  const [subServices, setSubServices] = useState([]); // State to store sub-services data
  const [serviceTitle, setServiceTitle] = useState(''); // State to store the service title

  // Fetch sub-services and service title when the component mounts
  useEffect(() => {
    const fetchSubServices = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/services/${serviceId}/subservices`); // Fetch sub-services
        setSubServices(response.data); // Update sub-services state

        // Fetch the service title
        const serviceResponse = await axios.get(`http://localhost:5000/api/services/${serviceId}`);
        setServiceTitle(serviceResponse.data.title);
      } catch (error) {
        console.error('Error fetching sub-services:', error); // Handle any errors
      }
    };

    fetchSubServices(); // Call the function to fetch sub-services
  }, [serviceId]); // Dependency array includes serviceId

  return (
    <div className="sub-service-page">
      <h2>Sub-Services for {serviceTitle}</h2>
      <div className="sub-service-cards-container">
      <div className="sub-service-cards">
        {subServices.length > 0 ? (
          subServices.map((subService) => (
            <div key={subService._id} className="sub-service-card">
              <div className="sub-service-image-container">
                {subService.image && (
                  <img src={`http://localhost:5000${subService.image}`} alt={subService.name} className="sub-service-image" />
                )}
              </div>
              <div className="sub-service-content">
                <h2 className='sub-service-content-title'>{subService.name}</h2>
                <p className='sub-service-content-description'>{subService.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No sub-services available.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default SubServicePage;
