import React, { useReducer, useContext } from "react";

export const RecepieContext = React.createContext();

export const RecepieContextProvider = ({ reducer, initialState, children }) => (
  <RecepieContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </RecepieContext.Provider>
);

export const RecepieContextValue = () => useContext(RecepieContext);
