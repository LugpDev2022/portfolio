import { useState } from "react";
import { AppContext } from "./AppContext";

export const ContextProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [projectModalInfo, setProjectModalInfo] = useState({});

  const handleShowProjectModal = (project) => {
    setProjectModalInfo(project);
    setShowProjectModal(true);
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
    projectModalInfo,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
