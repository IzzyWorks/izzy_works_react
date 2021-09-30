import React, { useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage'; // key value pair

//components
import Logo from './Logo';
import NavClickWrapper from './NavClickWrapper';
import lottieLogo from '../data/logo.json';

//props comes from index.js NavBarData;

function NavBar(props) {
  console.log('What am I passing???', props);

  //hooks
  const [lottieObj, setLottieObj] = useLocalStorage('lottieData', {
    pageNo: 0,
    playDirection: 1,
    lastFrame: 1,
    firstFrame: 1,
  });

  const [animationObj, setAnimationObj] = useState(
    {
      // segments: [
      //   parseInt(props.NavObj.firstFrame),
      //   parseInt(props.NavObj.lastFrame),
      // ],
      direction: props.NavObj.playDirection,
      speed: 1,
      play: true,
      loop: false,
    }
    // []
  );

  const updateLocalStorage = (newLottieObj) => {
    setLottieObj(newLottieObj);
  };

  const updateUseEffect = (newAnimationObj) => {
    setAnimationObj(newAnimationObj);
  };

  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <div className='navbar__logo-wrapper'>
          <Logo
            animation={lottieLogo}
            animationObj={animationObj}
            passObj={updateUseEffect}
          />
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
