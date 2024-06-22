import React, { useEffect, useState } from 'react';
import heroImage from '../assets/hero-image.jpg'; // Ensure this path is correct
import './Hero.css'; // Ensure you have this CSS file in the same directory

const Hero = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const poem = "Close your eyes and \n make your wishes, \n\n I will make them come true \n in a thousand kisses!";

    let currentIndex = 0;
    const poemTimer = setInterval(() => {
      if (currentIndex <= poem.length) {
        setText(poem.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(poemTimer);
        setTimeout(() => {
          animateBirthdayMessage();
        }, 1000); // Delay before starting the birthday message animation
      }
    }, 100); // Adjust the interval for typing speed

    const animateBirthdayMessage = () => {
      const birthdayMessage = "HAPPY 27TH BIRTHDAY PRASANNA!";
      let index = 0;
      const birthdayTimer = setInterval(() => {
        if (index <= birthdayMessage.length) {
          setText(poem + "\n\n" + birthdayMessage.substring(0, index));
          index++;
        } else {
          setText(poem + "\n\n" + `<span class='highlight'>${birthdayMessage}</span>`);
          clearInterval(birthdayTimer);
        }
      }, 100); // Adjust the interval for typing speed
    };

    return () => {
      clearInterval(poemTimer);
    };
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="animated-text">
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
          <span className="cursor"></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
