// components/ResumeBuilder.jsx
import React, { useState } from "react";
import "./ResumeBuilder.css";

const ResumeBuilder = () => {
  const [state, setState] = useState({
    personalInfo: {
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      portfolio: "",
      photo: null,
    },
    summary: "",
    experience: [],
    education: [],
    skills: [],
  });

  const handleInputChange = (section, field, value) => {
    if (section === "personalInfo") {
      setState((prev) => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          [field]: value,
        },
      }));
    } else {
      setState((prev) => ({
        ...prev,
        [section]: value,
      }));
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setState((prev) => ({
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            photo: event.target.result,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addExperience = () => {
    setState((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: Date.now(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }));
  };

  return (
    <div className="resume-builder">
      <div className="builder-header">
        <h1>Build Your Resume</h1>
        <div className="builder-actions">
          <button className="preview-btn">Preview</button>
          <button className="download-btn">Download PDF</button>
          <button className="save-btn">Save</button>
        </div>
      </div>

      <div className="builder-content">
        {/* Personal Information Section */}
        <div className="builder-section">
          <h2>Personal Information</h2>

          <div className="photo-upload">
            <label>Profile Photo (Optional)</label>
            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
            <small>Recommended: 500x500px, JPG or PNG</small>
          </div>

          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              value={state.personalInfo.fullName}
              onChange={(e) =>
                handleInputChange("personalInfo", "fullName", e.target.value)
              }
              placeholder="John Doe"
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              value={state.personalInfo.jobTitle}
              onChange={(e) =>
                handleInputChange("personalInfo", "jobTitle", e.target.value)
              }
              placeholder="e.g., Software Engineer, Marketing Manager"
            />
          </div>

          <div className="contact-grid">
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                value={stateonalInfo.email}
                onChange={(e) =>
                  handleInputChange("personalInfo", "email", e.target.value)
                }
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={statenfo.phone}
                onChange={(e) =>
                  handleInputChange("personalInfo", "phone", e.target.value)
                }
                placeholder="+1 234 567 890"
              />
            </div>

            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={stateonalInfo.location}
                onChange={(e) =>
                  handleInputChange("personalInfo", "location", e.target.value)
                }
                placeholder="New York, NY"
              />
            </div>

            <div className="form-group">
              <label>LinkedIn</label>
              <input
                type="url"
                value={stateonalInfo.linkedin}
                onChange={(e) =>
                  handleInputChange("personalInfo", "linkedin", e.target.value)
                }
                placeholder="linkedin.com/in/username"
              />
            </div>

            <div className="form-group">
              <label>Portfolio</label>
              <input
                type="url"
                value={stateonalInfo.portfolio}
                onChange={(e) =>
                  handleInputChange("personalInfo", "portfolio", e.target.value)
                }
                placeholder="yourportfolio.com"
              />
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="builder-section">
          <h2>Professional Summary</h2>
          <textarea
            value={stateary}
            onChange={(e) => handleInputChange("summary", "", e.target.value)}
            placeholder="Brief overview of your professional background and key achievements..."
            rows="4"
          />
        </div>

        {/* Experience Section */}
        <div className="builder-section">
          <div className="section-header">
            <h2>Work Experience</h2>
            <button onClick={addExperience} className="add-btn">
              + Add Experience
            </button>
          </div>

          {staterience.map((exp, index) => (
            <div key={exp.id} className="experience-item">
              <input
                type="text"
                placeholder="Company Name"
                value={exp.company}
                onChange={(e) => {
                  const newExperience = [...state.experience];
                  newExperience[index].company = e.target.value;
                  setState((prev) => ({
                    ...prev,
                    experience: newExperience,
                  }));
                }}
              />
              <input
                type="text"
                placeholder="Position"
                value={exp.position}
                onChange={(e) => {
                  const newExperience = [...staterience];
                  newExperience[index].position = e.target.value;
                  setstate({
                    ...prev,
                    experience: newExperience,
                  });
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
