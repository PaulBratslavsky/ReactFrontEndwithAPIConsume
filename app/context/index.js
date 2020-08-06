import React, { createContext } from 'react';

export const StateContext = createContext();
export const DispatchContext = createContext();

const ContextProvider = ({ children }) => {

  const state = {

  }

  const dispatch = {

  }

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default ContextProvider;
