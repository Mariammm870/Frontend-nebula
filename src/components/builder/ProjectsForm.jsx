import React, { useState } from "react";
import { useResume } from "../../contexts/ResumeContext";
import "./ProjectsForm.css";

const ProjectsForm = () => {
  const { state, addSectionItem, updateSectionItem, removeSectionItem } =
    useResume();
  const { projects } = state.sections;
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    technologies: "",
    link: "",
  });

  const addProject = () => {
    if (newProject.title.trim()) {
      addSectionItem("projects", {
        ...newProject,
        technologies: newProject.technologies
          .split(",")
          .map((tech) => tech.trim())
          .filter((tech) => tech),
      });
      setNewProject({
        title: "",
        description: "",
        technologies: "",
        link: "",
      });
    }
  };

  const removeProject = (index) => {
    removeSectionItem("projects", index);
  };

  const updateProject = (index, field, value) => {
    const updatedItem = { ...projects.items[index], [field]: value };
    updateSectionItem("projects", index, updatedItem);
  };

  return (
    <div className="projects-form">
      {projects.items.length === 0 ? (
        <div className="empty-state">
          <p>No projects added yet</p>
          <div className="add-first-project">
            <h4>Add Your First Project</h4>
            <div className="project-form">
              <div className="form-group">
                <label>Project Title *</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) =>
                    setNewProject({ ...newProject, title: e.target.value })
                  }
                  placeholder="resume builder"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      description: e.target.value,
                    })
                  }
                  placeholder="front end of that app!"
                  rows="3"
                  className="form-textarea"
                />
              </div>

              <div className="form-group">
                <label>Technologies</label>
                <input
                  type="text"
                  value={newProject.technologies}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      technologies: e.target.value,
                    })
                  }
                  placeholder="React, Node.js, MongoDB"
                  className="form-input"
                />
                <small className="hint">
                  Separate technologies with commas
                </small>
              </div>

              <div className="form-group">
                <label>Project Link</label>
                <input
                  type="url"
                  value={newProject.link}
                  onChange={(e) =>
                    setNewProject({ ...newProject, link: e.target.value })
                  }
                  placeholder="https://github.com/username/project"
                  className="form-input"
                />
              </div>

              <button onClick={addProject} className="btn-add-project">
                + Add Project
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="projects-list">
            {projects.items.map((project, index) => (
              <div key={index} className="project-item">
                <div className="project-header">
                  <h4>Project Details</h4>
                  <button
                    className="remove-btn"
                    onClick={() => removeProject(index)}
                  >
                    ×
                  </button>
                </div>

                <div className="form-group">
                  <label>Project Title *</label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) =>
                      updateProject(index, "title", e.target.value)
                    }
                    placeholder="resume builder"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={project.description}
                    onChange={(e) =>
                      updateProject(index, "description", e.target.value)
                    }
                    placeholder="front end of that app!"
                    rows="3"
                    className="form-textarea"
                  />
                </div>

                <div className="technologies-section">
                  <label>Technologies</label>
                  <input
                    type="text"
                    value={
                      Array.isArray(project.technologies)
                        ? project.technologies.join(", ")
                        : project.technologies
                    }
                    onChange={(e) =>
                      updateProject(
                        index,
                        "technologies",
                        e.target.value
                          .split(",")
                          .map((tech) => tech.trim())
                          .filter((tech) => tech)
                      )
                    }
                    placeholder="React, Node.js, MongoDB"
                    className="form-input"
                  />
                </div>

                <div className="project-link-section">
                  <label>Project Link</label>
                  <input
                    type="url"
                    value={project.link}
                    onChange={(e) =>
                      updateProject(index, "link", e.target.value)
                    }
                    placeholder="https://github.com/username/project"
                    className="form-input"
                  />
                </div>

                <div className="project-divider"></div>
              </div>
            ))}
          </div>

          {/* Add New Project Form */}
          <div className="add-new-project">
            <h4>Add Another Project</h4>
            <div className="project-form">
              <div className="form-group">
                <label>Project Title *</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) =>
                    setNewProject({ ...newProject, title: e.target.value })
                  }
                  placeholder="resume builder"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      description: e.target.value,
                    })
                  }
                  placeholder="front end of that app!"
                  rows="3"
                  className="form-textarea"
                />
              </div>

              <div className="form-group">
                <label>Technologies</label>
                <input
                  type="text"
                  value={newProject.technologies}
                  onChange={(e) =>
                    setNewProject({
                      ...newProject,
                      technologies: e.target.value,
                    })
                  }
                  placeholder="React, Node.js, MongoDB"
                  className="form-input"
                />
                <small className="hint">
                  Separate technologies with commas
                </small>
              </div>

              <div className="form-group">
                <label>Project Link</label>
                <input
                  type="url"
                  value={newProject.link}
                  onChange={(e) =>
                    setNewProject({ ...newProject, link: e.target.value })
                  }
                  placeholder="https://github.com/username/project"
                  className="form-input"
                />
              </div>

              <button onClick={addProject} className="btn-add-project">
                + Add Project
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectsForm;
