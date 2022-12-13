import React, { useState } from "react";
import { AppContext } from "./AppContext";

export const ContextProvider = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState();

  const value = {
    headerHeight,
    setHeaderHeight,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
