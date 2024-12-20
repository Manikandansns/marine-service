import React, { useState, useEffect } from 'react';
import '../HomePage.css';

const images = [
    '/assets/marine (1).jpg',
    '/assets/marine (3).jpg',
    '/assets/marine (2).jpg'
];

const quotes = [
  "Reliable marine services you can count on.",
  "Navigating your fleet to safety and success.",
  "Excellence in every ship we service."
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changes image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Gsun Marine Services</h1>
        <p>{quotes[currentIndex]}</p>
      </div>
      <div className="hero-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`hero-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
