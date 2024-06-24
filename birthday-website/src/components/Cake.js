// Cake.js

import React from 'react';
import cakeImage from '../assets/Birthday_Cake.png'; // Ensure this path is correct
import './Cake.css'; // Ensure the CSS is imported

const Cake = () => {
  return (
    <div className="Cake">
      <img src={cakeImage} alt="Birthday Cake" className="cake-image" />
      {/* Content of Cake Section */}
    </div>
  );
}

export default Cake;
