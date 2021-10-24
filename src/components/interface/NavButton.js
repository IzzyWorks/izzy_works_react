import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  updatePage,
  updatePlaybackStart,
  updateRewindEnd,
  updateDirection,
} from '../helper/lottieSlice';

const NavButton = ({ uiComponent }) => {
  const uiTextColor = 'black';

  const prevPageNo = useSelector((state) => state.lottie.prevPageNo);
  const currentDirection = useSelector((state) => state.lottie.direction);

  function setPlayDirection() {
    uiComponent.pageNo >= prevPageNo
      ? useDispatch(updateDirection(1))
      : useDispatch(updateDirection(-1));
  }

  function setPlaySegments() {
    currentDirection === 1
      ? useDispatch(updatePlaybackStart({ startFrame: uiComponent.firstFrame }))
      : useDispatch(updateRewindEnd({ endFrame: uiComponent.lastFrame }));
  }

  function updatePageHistory() {
    useDispatch(updatePage({ pageNo: uiComponent.pageNo }));
  }

  const onClick = (e) => {
    setPlayDirection;
    setPlaySegments;
    updatePageHistory;
  };

  return (
    <NavLink
      key={uiComponent.id}
      to={uiComponent.url}
      activeClassName='active'
      className={uiTextColor}
      onClick={onClick}
    >
      {uiComponent.name}
    </NavLink>
  );
};

export default NavButton;
