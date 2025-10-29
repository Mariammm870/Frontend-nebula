import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <section className="home-section">
      <div className="home-container">
        <h1 className="home-title">
          Create a Stellar Resume
          <br />
          That Shines
        </h1>
        <p className="home-subtitle">
          Build your professional resume with AI-powered tools and stunning
          templates. Stand out in the job universe with Nebula AI CV Builder.
        </p>
        <div className="home-buttons">
          <button className="btn-primary">Get Started Free</button>
          <button className="btn-secondary">View Templates</button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
