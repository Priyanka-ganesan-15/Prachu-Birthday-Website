import React, { useState } from 'react';
import './Timeline.css';

const EVENTS = [
  {
    date: '2022-01-01',
    img: 'https://via.placeholder.com/150',
    description: 'Event 1 description goes here.'
  },
  {
    date: '2022-02-01',
    img: 'https://via.placeholder.com/150',
    description: 'Event 2 description goes here.'
  },
  {
    date: '2022-03-01',
    img: 'https://via.placeholder.com/150',
    description: 'Event 3 description goes here.'
  },
  {
    date: '2022-04-01',
    img: 'https://via.placeholder.com/150',
    description: 'Event 4 description goes here.'
  },
  {
    date: '2022-05-01',
    img: 'https://via.placeholder.com/150',
    description: 'Event 5 description goes here.'
  },
  {
    date: '2022-06-01',
    img: 'https://via.placeholder.com/150',
    description: 'Event 6 description goes here.'
  },
  {
    date: '2022-07-01',
    img: 'https://via.placeholder.com/150',
    description: 'Event 7 description goes here.'
  },
  {
    date: '2022-08-01',
    img: 'https://via.placeholder.com/150',
    description: 'Event 8 description goes here.'
  },
];

const Timeline = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      
   
    <div className="timeline-container">
      <div className="timeline">
        {EVENTS.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index === selectedIndex ? 'active' : ''}`}
            onClick={() => setSelectedIndex(index)}
          >
            {event.date}
          </div>
        ))}
      </div>
      <div className="details">
        <img src={EVENTS[selectedIndex].img} alt={`Event ${selectedIndex + 1}`} />
        <p>{EVENTS[selectedIndex].description}</p>
      </div>
    </div>
    </div>
  );
};

export default Timeline;
