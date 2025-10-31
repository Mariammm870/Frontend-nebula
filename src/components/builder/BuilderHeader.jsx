import React from "react";
import "./BuilderHeader.css";

const BuilderHeader = () => {
  return (
    <header className="builder-header">
      <div className="header-content">
        <h1>My Professional Resume</h1>
        <div className="header-actions">
          <button className="btn-secondary">Save Draft</button>
          <button className="btn-primary">Download PDF</button>
        </div>
      </div>
    </header>
  );
};

export default BuilderHeader;
