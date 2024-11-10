import '../HomePage.css';
import marineImage from '../../../assets/marine2.jpg'; 

const About = () => {
  return (
    <section id="about" className="about-section">
     
      <div className="about-container">
      <h2 className="about-title">About Us</h2>
        <div className="about-content-wrapper">
          <div className="about-content">
        
            <p>
              We started our career as shipyard workers in Singapore in 2004. Initially, we were part of the fabrication department in the Shipyard, specializing in piping and steel work. Over time, we developed our skills step by step and were promoted to roles such as Supervisor, Skilled Fitter, and Welder.
            </p>
            <p>
              Our experience extends to anchorage jobs and Riding Crew roles, seawater pipe repairs, ballast pipe work, and all types of piping work. We also handle deck outfitting jobs and hull plate renewal.
            </p>
            <p>
              Our core strengths are teamwork, pre-planning, timely job completion, mutual respect, and continuous skill development.
            </p>
          </div>
          <div className="about-image">
            <img src={marineImage} alt="Marine Ship Service" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
