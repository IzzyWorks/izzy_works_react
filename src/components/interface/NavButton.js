import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import {
  CurrentLocationProvider,
  useLocation,
} from '../context/CurrentContext';
// import useLocalStorage from '../hooks/useLocalStorage'; // key value pair

const NavButton = ({ buttonObj, passObj }) => {
  const currentLocation = useLocation();

  const handleClick = (e) => {
    console.log('what is the context object?', currentLocation);
    // console.log('what is the current context?', currentLocation.pageNo);
    let newLocationContext = {
      pageNo: buttonObj.pageNo,
      playDirection: currentLocation.playDirection,
      lastFrame: currentLocation.lastFrame,
      firstFrame: currentLocation.firstFrame,
    };
    newLocationContext.pageNo = buttonObj.pageNo;
    newLocationContext.playDirection =
      currentLocation.pageNo <= buttonObj.pageNo ? 'down' : 'up';
    if (currentLocation.pageNo <= buttonObj.pageNo) {
      newLocationContext.firstFrame = currentLocation.lastFrame;
      newLocationContext.lastFrame = buttonObj.lastFrame;
    } else {
      newLocationContext.firstFrame = currentLocation.lastFrame;
      newLocationContext.lastFrame = buttonObj.lastFrame - 1;
    }
    // currentLocation(newLocationContext);
    // console.log('what is the updated context?', currentLocation.pageNo);
    // passObj(newLottieObj);
  };

  return (
    <NavLink
      key={buttonObj.id}
      to={buttonObj.url}
      activeClassName='active'
      className='black'
      onClick={handleClick}
    >
      {buttonObj.name}
    </NavLink>
  );
};

export default NavButton;
