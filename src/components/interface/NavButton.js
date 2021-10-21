import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// props from NavBarData from NavBar.js;

const NavButton = ({ NavObj, lottieObj, passObj }) => {
  const handleClick = (e) => {
    let newLottieObj = {
      pageNo: lottieObj.pageNo || 0,
      playDirection: lottieObj.playDirection || 1,
      lastFrame: lottieObj.lastFrame || 1,
      firstFrame: lottieObj.firstFrame || 1,
    };
    newLottieObj.pageNo = NavObj.page;
    newLottieObj.playDirection = lottieObj.pageNo <= NavObj.page ? 1 : -1;
    if (newLottieObj.playDirection == 1) {
      newLottieObj.lastFrame = NavObj.lastFrame;
    } else {
      newLottieObj.firstFrame = NavObj.firstFrame;
    }
    passObj(newLottieObj);

    // setPageNo(props.NavBarData.page);
  };

  return (
    <NavLink
      key={NavObj.key}
      to={NavObj.path}
      activeClassName='active'
      onClick={handleClick}
      // onmouseover={handleHover}
    >
      {NavObj.name}
    </NavLink>
  );
};

export default NavButton;

// console.log('%cDATA IN CLICK EVENT ===>', 'color: orange; font-size: 16px');
// console.log('Page Number', lottieObj.pageNo);
// console.log('Start segment', lottieObj.firstFrame);
// console.log('End segment', lottieObj.lastFrame);
// console.log('Direction', lottieObj.playDirection);
