import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { PageCountContext } from '../context/PageCountContext';

//props from ====>
//NavBarData from NavBar.js;

const NavWrapper = (props) => {
  const { pageNo, setPageNo, setPreviosFrame, setNextFrame } =
    useContext(PageCountContext);

  // console.log('rendering NevWrapper', pageNo);
  return (
    <NavLink
      key={props.NavBarData.key}
      to={props.NavBarData.path}
      activeClassName='active'
      value={pageNo}
      onClick={(e) =>
        setPageNo(props.NavBarData.page) +
        setPreviosFrame(props.NavBarData.endFrame) +
        setNextFrame(props.NavBarData.startFrame)
      }
    >
      {props.NavBarData.name}
    </NavLink>
  );
};

export default NavWrapper;

// 🔥🔥🔥 Logo Lottie Behavior 🔥🔥🔥
