import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
import { divideArray } from "../helpers";

export const useProjectModal = () => {
  const { projectModalInfo, showProjectModal, handleCloseProjectModal } =
    useContext(AppContext);
  const [[techStackFirstPart, techStackSecondPart], setDividedTechStack] =
    useState([]);

  const { techStack } = projectModalInfo;
  useEffect(() => {
    setDividedTechStack(divideArray(techStack));
  }, [techStack]);

  return {
    ...projectModalInfo,
    showProjectModal,
    handleCloseProjectModal,
    techStackFirstPart,
    techStackSecondPart,
  };
};
