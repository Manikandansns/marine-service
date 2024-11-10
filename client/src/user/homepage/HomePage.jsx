import ServiceSection from './servicesection/ServiceSection';
// import Navbar from './../../components/navbar/Navbar';
import HeroSection from './herosection/HeroSection';
import AboutSection from './aboutsection/AboutSection';
// import Testimonials from './testimonial/testimonial';
import FeatureSection from './experiencesection/ExperienceSection';

const HomePage = () => {
 

  return (
    <div className="home-page">
    {/* <Navbar/> */}
    <HeroSection/>
    <AboutSection/>
    <ServiceSection/>
    <FeatureSection/>
    {/* <Testimonials/> */}
    
    </div>
  );
};

export default HomePage;
