import React from 'react';
import NavButton from './NavButton';
import uiComponents from '../data/uiData';
import { mapButtons } from '../helper/lottieSlice';
import { useSelector } from 'react-redux';

function NavMenu() {
  const buttons = useSelector((state) => state.lottie);

  const checkDirection = (buttons) => {
    buttons.pageNo > buttons.prevPageNo
    return 1 : -1 ;
  };

buttons(checkDirection);

  const navButtons = uiComponents.map((ui) => {
    return (
      <li key={ui.id} className='navbar__links'>
        <h3 className={'black'}>
          <NavButton uiComponent={ui} />
        </h3>
      </li>
    );
  });

  return <ul className='navbar__list'>{navButtons}</ul>;
}

export default NavMenu;
