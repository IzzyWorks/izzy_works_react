import React from 'react';
import NavButton from './NavButton';

import NavObj from '../data/NavObj';

export const NavMenu = ({ lottieObj }) => {
  const buttonList = NavObj.map((NavObj) => {
    return (
      <li key={NavObj.key} className='navbar__links'>
        <h3 className={'black'}>
          <NavButton
            NavObj={NavObj}
            lottieObj={lottieObj}
            // passObj={updateLocalStorage}
          />
        </h3>
      </li>
    );
  });

  return <ul className='navbar__list'>{buttonList}</ul>;
};
