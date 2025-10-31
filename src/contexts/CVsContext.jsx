import React, { createContext, useContext, useState } from "react";

const CVsContext = createContext();

export const CVsProvider = ({ children }) => {
  const [savedCVs, setSavedCVs] = useState([]);

  const saveCV = (cvData) => {
    setSavedCVs((prev) => [
      ...prev,
      { ...cvData, id: Date.now(), createdAt: new Date() },
    ]);
  };

  const deleteCV = (id) => {
    setSavedCVs((prev) => prev.filter((cv) => cv.id !== id));
  };

  return (
    <CVsContext.Provider value={{ savedCVs, saveCV, deleteCV }}>
      {children}
    </CVsContext.Provider>
  );
};

export const useCVs = () => {
  const context = useContext(CVsContext);
  if (!context) {
    throw new Error("useCVs must be used within a CVsProvider");
  }
  return context;
};
