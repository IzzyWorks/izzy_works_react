import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { PageCountContext } from '../context/PageCountContext';

// props from NavBarData from NavBar.js;

const NavWrapper = (props) => {
  // console.log('NavWrapper Rendering ==>', props);
  const { setPageNo, setNextFrame } = useContext(PageCountContext);
  return (
    <NavLink
      key={props.NavBarData.key}
      to={props.NavBarData.path}
      activeClassName='active'
      onClick={(e) =>
        // console.log('eventHandler Rendering ==>', props) +
        setPageNo(props.NavBarData.page) +
        setNextFrame(props.NavBarData.endFrame)
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
