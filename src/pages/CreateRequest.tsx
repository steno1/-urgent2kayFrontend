import React from "react";

// Inline styles for the CreateRequest page
const CreateRequest = () => {
  
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    backgroundColor: '#fafafa', 
  };

  
  const headingStyle: React.CSSProperties = {
    fontSize: '2rem', 
    fontWeight: '600',
    color: '#4B5563', 
    marginBottom: '20px',
  };

  // Mobile responsiveness for the heading
  const mobileHeadingStyle: React.CSSProperties = {
    fontSize: '1.5rem', 
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={{ ...headingStyle, ...mobileHeadingStyle }}>Create Request Page</h1>
      </div>
    </div>
  );
};

export default CreateRequest;
