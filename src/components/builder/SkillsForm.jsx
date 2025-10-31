import React, { useState } from "react";
import { useResume } from "../../contexts/ResumeContext";
import "./SkillsForm.css";

const SkillsForm = () => {
  const { state, addSectionItem, updateSectionItem, removeSectionItem } =
    useResume();
  const { skills } = state.sections;
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim()) {
      addSectionItem("skills", {
        name: newSkill.trim(),
        level: "Intermediate",
      });
      setNewSkill("");
    }
  };

  const removeSkill = (index) => {
    removeSectionItem("skills", index);
  };

  const updateSkill = (index, field, value) => {
    const updatedItem = { ...skills.items[index], [field]: value };
    updateSectionItem("skills", index, updatedItem);
  };

  return (
    <div className="skills-form">
      {skills.items.length === 0 ? (
        <div className="empty-state">
          <p>No skills added yet</p>
          <div className="add-first-item">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add your first skill"
              onKeyPress={(e) => e.key === "Enter" && addSkill()}
            />
            <button onClick={addSkill}>+ Add Skill</button>
          </div>
        </div>
      ) : (
        <>
          <div className="skills-list">
            {skills.items.map((skill, index) => (
              <div key={index} className="skill-item">
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => updateSkill(index, "name", e.target.value)}
                  placeholder="Skill name"
                />
                <select
                  value={skill.level}
                  onChange={(e) => updateSkill(index, "level", e.target.value)}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
                <button
                  className="remove-btn"
                  onClick={() => removeSkill(index)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          <div className="add-skill">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add another skill"
              onKeyPress={(e) => e.key === "Enter" && addSkill()}
            />
            <button onClick={addSkill}>+ Add</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SkillsForm;
