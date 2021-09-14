import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

//Data

// const handleClick = (props, e) => {
//   // 🔥🔥🔥 Logo Lottie Behavior 🔥🔥🔥

//   // console.log('Props passed into NavBar ===>', props);
//   const [currentFrame, setCurrentFrame] = useState(1);
//   const [previousLastFrame, setPreviousLastFrame] = useState(1);
//   const [frames, setFrames] = useState([1, 1]);
//   const [speed, setSpeed] = useState(0);
//   const [previousPage, setPreviousPage] = useState(0);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [direction, setDirection] = useState(1);
//   const [fontColor, setFontColor] = useState('black');
//   // console.log('frame useStates  ===>', currentFrame, previousLastFrame);
//   // console.log('page useStates  ===>', currentPage, previousPage);
//   // console.log('direction useStates  ===>', direction);
//   // console.log('speed useStates  ===>', speed);

//   // console.log('inside navbar eventhandler ===>', props);
//   currentPage >= previousPage ? setDirection(1) : setDirection(-1);
//   setCurrentPage(props.NavBarData.page);
//   setPreviousLastFrame(props.NavBarData.lastFrame);
//   setCurrentFrame(props.NavBarData.firstFrame);
//   setFrames([currentFrame, previousLastFrame]);
//   setSpeed(props.NavBarData.speed);
//   setPreviousPage(currentPage);

//   // setFontColor(props.NavBarData.fontColor);
// };

const NavWrapper = (props) => {
  return (
    <NavLink
      key={props.NavBarData.key}
      to={props.NavBarData.path}
      activeClassName='active'
      // onClick={(e) => {
      //   handleClick(props, e);
      // }}
    >
      {props.NavBarData.name}
    </NavLink>
  );
};

export default NavWrapper;
