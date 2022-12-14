import { useState } from "react";
import { AppContext } from "./AppContext";

export const ContextProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);

  const handleShowProjectModal = (project) => {
    setShowProjectModal(true);
    console.log(project);
  };

  const handleCloseProjectModal = () => {
    setShowProjectModal(false);
  };

  const value = {
    headerHeight,
    setHeaderHeight,
    isNavFixed,
    setIsNavFixed,
    showProjectModal,
    handleShowProjectModal,
    handleCloseProjectModal,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
