import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [services, setServices] = useState([]);
    const [galleryItems, setGalleryItems] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchServices();
        fetchGalleryItems();
    }, []);

    // Fetch services from the API
    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/services');
            setServices(response.data);
        } catch (error) {
            setError('Error fetching services');
        }
    };

    // Fetch gallery items from the API
    const fetchGalleryItems = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/gallery');
            setGalleryItems(response.data);
        } catch (error) {
            setError('Error fetching gallery items');
        }
    };

    // Handle adding a sub-service
    const handleAddSubService = (serviceId) => {
        navigate(`/admin/${serviceId}/add-subservice`);
    };

    // Handle editing a service
    const handleEditService = (serviceId) => {
        navigate(`/admin/services/edit/${serviceId}`);
    };

    // Handle deleting a service
    const handleDeleteService = async (serviceId) => {
        try {
            await axios.delete(`http://localhost:5000/api/services/${serviceId}`);
            fetchServices();
        } catch (error) {
            setError('Error deleting service');
        }
    };

    // Handle editing a sub-service
    const handleEditSubService = (serviceId, subServiceId) => {
        navigate(`/admin/services/${serviceId}/subservice/edit/${subServiceId}`);
    };

    // Handle deleting a sub-service
    const handleDeleteSubService = async (serviceId, subServiceId) => {
        try {
            await axios.delete(`http://localhost:5000/api/services/${serviceId}/subservices/${subServiceId}`);
            fetchServices();
        } catch (error) {
            setError('Error deleting sub-service');
        }
    };

    // Handle editing a gallery item
    const handleEditGalleryItem = (galleryId) => {
        navigate(`/admin/gallery/edit/${galleryId}`);
    };

    // Handle deleting a gallery item
    const handleDeleteGalleryItem = async (galleryId) => {
        try {
            await axios.delete(`http://localhost:5000/api/gallery/${galleryId}`);
            fetchGalleryItems();
        } catch (error) {
            setError('Error deleting gallery item');
        }
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-nav-wrapper">
                <div className="admin-nav-logo">
                    <h1 className='admin-title'>Admin Dashboard</h1>
                </div>
                <div className="admin-nav-btn">
                    <button className='add-btn' onClick={() => navigate('/admin/services/add')}>Add Service</button>
                    <button className='add-btn' onClick={() => navigate('/admin/gallery/add')}>Add Gallery Item</button>
                    <button className='log-out' onClick={() => navigate('/')}>Logout</button>
                </div>
            </div>
            <div className="admin-container">
                {error && <p className="error-message">{error}</p>}

                <h2>Manage Services</h2>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                            <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map(service => (
                                <React.Fragment key={service._id}>
                                    <tr style={{background:'papayawhip'}}>
                                    <td> <img src={`http://localhost:5000${service.image}`} alt={service.title} className="service-image" /></td>                                    
                                        <td>{service.title}</td>
                                        <td>{service.description}</td>
                                        <td>
                                            <button className="table-button add-btn" onClick={() => handleAddSubService(service._id)}>Add Sub-Service</button>
                                            <button className="table-button edit-btn" onClick={() => handleEditService(service._id)}>Edit Service</button>
                                            <button className="table-button delete-btn" onClick={() => handleDeleteService(service._id)}>Delete Service</button>
                                        </td>
                                    </tr>
                                    {service.subServices && service.subServices.length > 0 && service.subServices.map(sub => (
                                        <tr key={sub._id}>

                                       <td><img src={`http://localhost:5000${sub.image}`} alt={service.title} className="service-image" /></td>
                                            <td>{sub.name}</td>
                                            <td>{sub.description}</td>
                                            <td>
                                                <button className="table-button edit-btn" onClick={() => handleEditSubService(service._id, sub._id)}>Edit Sub-Service</button>
                                                <button className="table-button delete-btn" onClick={() => handleDeleteSubService(service._id, sub._id)}>Delete Sub-Service</button>
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2>Manage Gallery</h2>
                <div className="table-container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {galleryItems.map(item => (
                                <tr key={item._id}>
                                    <td>
                                        <img src={`http://localhost:5000${item.image}`} alt={item.title} className="service-image" />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                    <td>
                                        <button className="table-button edit-btn" onClick={() => handleEditGalleryItem(item._id)}>Edit Gallery Item</button>
                                        <button className="table-button delete-btn" onClick={() => handleDeleteGalleryItem(item._id)}>Delete Gallery Item</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
