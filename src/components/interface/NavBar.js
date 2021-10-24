import React from 'react';
// import lottieSlice from '../helper/lottieSlice';
// import uiSlice from './uiSlice';

//components
import Logo from './DynamicLogo';
import NavMenu from './NavMenu';
import lottieLogo from '../data/lottie/logo.json';
import uiSlice from './uiSlice';

//redux

function NavBar() {
  // const updateLocalStorage = (newLottieObj) => {
  //   setLottieObj(newLottieObj);
  // };

  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <Logo animation={lottieLogo} />
      </div>
      <div className='navbar__right-container'>
        <NavMenu />
      </div>
    </nav>
  );
}

export default NavBar;
