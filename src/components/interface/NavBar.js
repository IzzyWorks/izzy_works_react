import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage'; // key value pair

//components
import Logo from './DynamicLogo';
import NavMenu from './NavMenu';
import lottieLogo from '../data/lottie/logo.json';

//redux

//props comes from index.js NavBarData;

function NavBar() {
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

  // const updateLocalStorage = (newLottieObj) => {
  //   setLottieObj(newLottieObj);
  // };

  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <div className='navbar__logo-wrapper'>
          <Logo animation={lottieLogo} animationObj={lottieObj} />
          <h3 className='logo-name'>izzy</h3>
        </div>
      </div>
      <div className='navbar__right-container'>
        <NavMenu />
      </div>
    </nav>
  );
}

export default NavBar;
