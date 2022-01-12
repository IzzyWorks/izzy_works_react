import React, { createContext, useReducer } from 'react';

const initialState = {
  pageNo: 0,
  playDirection: 'down',
  firstFrame: 1,
  lastFrame: 1,
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case UPDATE_LOTTIE:
        const newState = {};
        return newState;
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
