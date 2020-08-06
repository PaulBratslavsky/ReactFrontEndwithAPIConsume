import React, { createContext } from 'react';

export const MainContext = createContext();

export default function MainContextProvider({children}) {

  // GLOBAL STATE
  const [flashMessage, setFlashMessage] = React.useState(['test']);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // GLOBAL METHODS
  const addFlashMessage = (msg) => {
    setFlashMessage(prev => [...prev, msg])
  }

  // PASS TO PROVIDER
  const context = {
    methods: {
      addFlashMessage,
      setIsLoggedIn,
    },
    state: {
      flashMessage,
      isLoggedIn,
    }
  }

  return <MainContext.Provider value={context} >
    {children}
  </MainContext.Provider>
}