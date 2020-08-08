import React, { createContext, useReducer } from 'react';

export const StateContext = createContext();
export const DispatchContext = createContext();

const ContextProvider = ({ children }) => {

const initialState = {
  loggedIn: false,
  message: {message: ['ee'], type: 'alert-success'},
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
  console.log(state, action.type, action.payload, "SGASGAS")
  switch (action.type) {
    case 'add_message_success':
      return { message: [...state.message, action.payload.message ], type: action.payload.type};

    case 'add_message_error':
      return { message: [...state.message, action.payload.message ], type: action.payload.type};
      
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
