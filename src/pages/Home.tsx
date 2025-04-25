import React from "react";

const Home = () => {
  // Inline styles for the home page
  const homePageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column' as 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    padding: '20px',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#4B5563', 
  };

  // Mobile responsiveness for heading
  const mobileHeadingStyle: React.CSSProperties = {
    fontSize: '1.5rem', 
  };

  return (
    <div style={homePageStyle}>
      <h1 style={{ ...headingStyle, ...mobileHeadingStyle }}>Welcome to URGENT 2KAY</h1>
    </div>
  );
};

export default Home;
