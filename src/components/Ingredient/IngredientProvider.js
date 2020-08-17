import React, { useReducer, useContext } from "react";

export const IngredientContext = React.createContext();

export const IngredientContextProvider = ({
  reducer,
  initialState,
  children,
}) => (
  <IngredientContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </IngredientContext.Provider>
);

export const IngredientContextValue = () => useContext(IngredientContext);
