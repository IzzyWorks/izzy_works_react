import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// props from NavBarData from NavBar.js;

const NavWrapper = ({ NavObj, lottieObj, passObj }) => {
  const handleClick = (e) => {
    console.log('%cDATA IN CLICK EVENT ===>', 'color: orange; font-size: 16px');
    console.log('Page Number', lottieObj.pageNo);
    console.log('Start segment', lottieObj.firstFrame);
    console.log('End segment', lottieObj.lastFrame);
    console.log('Direction', lottieObj.playDirection);
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
    // console.log(
    //   '%cDATA OUT CLICK EVENT ===>',
    //   'color: orange; font-size: 16px'
    // );
    // console.log('Page Number', newLottieObj.pageNo);
    // console.log('Start segment', newLottieObj.firstFrame);
    // console.log('End segment', newLottieObj.lastFrame);
    // console.log('Direction', newLottieObj.playDirection);

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
