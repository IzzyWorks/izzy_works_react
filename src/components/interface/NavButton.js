import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
// import useLocalStorage from '../hooks/useLocalStorage'; // key value pair

const NavButton = ({ buttonObj }) => {
  console.log('what is passeded', buttonObj);

  const handleClick = (e) => {
    console.log('click is passeded', buttonObj);
  };

  //     pageNo: buttonObj.pageNo,
  //     playDirection: lottieObj.playDirection,
  //     lastFrame: lottieObj.lastFrame,
  //     firstFrame: lottieObj.firstFrame,
  //   };
  //   newLottieObj.pageNo = NavBarData.page;
  //   newLottieObj.playDirection =
  //     lottieObj.pageNo <= NavBarData.page ? 'down' : 'up';
  //   if (lottieObj.pageNo <= NavBarData.page) {
  //     newLottieObj.firstFrame = lottieObj.lastFrame;
  //     newLottieObj.lastFrame = NavBarData.lastFrame;
  //   } else {
  //     newLottieObj.firstFrame = lottieObj.lastFrame;
  //     newLottieObj.lastFrame = NavBarData.lastFrame - 1;
  //   })}

  //   let newGlobalState =

  //   passObj(newLottieObj);
  // };

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
