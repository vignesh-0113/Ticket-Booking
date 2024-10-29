import React, { useState, useEffect } from 'react';
import './EventInfo.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; 

export function EventInfo() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  
  const categories = [...new Set(data.map(event => event.category)), 'All'];

  
  const filteredEvents = data.filter(event => {
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCardClick = (event) => {
    navigate('/ticket-booking', { state: { eventName: event.name, eventId: event.id } }); 
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
                transition={{ duration: 0.5, delay: 1 }}>
      <div className='filters'>
        <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <input 
          type="text" 
          placeholder="Search events by title..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <div className='card'>
        {filteredEvents.map(event => (
          <div key={event.id} className="event-card" onClick={() => handleCardClick(event)}>
            <h3>{event.name}</h3>
            <p>Description: {event.description}</p>
            <p>Date: {event.date}</p>
            <p>Tickets Available: {event.ticketsAvailable}</p>
            <p><span>Price: ${event.price.toFixed(2)}</span></p>
          </div>
        ))}
      </div>
      </motion.div>
    </div>
    
  );
}
