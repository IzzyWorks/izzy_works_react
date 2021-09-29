import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'; // key value pair

//components
import Logo from './Logo';
import NavClickWrapper from './NavClickWrapper';
import lottieLogo from '../data/logo.json';

//props comes from index.js NavBarData;

function NavBar(props) {
  //hooks
  const [lottieObj, setLottieObj] = useLocalStorage('lottieData', {
    pageNo: 0,
    playDirection: 1,
    lastFrame: 1,
    firstFrame: 1,
  });

  // console.log('%cRendering NavBar ===>', 'color: orange; font-size: 16px');
  // console.log('%c----------------------', 'color: orange; font-size: 16px');

  const updateLocalStorage = (newLottieObj) => {
    setLottieObj(newLottieObj);
  };

  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <div className='navbar__logo-wrapper'>
          <Logo
            animation={lottieLogo} //shapes JSON data
            animationData={{
              segments: [
                parseInt(lottieObj.firstFrame),
                parseInt(lottieObj.lastFrame),
              ],
              direction: lottieObj.playDirection,
              speed: 1,
              play: true,
              loop: false,
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
                <NavClickWrapper
                  NavBarData={NavBarData}
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
