import React from 'react';
import '../HomePage.css';
import experience from '../../../assets/features.webp';
import servicing from '../../../assets/servicing.webp';
import team from '../../../assets/team.webp';

const FeatureSection = () => {
  return (
    <div className="experience-wrapper">
      <div className="">
        <div className="s-title-group">
          <div className="s-title">
            <h2>Features</h2>
          </div>
        </div>

        <div className="s-feature-list">
          {/* Feature 1 */}
          <div className="s-feature-item">
            <div className="blob-wrapper">
              <img src={experience} alt="International Experience" />
            </div>
            <div className="s-item-content">
              <h2>International Experience</h2>
              <p>Solid international experience serving clients in countries worldwide.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="s-feature-item">
            <div className="blob-wrapper">
              <img src={servicing} alt="Tailored Solutions" />
            </div>
            <div className="s-item-content">
              <h2>Tailored Solutions</h2>
              <p>Customized engineering services and solutions for a range of industries.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="s-feature-item">
            <div className="blob-wrapper">
              <img src={team} alt="Expert Team" />
            </div>
            <div className="s-item-content">
              <h2>Expert Team</h2>
              <p>Our team brings a combined 90 years of industry experience worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
