import React from "react";
import { useNavigate } from "react-router-dom";
import "./Templatespage.css"; // We'll create this

const TemplatesPage = () => {
  const navigate = useNavigate();

  const handleUseTemplate = () => {
    navigate("/builder/classic");
  };

  return (
    <div className="templates-page">
      <div className="templates-container">
        <div className="templates-header">
          <h1>Choose Your Template</h1>
          <p>
            Select a professional template to start building your stellar resume
          </p>
        </div>

        <div className="template-card">
          <div className="template-preview">
            <div className="template-preview-placeholder">
              <h3>Classic Template Preview</h3>
              <p>Clean, professional design</p>
            </div>
          </div>

          <div className="template-info">
            <h2>Classic Template</h2>
            <p>
              Timeless black & white design, ideal for corporate and academic
              positions.
            </p>

            <div className="template-features">
              <div className="feature">
                <span className="checkmark">✓</span>
                One-column layout
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                Serif fonts
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                Print-friendly
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                Traditional style
              </div>
            </div>

            <button className="use-template-btn" onClick={handleUseTemplate}>
              Use Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
