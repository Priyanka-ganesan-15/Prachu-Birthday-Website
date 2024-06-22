import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ImagePopup.css'; // Ensure CSS is imported

const ImagePopup = ({ events }) => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) return <div>Event not found.</div>;

  return (
    <div className="image-popup">
      <div className="popup-content">
        <Link to="/timeline">Close</Link>
        <img src={require(`../assets/${event.image}`).default} alt={event.date} />
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default ImagePopup;
