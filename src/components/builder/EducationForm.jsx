import React, { useState } from "react";
import { useResume } from "../../contexts/ResumeContext";
import "./EducationForm.css";

const EducationForm = () => {
  const { updateSectionItem, removeSectionItem, addSectionItem, state } =
    useResume();
  const { education } = state.sections;
  const [newEducation, setNewEducation] = useState({
    degree: "",
    institution: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const addEducation = () => {
    if (newEducation.degree.trim() && newEducation.institution.trim()) {
      addSectionItem("education", { ...newEducation });
      setNewEducation({
        degree: "",
        institution: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    }
  };

  const removeEducation = (index) => {
    removeSectionItem("education", index);
  };

  const updateEducation = (index, field, value) => {
    const updatedItem = { ...education.items[index], [field]: value };
    updateSectionItem("education", index, updatedItem);
  };

  return (
    <div className="education-form">
      {education.items.length === 0 ? (
        <div className="empty-state">
          <p>No education added yet. Click "Add Education" to get started.</p>
          <button className="btn-add-first" onClick={addEducation}>
            Add Education
          </button>
        </div>
      ) : (
        <>
          <div className="education-list">
            {education.items.map((edu, index) => (
              <div key={index} className="education-item">
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  placeholder="Degree"
                />
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                  placeholder="Institution"
                />
                <input
                  type="text"
                  value={edu.location}
                  onChange={(e) =>
                    updateEducation(index, "location", e.target.value)
                  }
                  placeholder="Location"
                />
                <div className="date-row">
                  <input
                    type="text"
                    value={edu.startDate}
                    onChange={(e) =>
                      updateEducation(index, "startDate", e.target.value)
                    }
                    placeholder="Start Date"
                  />
                  <input
                    type="text"
                    value={edu.endDate}
                    onChange={(e) =>
                      updateEducation(index, "endDate", e.target.value)
                    }
                    placeholder="End Date"
                  />
                </div>
                <textarea
                  value={edu.description}
                  onChange={(e) =>
                    updateEducation(index, "description", e.target.value)
                  }
                  placeholder="Description"
                />
                <button
                  className="remove-btn"
                  onClick={() => removeEducation(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="add-education-form">
        <h4>Add New Education</h4>
        <input
          type="text"
          value={newEducation.degree}
          onChange={(e) =>
            setNewEducation({ ...newEducation, degree: e.target.value })
          }
          placeholder="Degree"
        />
        <input
          type="text"
          value={newEducation.institution}
          onChange={(e) =>
            setNewEducation({ ...newEducation, institution: e.target.value })
          }
          placeholder="Institution"
        />
        <input
          type="text"
          value={newEducation.location}
          onChange={(e) =>
            setNewEducation({ ...newEducation, location: e.target.value })
          }
          placeholder="Location"
        />
        <div className="date-row">
          <input
            type="text"
            value={newEducation.startDate}
            onChange={(e) =>
              setNewEducation({ ...newEducation, startDate: e.target.value })
            }
            placeholder="Start Date"
          />
          <input
            type="text"
            value={newEducation.endDate}
            onChange={(e) =>
              setNewEducation({ ...newEducation, endDate: e.target.value })
            }
            placeholder="End Date"
          />
        </div>
        <textarea
          value={newEducation.description}
          onChange={(e) =>
            setNewEducation({ ...newEducation, description: e.target.value })
          }
          placeholder="Description"
        />
        <button onClick={addEducation}>+ Add Education</button>
      </div>
    </div>
  );
};

export default EducationForm;
