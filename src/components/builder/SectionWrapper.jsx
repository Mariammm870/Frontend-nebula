import React from "react";
import "./SectionWrapper.css";

const SectionWrapper = ({
  title,
  children,
  onToggle,
  isEnabled = false,
  canToggle = true,
}) => {
  return (
    <div className="section-wrapper">
      <div className="section-header">
        <h3>{title}</h3>
        {canToggle && (
          <label className="toggle-section">
            <input type="checkbox" checked={isEnabled} onChange={onToggle} />
            <span className="toggle-slider"></span>
          </label>
        )}
      </div>
      {isEnabled && <div className="section-content">{children}</div>}
    </div>
  );
};

export default SectionWrapper;
