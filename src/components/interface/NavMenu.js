import React from 'react';
import NavButton from './NavButton';
import { useSelector } from 'react-redux';
import useLocalStorage from '../hooks/useLocalStorage'; // key value pair

import NavObj from '../data/NavObj';

function NavMenu() {
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

  const uiComponent = useSelector((state) => state.ui);
  console.log('uiSlice ====>', uiComponent);
  console.log('lottieObj ====>', lottieObj);

  const buttonList = uiComponent.map((ui) => {
    return (
      <li key={ui.id} className='navbar__links'>
        <h3 className={'black'}>
          <NavButton
            uiComponent={ui}
            // lottieObj={lottieObj}
            // passObj={updateLocalStorage}
          />
        </h3>
      </li>
    );
  });

  return <ul className='navbar__list'>{buttonList}</ul>;
}

export default NavMenu;
