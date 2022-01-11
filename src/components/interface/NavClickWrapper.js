import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// props from NavBarData from NavBar.js;

const NavWrapper = ({ NavBarData, lottieObj, passObj }) => {
  const handleClick = (e) => {
    let newLottieObj = {
      pageNo: lottieObj.pageNo,
      playDirection: lottieObj.playDirection,
      lastFrame: lottieObj.lastFrame,
      firstFrame: lottieObj.firstFrame,
    };
    newLottieObj.pageNo = NavBarData.page;
    newLottieObj.playDirection = lottieObj.pageNo <= NavBarData.page ? 1 : -1;
    if (lottieObj.pageNo <= NavBarData.page) {
      newLottieObj.firstFrame = lottieObj.lastFrame;
      newLottieObj.lastFrame = NavBarData.lastFrame;
    } else {
      newLottieObj.firstFrame = lottieObj.lastFrame;
      newLottieObj.lastFrame = NavBarData.lastFrame - 1;
    }

    passObj(newLottieObj);

    // setPageNo(props.NavBarData.page);
  };

  return (
    <NavLink
      key={NavBarData.key}
      to={NavBarData.path}
      activeClassName='active'
      onClick={handleClick}
    >
      {NavBarData.name}
    </NavLink>
  );
};

export default NavWrapper;
