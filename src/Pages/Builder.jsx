import React, { useState } from "react";
import { useResume } from "../contexts/ResumeContext";
import BuilderHeader from "../components/builder/BuilderHeader";
import SectionWrapper from "../components/builder/SectionWrapper";
import PersonalInfoForm from "../components/builder/PersonalInfoForm";
import ProfessionalSummaryForm from "../components/builder/ProfessionalSummaryForm";
import EducationForm from "../components/builder/EducationForm";
import SkillsForm from "../components/builder/SkillsForm";
import DynamicTemplateRenderer from "../templates/DynamicTemplateRenderer";
import ProjectsForm from "../components/builder/ProjectsForm";
import ExperienceForm from "../components/builder/ExperienceForm";
import "./Builder.css";

const Builder = () => {
  const { state, dispatch } = useResume();
  const [showAddSection, setShowAddSection] = useState(false);

  const toggleSection = (section) => {
    dispatch({ type: "TOGGLE_SECTION", payload: section });
  };

  // If state.sections is undefined, show loading or error state
  if (!state || !state.sections) {
    return <div className="builder-loading">Loading...</div>;
  }

  return (
    <div className="builder-container">
      <BuilderHeader />

      <div className="builder-content">
        {/* Left Panel - Form */}
        <div className="form-panel">
          {/* Personal Information - Always Visible */}
          <div className="section-wrapper personal-info-always-visible">
            <div className="section-header">
              <h3>Personal Information</h3>
            </div>
            <div className="section-content">
              <PersonalInfoForm />
            </div>
          </div>

          {/* Add Section Button */}
          <div className="add-section">
            <button
              className="btn-add-section"
              onClick={() => setShowAddSection(!showAddSection)}
            >
              + Add a Section
            </button>

            {showAddSection && (
              <div className="section-options">
                <p>Choose which section to add to your resume</p>
                {Object.entries(state.sections).map(([key, section]) => (
                  <label key={key} className="section-option">
                    <input
                      type="checkbox"
                      checked={section.enabled}
                      onChange={() => toggleSection(key)}
                    />
                    <span>
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Dynamic Sections */}
          {Object.entries(state.sections).map(([key, section]) => {
            if (section.enabled) {
              let SectionComponent;
              switch (key) {
                case "professionalSummary":
                  SectionComponent = ProfessionalSummaryForm;
                  break;
                case "workExperience":
                  SectionComponent = ExperienceForm;
                  break;
                case "education":
                  SectionComponent = EducationForm;
                  break;
                case "projects":
                  SectionComponent = ProjectsForm;
                  break;
                case "skills":
                  SectionComponent = SkillsForm;
                  break;
                default:
                  SectionComponent = () => (
                    <div>{key} Form - To be implemented</div>
                  );
              }

              return (
                <SectionWrapper
                  key={key}
                  title={key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  isEnabled={section.enabled}
                  onToggle={() => toggleSection(key)}
                >
                  <SectionComponent />
                </SectionWrapper>
              );
            }
            return null;
          })}
        </div>

        {/* Right Panel - Preview */}
        <div className="preview-panel">
          <DynamicTemplateRenderer />
        </div>
      </div>
    </div>
  );
};

export default Builder;
