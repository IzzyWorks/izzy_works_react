import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { PageCountContext } from '../context/PageCountContext';

// props from NavBarData from NavBar.js;

const NavWrapper = (props) => {
  // console.log('NavWrapper Rendering ==>', props);
  const { setPageNo, setLastFrame, setFirstFrame } =
    useContext(PageCountContext);
  return (
    <NavLink
      key={props.NavBarData.key}
      to={props.NavBarData.path}
      activeClassName='active'
      onClick={(e) =>
        setPageNo(props.NavBarData.page) +
        setLastFrame(props.NavBarData.lastFrame) +
        setFirstFrame(props.NavBarData.firstFrame) +
        console.log(
          '%cOnClick EventHandler',
          'color: blue; font-size: 16px',
          props.NavBarData.name
        ) +
        console.log('setLocalStorage CurrentPage ===>', props.NavBarData.page) +
        console.log(
          'setLocalStorage FirstFrame ===>',
          props.NavBarData.firstFrame
        ) +
        console.log(
          'setLocalStorage LastFrame ===>',
          props.NavBarData.lastFrame
        )
      }
    >
      {props.NavBarData.name}
    </NavLink>
  );
};

export default NavWrapper;

// 🔥🔥🔥 Logo Lottie Behavior 🔥🔥🔥

// const handleClick = (props, e) => {
//   // console.log('inside eventhandler ===>', props);
//   setSpeed(landingAnimationData.speed),
//     setOnHover(landingAnimationData.onHover),
//     setOnClick(landingAnimationData.onClick);
// };
