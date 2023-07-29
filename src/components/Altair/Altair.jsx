import React from 'react';
import gifImage from './altair.gif'; // Replace with the path to your GIF file
import './altair.css';

const HeroSection = () => {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${gifImage})` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">ALTAIR</h1>
        <h2 className="hero-subtitle">IEEE Sahrdaya SB</h2>
        <button className="hero-button">View more</button>
      </div>
    </div>
  );
};

export default HeroSection;
