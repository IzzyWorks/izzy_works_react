import React from 'react';

//components
import Logo from './DynamicLogo';
import NavMenu from './NavMenu';

//redux

function NavBar() {
  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <Logo />
      </div>
      <div className='navbar__right-container'>
        <NavMenu />
      </div>
    </nav>
  );
}

export default NavBar;
