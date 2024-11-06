import React from 'react';
import { Avatar } from '@mui/material'; // Import Avatar component from MUI
import '../HomePage.css'
import image from '../../../../public/assets/sigamani.png'

const testimonials = [
  {
    name: "Sigamani",
    role: "CEO, GSUN",
    text: "This company provided outstanding service and support. The team was professional and exceeded our expectations.",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonials-title">Administrator</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <Avatar src={image} alt="avatar" className="testimonial-avatar" />
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
