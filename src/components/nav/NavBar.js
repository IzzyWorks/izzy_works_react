import React, { useState } from 'react';

//components
import Logo from './Logo';
import NavWrapper from './NavWrapper';

//data
import lottieLogo from '../data/logo.json';

//props
//NavBarData from index.js;

function NavBar(props) {
  // 🔥🔥🔥 Navbar 🔥🔥🔥

  const previousFrame = window.localStorage.getItem('lastLottieFrame');
  const nextFrame = props.NavBarData.startFrame;
  console.log('Rendering NavBar', props, previousFrame);

  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <div className='navbar__logo-wrapper'>
          <Logo
            animation={lottieLogo} //shapes JSON data
            animationData={{
              // segments: [previousFrame, nextFrame],
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
                <NavWrapper NavBarData={NavBarData} />
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
