import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import './EventInfo.css';
import { motion } from 'framer-motion';
import Data from './db.json'; 

export function EventInfo() {
  const navigate = useNavigate();

  const handleCardClick = (event) => {
    navigate('/ticket-booking', { state: { event } });
  };

  return (
    <div className='events'>
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Upcoming Events
      </motion.h1>
      <motion.div
        className="product"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
      <div className='cards'>
        {Data.events.map(event => (
          <div className='card' key={event.id} onClick={() => handleCardClick(event)}>
            <h2>{event.name}</h2>
            <p><strong>Description:</strong> {event.description}</p>
            <p><strong>Date & Time:</strong> {event.date} at {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Tickets Available:</strong> {event.ticketsAvailable}</p>
            <p><span>Price: ${event.price}</span></p>
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  );
}
