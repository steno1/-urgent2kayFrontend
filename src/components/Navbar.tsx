import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        URGENT <span>2KAY</span>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/create-request" className="nav-link">Create Request</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
