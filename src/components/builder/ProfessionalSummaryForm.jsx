import React from "react";
import { useResume } from "../../contexts/ResumeContext";
//import "./ProfessionalSummaryForm.css";

const ProfessionalSummaryForm = () => {
  const { state, updateSectionContent } = useResume();
  const { professionalSummary } = state.sections;

  const handleChange = (content) => {
    updateSectionContent("professionalSummary", { content });
  };

  return (
    <div className="professional-summary-form">
      <textarea
        value={professionalSummary.content}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="A brief overview of your professional background, key skills, and career objectives..."
        rows={6}
      />
    </div>
  );
};

export default ProfessionalSummaryForm;
