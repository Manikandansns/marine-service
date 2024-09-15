import React from 'react';
import { Avatar } from '@mui/material'; // Import Avatar component from MUI
import '../HomePage.css'

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Example Corp",
    text: "This company provided outstanding service and support. The team was professional and exceeded our expectations.",
    avatar: "https://i.pravatar.cc/150?img=1", // Placeholder avatar URL
  },
  {
    name: "Jane Smith",
    role: "Project Manager, XYZ Ltd.",
    text: "I was impressed with their expertise and commitment to quality. They delivered on time and on budget.",
    avatar: "https://i.pravatar.cc/150?img=2", // Placeholder avatar URL
  },
  {
    name: "Michael Brown",
    role: "Engineer, Tech Solutions",
    text: "Their attention to detail and problem-solving skills were top-notch. Highly recommend their services.",
    avatar: "https://i.pravatar.cc/150?img=3", // Placeholder avatar URL
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <Avatar src={testimonial.avatar} alt="avatar" className="testimonial-avatar" />
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
