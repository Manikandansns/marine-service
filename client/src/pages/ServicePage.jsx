// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import '../App.css'

// const ServicePage = () => {
//   const [service, setService] = useState(null);
//   const [subServices, setSubServices] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchService = async () => {
//       const res = await axios.get(`http://localhost:5000/api/services/${id}`);
//       setService(res.data);
//       setSubServices(res.data.subServices);
//     };

//     fetchService();
//   }, [id]);

//   return (
//     <div className="service-page">
//       {service && (
//         <>
//           <h1>{service.title}</h1>
//           <p>{service.description}</p>
//           <img src={service.image} alt={service.title} width="200" />

//           <div className="sub-services">
//             <h2>Sub-Services</h2>
//             <ul>
//               {subServices.map((sub, idx) => (
//                 <li key={idx}>
//                   <h3>{sub.name}</h3>
//                   <p>{sub.description}</p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default ServicePage;
