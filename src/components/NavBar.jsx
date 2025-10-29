import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <span>Nebula AI</span>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/templates" className="nav-link">
            Templates
          </Link>
          <Link to="/signup" className="nav-cta-link">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
