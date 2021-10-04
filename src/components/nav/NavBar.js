import React, { useState, useEffect, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'; // key value pair

//components
import Logo from './Logo';
import NavClickWrapper from './NavClickWrapper';
import lottieLogo from '../data/logo.json';

//props comes from index.js NavBarData;

function NavBar(props) {
  // console.log('%cRendering NavBar ===>', 'color: darkblue; font-size: 16px');

  //hooks
  const [lottieObj, setLottieObj] = useLocalStorage('lottieData', {
    pageNo: 0,
    playDirection: 1,
    lastFrame: 1,
    firstFrame: 1,
    speed: 1,
    play: true,
    loop: false,
  });

  const updateLocalStorage = (newLottieObj) => {
    setLottieObj(newLottieObj);
  };

  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <div className='navbar__logo-wrapper'>
          <Logo animation={lottieLogo} animationObj={lottieObj} />
          <h3 className='logo-name'>izzy</h3>
        </div>
      </div>
      <div className='navbar__right-container'>
        <ul className='navbar__list'>
          {props.NavObj.map((NavObj) => (
            <li key={NavObj.key} className='navbar__links'>
              <h3 className={'black'}>
                <NavClickWrapper
                  NavObj={NavObj}
                  lottieObj={lottieObj}
                  passObj={updateLocalStorage}
                />
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

// console.log('%cRendering NavBar ===>', 'color: orange; font-size: 16px');
// console.log('%c----------------------', 'color: orange; font-size: 16px');
