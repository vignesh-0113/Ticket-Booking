import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../auth/Authenticate';
import './Navbar.css';
import { FaUserAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  const { user, logoutUpdate } = useAuth(); 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    logoutUpdate();
    setDropdownOpen(false); 
  };

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <nav>
      <h1>Events Ticket Booking</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />} 
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><NavLink to="/" className="link">Home</NavLink></li>
        <li><NavLink to="/eventinfo" className="link">Events Info</NavLink></li>
        {user ? (
          <li>
            <button onClick={toggleDropdown} className="username">
              {user.username} <FaUserAlt /> <RiArrowDropDownLine />
            </button>
            {dropdownOpen && (
              <div className="dropdown">
                <button className='logout' onClick={handleLogout}>Logout</button>
              </div>
            )}
          </li>
        ) : (
          <li><NavLink to="/login" className="link">Login</NavLink></li>
        )}
      </ul>
    </nav>
  );
}
