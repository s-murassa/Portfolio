import {createContext, useContext, useState} from "react";

// Create a context
const AlertContext = createContext(undefined);

// Provide context in a provider component
export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    type: 'success'|'error',
    // Message to be displayed, can be any string
    message: '',
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: '', message: '' }),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

// Custom hook to use the alert context
export const useAlertContext = () => useContext(AlertContext);
