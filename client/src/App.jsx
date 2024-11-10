import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import ServiceForm from './admin/ServiceForm';
import GalleryForm from './admin/GalleryForm';
import HomePage from './user/homepage/HomePage';
import ServicePage from './user/servicepage/ServicePage';
import ContactPage from './user/contactmain/ContactMain';

import FloatingButton from './components/floating/Floating';
import FAQsPage from './components/FAQs/FAQsPage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import GalleryPage from './user/gallerypage/GalleryPage';

function App() {
  return (
    <BrowserRouter>
      <ContentWithConditionalNavbar />
    </BrowserRouter>
  );
}

function ContentWithConditionalNavbar() {
  const location = useLocation();
  
  // Show Navbar only if the current route does not include "/admin"
  const showNavbar = !location.pathname.startsWith('/admin');

  return (
    <>
      {showNavbar && <Navbar />}
      {showNavbar && <FAQsPage />}
      {showNavbar && <FloatingButton />}

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
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/services/:serviceId" element={<ServicePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      {showNavbar && <Footer/>}
    </>
  );
}

export default App;
