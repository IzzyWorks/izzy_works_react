import React from 'react';
import NavButton from './NavButton';
import uiComponents from '../data/uiData';
import { updateLottieData } from '../helper/lottieSlice';
import { useSelector, useDispatch } from 'react-redux';

function NavMenu() {
  const buttons = useSelector((state) => state.lottie);

  const navButtons = buttons.map((button) => {
    const checkDirection = (button) => {
      console.log('page Number', button.pageNo);
      console.log('previouspage Number', button.prevPageNo);

      if (button.pageNo <= button.prevPageNo) {
        console.log('direction forward!!!!');

        useDispatch(updateLottieData({ newDirection: 11 }));
      } else {
        console.log('direction backward!!!!');
        useDispatch(updateLottieData({ newDirection: -11 }));
      }
    };

    checkDirection(button);
    console.log('new mapped buttons', button);
    return (
      <li key={button.id} className='navbar__links'>
        <h3 className={'black'}>
          <NavButton buttonData={button} />
        </h3>
      </li>
    );
  });

  return <ul className='navbar__list'>{navButtons}</ul>;
}

export default NavMenu;
