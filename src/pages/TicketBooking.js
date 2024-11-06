import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './TicketBooking.css';
import { useNavigate } from 'react-router-dom';


export function TicketBooking() {
  const location = useLocation();
  const { event } = location.state || {};
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState(1);

  
  
  if (!event) {
    return <p>No event data found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} - ${numberOfTickets} tickets for ${event.name}`);
    navigate('/eventinfo');
  };

  const totalPrice = numberOfTickets * event.price;

  return (
    <div className="ticket-booking">
      <h1>Ticket Booking</h1>
      <h2>{event.name}</h2>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Date & Time:</strong> {event.date} at {event.time}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Price per Ticket:</strong> ${event.price}</p>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Your Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Number of Tickets:
            <input 
              type="number" 
              value={numberOfTickets} 
              onChange={(e) => setNumberOfTickets(e.target.value)} 
              min="1" 
              max={event.ticketsAvailable} 
              required 
            />
          </label>
        </div>
        <h3>Total Price: ${totalPrice}</h3>
        <button type="submit" >Book Tickets</button>
      </form>
    </div>
  );
}
