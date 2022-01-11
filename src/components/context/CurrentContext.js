import React from 'react';

const CurrentContext = React.createContext(null);

const useLocation = () => React.useContext(CurrentContext);

const CurrentLocationProvider = ({ value, children }) => {
  return (
    <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>
  );
};

export { CurrentLocationProvider, useLocation };
