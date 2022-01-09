import { createContext } from 'react';

export const GlobalState = createContext({
  pageNo: 0,
  playDirection: 1,
  firstFrame: 1,
  lastFrame: 1,
});
