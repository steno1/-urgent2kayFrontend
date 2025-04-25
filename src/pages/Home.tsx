import React from "react";
import './home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1 className="home-heading">Welcome to URGENT 2KAY</h1>
        <p className="home-subheading">
          The seamless way to manage your bills, payments, and requests.
        </p>
        <div className="cta-buttons">
          <button className="cta-button">Get Started</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
