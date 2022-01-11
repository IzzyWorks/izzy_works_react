import React from 'react';

const currentLocation = {
  pageNo: 0,
  playDirection: 'down',
  firstFrame: 1,
  lastFrame: 1,
};

const CurrentContext = React.createContext(null);

const useLocation = () => React.useContext(CurrentContext);

const CurrentLocationProvider = ({ value, children }) => {
  return (
    <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>
  );
};

export { CurrentLocationProvider, useLocation, currentLocation };
