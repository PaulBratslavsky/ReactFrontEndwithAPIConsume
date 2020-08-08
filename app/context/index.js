import React, { createContext, useReducer } from 'react';

export const StateContext = createContext();
export const DispatchContext = createContext();

const ContextProvider = ({ children }) => {

const initialState = {
  loggedIn: false,
  message: [],
}

function logInReducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, loggedIn: true };
    case 'logout':
      return { ...state, loggedIn: false };
    default:
      return state;
  }
}  

function messageReducer(state, action) {
  switch (action.type) {
    case 'add_message':
      return [...state, action.payload ];
    default:
      return state;
  }
}

const [logInState, logInDispatch] = useReducer(logInReducer, initialState.loggedIn);
const [messageState, messageDispatch] = useReducer(messageReducer, initialState.message);



const allDispatch = {
  logInDispatch,
  messageDispatch
}

const globalState = {
  logInState,
  messageState
}

 
  return (
    <StateContext.Provider value={globalState}>
      <DispatchContext.Provider value={allDispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default ContextProvider;
