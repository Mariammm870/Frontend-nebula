import React, { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [state, setState] = useState({
    personalInfo: {
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      portfolio: "",
    },
    sections: {
      professionalSummary: {
        enabled: false,
        content:
          "A brief overview of your professional background, key skills, and career objectives...",
      },
      workExperience: {
        enabled: false,
        items: [],
      },
      education: {
        enabled: false,
        items: [],
      },
      skills: {
        enabled: false,
        items: [],
      },
      projects: {
        enabled: false,
        items: [],
      },
      certificates: {
        enabled: false,
        items: [],
      },
      languages: {
        enabled: false,
        items: [],
      },
      customSection: {
        enabled: false,
        title: "",
        items: [],
      },
    },
  });

  // Simple update functions
  const updatePersonalInfo = (updates) => {
    setState((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...updates },
    }));
  };

  const toggleSection = (sectionName) => {
    setState((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionName]: {
          ...prev.sections[sectionName],
          enabled: !prev.sections[sectionName].enabled,
        },
      },
    }));
  };

  const updateSectionContent = (sectionName, content) => {
    setState((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionName]: {
          ...prev.sections[sectionName],
          ...content,
        },
      },
    }));
  };

  const addSectionItem = (sectionName, newItem) => {
    setState((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionName]: {
          ...prev.sections[sectionName],
          items: [...prev.sections[sectionName].items, newItem],
        },
      },
    }));
  };

  const updateSectionItem = (sectionName, index, updatedItem) => {
    setState((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionName]: {
          ...prev.sections[sectionName],
          items: prev.sections[sectionName].items.map((item, i) =>
            i === index ? updatedItem : item
          ),
        },
      },
    }));
  };

  const removeSectionItem = (sectionName, index) => {
    setState((prev) => ({
      ...prev,
      sections: {
        ...prev.sections,
        [sectionName]: {
          ...prev.sections[sectionName],
          items: prev.sections[sectionName].items.filter((_, i) => i !== index),
        },
      },
    }));
  };

  // helper function, groups all other
  const dispatch = (action) => {
    switch (action.type) {
      case "TOGGLE_SECTION":
        toggleSection(action.payload);
        break;
      case "UPDATE_PERSONAL_INFO":
        updatePersonalInfo(action.payload);
        break;
      case "UPDATE_SECTION_CONTENT":
        updateSectionContent(action.payload.section, action.payload.content);
        break;
      case "ADD_SECTION_ITEM":
        addSectionItem(action.payload.section, action.payload.item);
        break;
      case "UPDATE_SECTION_ITEM":
        updateSectionItem(
          action.payload.section,
          action.payload.index,
          action.payload.item
        );
        break;
      case "REMOVE_SECTION_ITEM":
        removeSectionItem(action.payload.section, action.payload.index);
        break;
      default:
        console.warn("Unknown action type:", action.type);
    }
  };

  const value = {
    state,
    dispatch,
    toggleSection,
    updatePersonalInfo,
    updateSectionContent,
    addSectionItem,
    updateSectionItem,
    removeSectionItem,
  };

  return (
    <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};
