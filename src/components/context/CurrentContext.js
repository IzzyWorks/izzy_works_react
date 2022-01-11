import React from 'react';

const CurrentContext = React.createContext(null);

const useLocation = () => React.useContext(CurrentContext);

export { CurrentContext, useLocation };
