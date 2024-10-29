import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map(event => (
        <li key={event.id}>
          <Link to={`/events/${event.id}`}>
            {event.name} - {event.date}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
