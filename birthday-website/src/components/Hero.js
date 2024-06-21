import React from 'react';
import heroImage from '../assets/hero-image.jpg'; // Ensure this path is correct
import './Hero.css'; // Ensure you have this CSS file in the same directory

const Hero = () => (
  <div className="hero-section">
    <img src={heroImage} alt="Hero" className="hero-image" />
  </div>
);

export default Hero;
