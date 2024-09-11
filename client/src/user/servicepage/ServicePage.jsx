// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import '../../App.css';

// const ServicePage = () => {
//   const [service, setService] = useState(null);
//   const [subServices, setSubServices] = useState([]);
//   const { serviceId } = useParams();

//   useEffect(() => {
//     const fetchService = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/services/${serviceId}`);
//         setService(response.data);
//         setSubServices(response.data.subServices || []);
//       } catch (error) {
//         console.error('Error fetching service:', error.response ? error.response.data : error.message);
//       }
//     };

//     fetchService();
//   }, [serviceId]);

//   if (!service) return <div>Loading...</div>;

//   return (
//     <div className="service-page">
//       <h1>{service.title}</h1>
//       <p>{service.description}</p>
//       {service.image && <img src={service.image} alt={service.title} width="200" />}
      
//       {/* Sub-Services Section */}
//       <div className="sub-services">
//         <h2>Sub-Services</h2>
//         {subServices.length > 0 ? (
//           <ul>
//             {subServices.map((subService, idx) => (
//               <li key={idx}>
//                 <h3>{subService.name}</h3>
//                 <p>{subService.description}</p>
//                 {subService.image && <img src={subService.image} alt={subService.name} width="100" />}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No sub-services available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ServicePage;
