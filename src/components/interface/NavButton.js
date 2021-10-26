import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateDirection,
  updatePage,
  updatePlaybackStart,
  updateRewindEnd,
} from '../helper/lottieSlice';

const NavButton = ({ uiComponent }) => {
  const uiTextColor = 'black';

  // const onClick = (e) => {
  //   let lottiePlayback = {};
  //   useDispatch(playLottieLogo(lottiePlayback));
  // };

  return (
    <NavLink
      key={uiComponent.id}
      to={uiComponent.url}
      activeClassName='active'
      className={uiTextColor}
      // onClick={onClick}
    >
      {uiComponent.name}
    </NavLink>
  );
};

export default NavButton;

// const onClick = (e) => {
//   let lottiePlayback = {};
//   useDispatch(playLottieLogo(lottiePlayback));
// };

// uiComponent.pageNo >= prevPageNo
//   ? useDispatch(updateDirection(1))
//   : useDispatch(updateDirection(-1));
// currentDirection === 1
//   ? useDispatch(updatePlaybackStart({ startFrame: uiComponent.firstFrame }))
//   : useDispatch(updateRewindEnd({ endFrame: uiComponent.lastFrame }));
// useDispatch(updatePage({ pageNo: uiComponent.pageNo }));

// const setPlayDirection = () => {
//   uiComponent.pageNo >= prevPageNo
//     ? useDispatch(updateDirection(1))
//     : useDispatch(updateDirection(-1));
// };

// const setPlaySegments = () => {
//   currentDirection === 1
//     ? useDispatch(
//         updatePlaybackStart({ startFrame: uiComponent.firstFrame })
//       )
//     : useDispatch(updateRewindEnd({ endFrame: uiComponent.lastFrame }));
// };

// const updatePageHistory = () => {
//   useDispatch(updatePage({ pageNo: uiComponent.pageNo }));
// };
