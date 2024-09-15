import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ServiceForm from './admin/ServiceForm';
import GalleryForm from './admin/GalleryForm';
import SubServiceForm from './admin/SubServiceForm';
import HomePage from './user/homepage/HomePage';
import ServicePage from './user/servicepage/ServicePage';
import AboutPage from './user/aboutpage/AboutPage';
import ContactPage from './user/contactpage/ContactPage';
import GalleryList from './admin/GalleryList';
import SubServicePage from './user/subservicepage/SubServicePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/services/add"
          element={
            <ProtectedRoute>
              <ServiceForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/services/edit/:serviceId"
          element={
            <ProtectedRoute>
              <ServiceForm />
            </ProtectedRoute>
          }
        />
         <Route path="/admin/add-subservice" element={<SubServiceForm />} />
        <Route
          path="/admin/services/:serviceId/subservice/edit/:subServiceId"
          element={
            <ProtectedRoute>
              <SubServiceForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/gallery/add"
          element={
            <ProtectedRoute>
              <GalleryForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/gallery/edit/:galleryId"
          element={
            <ProtectedRoute>
              <GalleryForm />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<HomePage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryList/>}/>
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/admin/:serviceId/add-subservice" element={<SubServiceForm />} />
        <Route path="/admin/:serviceId/subservice/:subServiceId" element={<SubServiceForm />} />

        <Route path="/subservices/:serviceId" element={<SubServicePage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
