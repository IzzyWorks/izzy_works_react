import React from 'react';
import NavButton from './NavButton';
import uiComponents from '../data/uiData';

function NavMenu() {
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
