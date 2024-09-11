import React, { useState } from 'react';
import ServiceForm from '../components/ServiceForm';
import ServiceList from '../components/ServiceList';
import '../App.css';

const ServiceManagement = () => {
  const [refresh, setRefresh] = useState(false);

  const fetchServices = () => {
    setRefresh(!refresh);  // trigger re-render to refresh service list
  };

  return (
    <div>
      <h2>Manage Services</h2>
      <ServiceForm fetchServices={fetchServices} />  {/* Form to add/edit service */}
      <ServiceList fetchServices={fetchServices} key={refresh} />  {/* List of services and sub-services */}
    </div>
  );
};

export default ServiceManagement;
