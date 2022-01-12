import React from 'react';

const INITAL_LOCATION_STATE = {
  pageNo: 0,
  playDirection: 'down',
  firstFrame: 1,
  lastFrame: 1,
};

const CurrentContext = React.createContext(null);

const useCurrentLocation = () => {
  const [location, setLocation] = React.useContext(CurrentContext);

  const changeLocation = (value) => {
    setLocation(value);
  };

  return { value: location, onChange: changeLocation };
};

const CurrentLocationProvider = ({ children }) => {
  const [location, setLocation] = React.useState(CURRENTLOCATION);
  return (
    <CurrentContext.Provider value={[location, setLocation]}>
      {children}
    </CurrentContext.Provider>
  );
};

export { CurrentLocationProvider, useCurrentLocation, CURRENTLOCATION };
