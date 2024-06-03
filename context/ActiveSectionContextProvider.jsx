"use client";

import React, { useContext, useState } from "react";

export const ActiveSectionContext =
  React.createContext(null);

const ActiveSectionContextProvider = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext should be used within a ActiveSectionContextProvider"
    );
  }

  return context;
}
