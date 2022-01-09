import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// props from NavBarData from NavBar.js;

const NavButton = ({ buttonData, NavBarData, lottieObj, passObj }) => {
  const uiTextColor = 'black';

  const handleClick = (e) => {
    let newLottieObj = {
      pageNo: lottieObj.pageNo,
      playDirection: lottieObj.playDirection,
      lastFrame: lottieObj.lastFrame,
      firstFrame: lottieObj.firstFrame,
    };
    newLottieObj.pageNo = NavBarData.page;
    newLottieObj.playDirection =
      lottieObj.pageNo <= NavBarData.page ? 'down' : 'up';
    if (lottieObj.pageNo <= NavBarData.page) {
      newLottieObj.firstFrame = lottieObj.lastFrame;
      newLottieObj.lastFrame = NavBarData.lastFrame;
    } else {
      newLottieObj.firstFrame = lottieObj.lastFrame;
      newLottieObj.lastFrame = NavBarData.lastFrame - 1;
    }

    passObj(newLottieObj);
  };

  return (
    <NavLink
      key={buttonData.id}
      to={buttonData.url}
      activeClassName='active'
      className={uiTextColor}
      onClick={handleClick}
    >
      {buttonData.lable}
    </NavLink>
  );
};

export default NavButton;
