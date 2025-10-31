import React from "react";
import { useResume } from "../contexts/ResumeContext";
import "./ClassicTemplate.css";

const ClassicTemplate = () => {
  const { state } = useResume();
  const { personalInfo, sections } = state;

  return (
    <div className="classic-template">
      {/* Header */}
      <div className="template-header">
        <h1>My Professional Resume</h1>
      </div>

      {/* Personal Information Section */}
      <section className="personal-info-section">
        <h2>Personal Information</h2>

        <div className="personal-info-content">
          {/* Name and Title */}
          <div className="name-title">
            <h3 className="full-name">
              {personalInfo.fullName || "YOUR NAME"}
            </h3>
            {personalInfo.jobTitle && (
              <p className="job-title">{personalInfo.jobTitle}</p>
            )}
          </div>

          {/* Contact Information - Single Line */}
          <div className="contact-info-single-line">
            <div className="contact-items">
              {personalInfo.email && (
                <span className="contact-item">{personalInfo.email}</span>
              )}
              {personalInfo.phone && (
                <span className="contact-item">{personalInfo.phone}</span>
              )}
              {personalInfo.location && (
                <span className="contact-item">{personalInfo.location}</span>
              )}
              {personalInfo.linkedin && (
                <span className="contact-item">{personalInfo.linkedin}</span>
              )}
              {personalInfo.portfolio && (
                <span className="contact-item">{personalInfo.portfolio}</span>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Professional Summary */}
      {sections.professionalSummary.enabled && (
        <section className="professional-summary">
          <h2>Professional Summary</h2>
          <p>{sections.professionalSummary.content}</p>
        </section>
      )}

      {/* Work Experience Section */}
      {sections.workExperience.enabled &&
        sections.workExperience.items.length > 0 && (
          <section className="work-experience">
            <h2>Work Experience</h2>
            {sections.workExperience.items.map((experience, index) => (
              <div key={index} className="work-experience-item">
                <div className="work-experience-header">
                  <h3 className="work-position">{experience.position}</h3>
                  <div className="work-dates">
                    {experience.startDate} -{" "}
                    {experience.currentlyWorking
                      ? "Present"
                      : experience.endDate}
                  </div>
                </div>
                <div className="work-company">{experience.company}</div>
                {experience.description && (
                  <p className="work-description">{experience.description}</p>
                )}
                {index < sections.workExperience.items.length - 1 && (
                  <div className="work-divider"></div>
                )}
              </div>
            ))}
          </section>
        )}

      {/* Education Section */}
      {sections.education.enabled && sections.education.items.length > 0 && (
        <section className="education">
          <h2>Education</h2>
          {sections.education.items.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <h3 className="education-degree">{edu.degree}</h3>
                <span className="education-dates">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              <div className="education-institution">
                {edu.institution}, {edu.location}
              </div>
              {edu.description && (
                <p className="education-description">{edu.description}</p>
              )}
              {index < sections.education.items.length - 1 && (
                <div className="work-divider"></div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Skills Section */}
      {sections.skills.enabled && sections.skills.items.length > 0 && (
        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            {sections.skills.items.map((skill, index) => (
              <div key={index} className="skill-item">
                <span>{skill.name}</span>
                {skill.level && skill.level !== "Intermediate" && (
                  <span className="skill-level">({skill.level})</span>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects Section */}
      {sections.projects.enabled && sections.projects.items.length > 0 && (
        <section className="projects">
          <h2>Projects</h2>
          {sections.projects.items.map((project, index) => (
            <div key={index} className="project-item">
              <h3 className="project-title">{project.title}</h3>
              {project.description && (
                <p className="project-description">{project.description}</p>
              )}
              {project.technologies && project.technologies.length > 0 && (
                <div className="project-technologies">
                  <strong>Technologies: </strong>
                  <span>
                    {Array.isArray(project.technologies)
                      ? project.technologies.join(", ")
                      : project.technologies}
                  </span>
                </div>
              )}
              {project.link && (
                <div className="project-link">
                  <strong>Project Link: </strong>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link}
                  </a>
                </div>
              )}
              {index < sections.projects.items.length - 1 && (
                <div className="project-divider"></div>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
