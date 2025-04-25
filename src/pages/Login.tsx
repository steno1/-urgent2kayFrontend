import React from "react";

// Inline styles for the login page
const Login = () => {
  
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f3f4f6', 
  };

  
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  };

  // Heading style with mobile responsiveness
  const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#4B5563', 
  };

  
  const subheadingStyle: React.CSSProperties = {
    color: '#6B7280', 
    marginBottom: '20px',
  };

  // Mobile responsiveness for the heading
  const mobileHeadingStyle: React.CSSProperties = {
    fontSize: '1.5rem', 
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={{ ...headingStyle, ...mobileHeadingStyle }}>Login</h1>
        <p style={subheadingStyle}>Login functionality coming soon.</p>
      </div>
    </div>
  );
};

export default Login;
