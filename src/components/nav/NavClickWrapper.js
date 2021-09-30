import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// props from NavBarData from NavBar.js;

const NavWrapper = ({ NavObj, lottieObj, passObj }) => {
  const handleClick = (e) => {
    let newLottieObj = {
      pageNo: lottieObj.pageNo || 0,
      playDirection: lottieObj.playDirection || 1,
      lastFrame: lottieObj.lastFrame || 1,
      firstFrame: lottieObj.firstFrame || 1,
    };
    newLottieObj.pageNo = NavObj.page;
    newLottieObj.playDirection = lottieObj.pageNo <= NavObj.page ? 1 : -1;
    // newLottieObj.playDirection = 1 ?
    newLottieObj.firstFrame = NavObj.firstFrame;
    newLottieObj.lastFrame = NavObj.lastFrame;
    passObj(newLottieObj);

    // setPageNo(props.NavBarData.page);
  };

  return (
    <NavLink
      key={NavObj.key}
      to={NavObj.path}
      activeClassName='active'
      onClick={handleClick}
    >
      {NavObj.name}
    </NavLink>
  );
};

export default NavWrapper;
