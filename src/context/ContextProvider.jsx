import React, { useState } from "react";
import { AppContext } from "./AppContext";

export const ContextProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isNavFixed, setIsNavFixed] = useState(false);

  const value = {
    headerHeight,
    setHeaderHeight,
    isNavFixed,
    setIsNavFixed,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
