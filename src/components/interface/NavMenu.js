import React from 'react';
import NavButton from './NavButton';

{
  props.NavObj.map((NavObj) => (
    <li key={NavObj.key} className='navbar__links'>
      <h3 className={'black'}>
        <NavButton
          NavObj={NavObj}
          lottieObj={lottieObj}
          passObj={updateLocalStorage}
        />
      </h3>
    </li>
  ));
}
