import React from 'react';
import NavButton from './NavButton';
import { updateLottieData } from '../helper/lottieSlice';
import { useSelector, useDispatch } from 'react-redux';

function NavMenu() {
  const buttons = useSelector((state) => state.lottie);
  const dispatch = useDispatch();

  const navButtons = buttons.map((button) => {
    const checkDirection = (button) => {
      if (button.pageNo <= button.prevPageNo) {
        console.log('direction forward!!!!');
        dispatch(updateLottieData({ newDirection: 11 }));
      } else {
        console.log('direction backward!!!!');
        dispatch(updateLottieData({ newDirection: -11 }));
      }
    };
    checkDirection(button);

    console.log('page Number', button.pageNo);
    console.log('previouspage Number', button.prevPageNo);
    console.log('Page Direction', button.direction);

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
