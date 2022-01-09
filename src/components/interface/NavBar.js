import React from 'react';

//components
import Logo from './DynamicLogo';
import NavMenu from './NavMenu';
import uiData from '../data/uiData';

function NavBar() {
  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <Logo animationData={uiData.logo} />
      </div>
      <div className='navbar__right-container'>
        <NavMenu navData={uiData.buttons} />
      </div>
    </nav>
  );
}

export default NavBar;
