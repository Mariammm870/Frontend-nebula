import React, { useState } from "react";
import { useResume } from "../../contexts/ResumeContext";
import "./ExperienceForm.css";

const ExperienceForm = () => {
  const { state, dispatch } = useResume();
  const { workExperience } = state.sections;
  const [newExperience, setNewExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
  });

  const addExperience = () => {
    if (newExperience.company.trim() && newExperience.position.trim()) {
      addSectionItem("workExperience", { ...newExperience });
      setNewExperience({
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
      });
    }
  };

  const removeExperience = (index) => {
    removeSectionItem("workExperience", index);
  };

  const updateExperience = (index, field, value) => {
    const updatedItem = { ...workExperience.items[index], [field]: value };
    updateSectionItem("workExperience", index, updatedItem);
  };

  const handleCurrentlyWorkingChange = (index, checked) => {
    const updatedItem = {
      ...workExperience.items[index],
      currentlyWorking: checked,
      endDate: checked ? "" : workExperience.items[index].endDate,
    };
    updateSectionItem("workExperience", index, updatedItem);
  };
  return (
    <div className="work-experience-form">
      {workExperience.items.length === 0 ? (
        <div className="empty-state">
          <p>No work experience added yet</p>
          <div className="add-first-experience">
            <h4>Add Your First Work Experience</h4>
            <div className="experience-form">
              <div className="form-group">
                <label className="required">Company *</label>
                <input
                  type="text"
                  value={newExperience.company}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      company: e.target.value,
                    })
                  }
                  placeholder="Company Name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="required">Position *</label>
                <input
                  type="text"
                  value={newExperience.position}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      position: e.target.value,
                    })
                  }
                  placeholder="Job Title"
                  className="form-input"
                />
              </div>

              <div className="date-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    type="text"
                    value={newExperience.startDate}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        startDate: e.target.value,
                      })
                    }
                    placeholder="MM/YYYY"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="text"
                    value={newExperience.endDate}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        endDate: e.target.value,
                      })
                    }
                    placeholder="MM/YYYY"
                    className="form-input"
                    disabled={newExperience.currentlyWorking}
                  />
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={newExperience.currentlyWorking}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        currentlyWorking: e.target.checked,
                        endDate: "",
                      })
                    }
                    className="checkbox-input"
                  />
                  <span className="checkmark"></span>
                  Currently working here
                </label>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newExperience.description}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      description: e.target.value,
                    })
                  }
                  placeholder="Describe your responsibilities and achievements..."
                  rows="4"
                  className="form-textarea"
                />
              </div>

              <button onClick={addExperience} className="btn-add-experience">
                + Add Experience
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="experience-list">
            {workExperience.items.map((experience, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <h4>Experience Entry</h4>
                  <button
                    className="remove-btn"
                    onClick={() => removeExperience(index)}
                  >
                    ×
                  </button>
                </div>

                <div className="form-group">
                  <label className="required">Company *</label>
                  <input
                    type="text"
                    value={experience.company}
                    onChange={(e) =>
                      updateExperience(index, "company", e.target.value)
                    }
                    placeholder="Company Name"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="required">Position *</label>
                  <input
                    type="text"
                    value={experience.position}
                    onChange={(e) =>
                      updateExperience(index, "position", e.target.value)
                    }
                    placeholder="Job Title"
                    className="form-input"
                  />
                </div>

                <div className="date-row">
                  <div className="form-group">
                    <label>Start Date</label>
                    <input
                      type="text"
                      value={experience.startDate}
                      onChange={(e) =>
                        updateExperience(index, "startDate", e.target.value)
                      }
                      placeholder="MM/YYYY"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>End Date</label>
                    <input
                      type="text"
                      value={experience.endDate}
                      onChange={(e) =>
                        updateExperience(index, "endDate", e.target.value)
                      }
                      placeholder="MM/YYYY"
                      className="form-input"
                      disabled={experience.currentlyWorking}
                    />
                  </div>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={experience.currentlyWorking}
                      onChange={(e) =>
                        handleCurrentlyWorkingChange(index, e.target.checked)
                      }
                      className="checkbox-input"
                    />
                    <span className="checkmark"></span>
                    Currently working here
                  </label>
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={experience.description}
                    onChange={(e) =>
                      updateExperience(index, "description", e.target.value)
                    }
                    placeholder="Describe your responsibilities and achievements..."
                    rows="4"
                    className="form-textarea"
                  />
                </div>

                <div className="experience-divider"></div>
              </div>
            ))}
          </div>

          {/* Add New Experience Form */}
          <div className="add-new-experience">
            <h4>Add Another Experience</h4>
            <div className="experience-form">
              <div className="form-group">
                <label className="required">Company *</label>
                <input
                  type="text"
                  value={newExperience.company}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      company: e.target.value,
                    })
                  }
                  placeholder="Company Name"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="required">Position *</label>
                <input
                  type="text"
                  value={newExperience.position}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      position: e.target.value,
                    })
                  }
                  placeholder="Job Title"
                  className="form-input"
                />
              </div>

              <div className="date-row">
                <div className="form-group">
                  <label>Start Date</label>
                  <input
                    type="text"
                    value={newExperience.startDate}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        startDate: e.target.value,
                      })
                    }
                    placeholder="MM/YYYY"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>End Date</label>
                  <input
                    type="text"
                    value={newExperience.endDate}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        endDate: e.target.value,
                      })
                    }
                    placeholder="MM/YYYY"
                    className="form-input"
                    disabled={newExperience.currentlyWorking}
                  />
                </div>
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={newExperience.currentlyWorking}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        currentlyWorking: e.target.checked,
                        endDate: "",
                      })
                    }
                    className="checkbox-input"
                  />
                  <span className="checkmark"></span>
                  Currently working here
                </label>
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newExperience.description}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      description: e.target.value,
                    })
                  }
                  placeholder="Describe your responsibilities and achievements..."
                  rows="4"
                  className="form-textarea"
                />
              </div>

              <button onClick={addExperience} className="btn-add-experience">
                + Add Experience
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceForm;
