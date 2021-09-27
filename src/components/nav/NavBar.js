import React, { useState, useContext } from 'react';

//components
import Logo from './Logo';
import NavWrapper from './NavWrapper';

//data
import lottieLogo from '../data/logo.json';

// helper
import { PageCountContext } from '../context/PageCountContext';

//props
//NavBarData from index.js;

function NavBar(props) {
  const [nextFrame, setNextFrame] = useLocalStorage('nextFrame', 1);
  const [pageNo, setPageNo] = useLocalStorage('pageNo', 0);
  const [currentPageToHistory, setPageHistory] = useState(0);

  // 🔥🔥🔥 Navbar 🔥🔥🔥
  const currentPage = window.localStorage.getItem('pageNo');
  const nextLottieFrame = window.localStorage.getItem('nextFrame');

  console.log('Rendering NavBar', props);

  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <div className='navbar__logo-wrapper'>
          <Logo
            animation={lottieLogo} //shapes JSON data
            animationData={{
              segments: [1, nextLottieFrame],
              direction: 1,
              speed: 1,
              play: true,
              loop: false,
              // logo not re-rendering on
            }}
          />
          <h3 className='logo-name'>izzy</h3>
        </div>
      </div>
      <div className='navbar__right-container'>
        <ul className='navbar__list'>
          {props.NavBarData.map((NavBarData) => (
            <li key={NavBarData.key} className='navbar__links'>
              <h3 className={'black'}>
                <PageCountContext.Provider
                  value={{ pageNo, setPageNo, nextFrame, setNextFrame }}
                >
                  <NavWrapper NavBarData={NavBarData} />
                </PageCountContext.Provider>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

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
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default NavBar;
