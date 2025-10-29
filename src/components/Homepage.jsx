import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
  };

  const handleViewTemplates = () => {
    navigate("/templates");
  };

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
          <button className="btn-primary" onClick={handleGetStarted}>
            Get Started Free
          </button>
          <button className="btn-secondary" onClick={handleViewTemplates}>
            View Templates
          </button>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
