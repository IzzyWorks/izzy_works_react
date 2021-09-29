import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// props from NavBarData from NavBar.js;

const NavWrapper = ({ NavBarData, lottieObj, passObj }) => {
  const handleClick = (e) => {
    let newLottieObj = {
      pageNo: lottieObj.pageNo || 0,
      playDirection: lottieObj.playDirection || 1,
      lastFrame: lottieObj.lastFrame || 1,
      firstFrame: lottieObj.firstFrame || 1,
    };
    newLottieObj.pageNo = NavBarData.page;
    newLottieObj.playDirection = lottieObj.pageNo <= NavBarData.page ? 1 : -1;
    newLottieObj.firstFrame = NavBarData.firstFrame;
    newLottieObj.lastFrame = NavBarData.lastFrame;
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
