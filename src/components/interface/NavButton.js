import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// props from NavBarData from NavBar.js;

const NavButton = ({ uiComponent, lottieObj, passObj }) => {
  const lottieData = useSelector((state) => state.lottie);
  console.log('inside NabButton', uiComponent);

  const handleClick = (e) => {
    let newLottieObj = {
      pageNo: lottieObj.pageNo || 0,
      playDirection: lottieData.direction || 1,
      lastFrame: lottieData.segments[1] || 1,
      firstFrame: lottieData.segments[0] || 1,
    };
    newLottieObj.pageNo = uiComponent.pageNo;
    newLottieObj.direction = lottieObj.pageNo <= lottieData.pageNo ? 1 : -1;
    if (newLottieObj.direction == 1) {
      newLottieObj.lastFrame = uiComponent.lastFrame;
    } else {
      newLottieObj.firstFrame = uiComponent.firstFrame;
    }
    // passObj(newLottieObj);

    // setPageNo(props.NavBarData.page);
  };

  return (
    <NavLink
      key={uiComponent.id}
      to={uiComponent.url}
      activeClassName='active'
      onClick={handleClick}
      // onmouseover={handleHover}
    >
      {uiComponent.name}
    </NavLink>
  );
};

export default NavButton;

// console.log('%cDATA IN CLICK EVENT ===>', 'color: orange; font-size: 16px');
// console.log('Page Number', lottieObj.pageNo);
// console.log('Start segment', lottieObj.firstFrame);
// console.log('End segment', lottieObj.lastFrame);
// console.log('Direction', lottieObj.playDirection);
