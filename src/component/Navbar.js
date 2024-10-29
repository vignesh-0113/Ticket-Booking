import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/Authenticate';
import './Navbar.css';
import { FaUserAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

export function Navbar() {
  const { user, logoutUpdate } = useAuth(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    logoutUpdate();
    setDropdownOpen(false); 
  };

  return (
    <nav>
      <h1>Events Ticket Booking</h1>
      <ul>
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/eventinfo" className="link">Events Info</Link></li>
        {user ? (
          <li>
            <button><span onClick={toggleDropdown} className="username">{user.username} <FaUserAlt /> </span><RiArrowDropDownLine /></button>
            {dropdownOpen && (
              <div className="dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </li>
        ) : (
          <li><Link to="/login" className="link">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};
