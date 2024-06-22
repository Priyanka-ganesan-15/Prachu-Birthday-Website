import React from 'react';
import './Timeline.css'; // Ensure CSS is correctly imported
import birthdayPic from '../assets/birthday_pic.jpeg'; // Adjust image paths as necessary
import presentationPic from '../assets/presentation.jpg'; // Adjust image paths as necessary

const Timeline = () => {
  // Define your timeline events with images and descriptions
  const events = [
    { id: 1, date: 'August 7th 2024', image: birthdayPic, description: 'Prasanna turns 26.' },
    { id: 2, date: 'August 8th 2024', image: presentationPic, description: 'SLB Presentation.' },
    // Add more events as needed
  ];

  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      <div className="timeline-items">
        {events.map(event => (
          <div className="timeline-item" key={event.id}>
            <img src={event.image} alt={event.date} className="birthday-pic" />
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-description">{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
