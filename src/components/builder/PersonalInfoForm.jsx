import React from "react";
import { useResume } from "../../contexts/ResumeContext";
import "./PersonalInfoForm.css";

const PersonalInfoForm = () => {
  const { state, dispatch } = useResume();

  const handleChange = (field, value) => {
    dispatch({ type: "UPDATE_PERSONAL_INFO", payload: { [field]: value } });
  };

  return (
    <div className="personal-info-form">
      <div className="form-group">
        <label className="required">Full Name *</label>
        <input
          type="text"
          value={state.personalInfo.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          placeholder="Enter your full name"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Job Title (Optional)</label>
        <input
          type="text"
          value={state.personalInfo.jobTitle}
          onChange={(e) => handleChange("jobTitle", e.target.value)}
          placeholder="e.g., Front End Developer"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label className="required">Email *</label>
        <input
          type="email"
          value={state.personalInfo.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="your.email@example.com"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          value={state.personalInfo.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="+1 234 567 890"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          value={state.personalInfo.location}
          onChange={(e) => handleChange("location", e.target.value)}
          placeholder="City, Country"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>LinkedIn</label>
        <input
          type="url"
          value={state.personalInfo.linkedin}
          onChange={(e) => handleChange("linkedin", e.target.value)}
          placeholder="linkedin.com/in/yourname"
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Portfolio</label>
        <input
          type="url"
          value={state.personalInfo.portfolio}
          onChange={(e) => handleChange("portfolio", e.target.value)}
          placeholder="yourportfolio.com"
          className="form-input"
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
