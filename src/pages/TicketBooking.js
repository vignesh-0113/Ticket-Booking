import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './TicketBooking.css'; 



export const TicketBooking = () => {
  const location = useLocation();
  const { eventName, ticketsAvailable, price } = location.state || {};
  const [name, setName] = useState('');
  const [numOfSeats, setNumOfSeats] = useState(1);


  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Successfully booked ${numOfSeats} seat(s) for ${eventName}!`, {
      position: 'top-center',
    });
    setName('');
    setNumOfSeats(1);
    
  };

  const totalPrice = numOfSeats * price;

  return (
    <div className="ticket-booking-container">
      <ToastContainer />
      <h1>Book Tickets for {eventName}</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <label>Event Name:</label>
        <input
          type="text"
          value={eventName}
          readOnly
        />
        <div className='increase'>
        
        <label>No.of seats you need :</label>
        <input
          type="number"
          value={numOfSeats}
          onChange={(e) => setNumOfSeats(e.target.value)}
          min="1"
          max={ticketsAvailable}
          required
        />

        </div>  
        <button type="submit" className='book-button'>Book Tickets</button>
      </form>
    </div>
  );
};
