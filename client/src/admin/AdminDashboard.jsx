import { useState, useEffect } from 'react';
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

    const fetchServices = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/services');
            setServices(res.data);
        } catch (error) {
            setError('Error fetching services', error);
        }
    };

    const fetchGalleryItems = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/gallery');
            setGalleryItems(res.data);
        } catch (error) {
            setError('Error fetching gallery items', error);
        }
    };

    const handleAddSubService = (serviceId) => {
        navigate(`/admin/${serviceId}/add-subservice`);
    };

    const handleEditService = (serviceId) => {
        navigate(`/admin/services/edit/${serviceId}`);
    };

    const handleDeleteService = async (serviceId) => {
        try {
            await axios.delete(`http://localhost:5000/api/services/${serviceId}`);
            fetchServices();
        } catch (error) {
            setError('Error deleting service', error);
        }
    };

    const handleEditSubService = (serviceId, subServiceId) => {
        navigate(`/admin/${serviceId}/subservice/edit/${subServiceId}`);
    };

    const handleDeleteSubService = async (serviceId, subServiceId) => {
        try {
            await axios.delete(`http://localhost:5000/api/services/${serviceId}/subservices/${subServiceId}`);
            fetchServices();
        } catch (error) {
            setError('Error deleting sub-service', error);
        }
    };

    const handleEditGalleryItem = (galleryId) => {
        navigate(`/admin/gallery/edit/${galleryId}`);
    };

    const handleDeleteGalleryItem = async (galleryId) => {
        try {
            await axios.delete(`http://localhost:5000/api/gallery/${galleryId}`);
            fetchGalleryItems();
        } catch (error) {
            setError('Error deleting gallery item', error);
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
                {error && <p>{error}</p>}

                <h2>Manage Services</h2>
                {services.map(service => (
                    <div key={service._id} className="service-item">
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                        <button onClick={() => handleAddSubService(service._id)}>Add Sub-Service</button>
                        <button onClick={() => handleEditService(service._id)}>Edit Service</button>
                        <button onClick={() => handleDeleteService(service._id)}>Delete Service</button>
                        {service.subServices && service.subServices.length > 0 ? (
                            <ul>
                                {service.subServices.map(sub => (
                                    <li key={sub._id}>
                                        <h4>{sub.name}</h4>
                                        <p>{sub.description}</p>
                                        <button onClick={() => handleEditSubService(service._id, sub._id)}>Edit Sub-Service</button>
                                        <button onClick={() => handleDeleteSubService(service._id, sub._id)}>Delete Sub-Service</button>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No sub-services available</p>
                        )}
                    </div>
                ))}

                <h2>Manage Gallery</h2>
                <div className="gallery-section">
                    {galleryItems.map(item => (
                        <div key={item._id} className="gallery-item">
                            <img src={item.image} alt={item.title} width="100" />
                            <h3>{item.title}</h3>
                            <button onClick={() => handleEditGalleryItem(item._id)}>Edit Gallery Item</button>
                            <button onClick={() => handleDeleteGalleryItem(item._id)}>Delete Gallery Item</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
