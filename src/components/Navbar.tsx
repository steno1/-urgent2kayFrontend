import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navbarStyle: React.CSSProperties = {
    backgroundColor: 'white',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  };

  const brandStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1D4ED8',
    flex: '1 1 100%',
    marginBottom: '8px',
  };

  const brandSpanStyle: React.CSSProperties = {
    color: '#000',
  };

  const navLinksStyle: React.CSSProperties = {
    display: 'flex',
    gap: '16px',
    fontSize: '1rem',
    fontWeight: '500',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  };

  const linkStyle: React.CSSProperties = {
    color: hoveredLink === 'Home' ? '#3B82F6' : '#000',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    padding: '8px 16px',
    fontSize: '1.2rem', 
  };

  const linkHoverStyle: React.CSSProperties = {
    color: '#3B82F6',
  };

  return (
    <nav style={navbarStyle}>
      <div style={brandStyle}>
        URGENT <span style={brandSpanStyle}>2KAY</span>
      </div>
      <div style={navLinksStyle}>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={() => setHoveredLink('Home')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Home
        </Link>
        <Link
          to="/login"
          style={linkStyle}
          onMouseEnter={() => setHoveredLink('Login')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Login
        </Link>
        <Link
          to="/create-request"
          style={linkStyle}
          onMouseEnter={() => setHoveredLink('CreateRequest')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Create Request
        </Link>
        <Link
          to="/dashboard"
          style={linkStyle}
          onMouseEnter={() => setHoveredLink('Dashboard')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
