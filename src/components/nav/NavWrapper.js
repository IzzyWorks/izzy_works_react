import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

//props from ====>
//NavBarData from NavBar.js;

const NavWrapper = (props) => {
  const [pageNo, setPageNo] = useLocalStorage('pageNo', 0);
  const [lottieFrame, setLottieFrame] = useLocalStorage('lottieFrame', 1);

  // console.log('rendering NevWrapper', pageNo);
  return (
    <NavLink
      key={props.NavBarData.key}
      to={props.NavBarData.path}
      activeClassName='active'
      value={pageNo}
      onClick={(e) =>
        setPageNo(props.NavBarData.page) +
        setLottieFrame(props.NavBarData.endFrame)
      }
    >
      {props.NavBarData.name}
    </NavLink>
  );
};

// Hook
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default NavWrapper;

// 🔥🔥🔥 Logo Lottie Behavior 🔥🔥🔥
