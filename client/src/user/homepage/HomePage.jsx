import ServiceSection from './servicesection/ServiceSection';
import Navbar from './../../components/navbar/Navbar';
import HeroSection from './herosection/HeroSection';
import AboutSection from './aboutsection/AboutSection';
import Footer from '../../components/footer/Footer';
import Testimonials from './testimonial/testimonial';

const HomePage = () => {
 

  return (
    <div className="home-page">
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <ServiceSection/>
    <Testimonials/>
    <Footer/>
    
    </div>
  );
};

export default HomePage;
