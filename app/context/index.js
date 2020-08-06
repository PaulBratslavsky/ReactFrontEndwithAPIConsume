import React, { createContext, useReducer } from 'react';

export const StateContext = createContext();
export const DispatchContext = createContext();

const ContextProvider = ({ children }) => {

const initialState = {

}

function ourReducer(state, action) {
  
}  

const [state, dispatch] = useReducer(ourReducer, initialState);
 
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default ContextProvider;
