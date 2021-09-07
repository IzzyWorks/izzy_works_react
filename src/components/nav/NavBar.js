import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
// import uuid from 'react-uuid';

//components
import Logo from '../Logo';

//data
import lottieLogo from '../data/logo.json';

function NavBar(props) {
  // console.log('Data into NavBar ===>', props);
  const [frames, setFrames] = useState([0, 1]);
  const [speed, setSpeed] = useState([0]);
  const [previousPage, setPreviousPage] = useState([0]);
  const [currentPage, setCurrentPage] = useState([0]);
  const [direction, setDirection] = useState(1);
  const [fontColor, setFontColor] = useState('black');

  const handleClick = (props, e) => {
    // console.log('inside eventhandler ===>', props);
    setCurrentPage(props.navItem.page),
      setSpeed(props.navItem.speed),
      setDirection(currentPage > previousPage ? 1 : -1),
      setPreviousPage(previousPage == currentPage),
      setFontColor(props.navItem.fontColor),
      setFrames(
        direction == 1
          ? props.navItem.frameForward
          : props.navItem.frameBackward
      );
  };

  const HashNavWrapper = (props) => {
    // console.log('HashNavWraper props ==>', props);
    return (
      <HashLink
        data-navobj={props.navItem}
        data-title={props.navItem.title}
        onClick={(e) => {
          handleClick(props, e);
        }}
        scroll={(el) => el.scrollIntoView({ behavior: props.navItem.effect })}
        to={'/home#' + props.navItem.title}
      >
        {props.navItem.title}
      </HashLink>
    );
  };
  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <div className='navbar__logo-wrapper'>
          <Logo
            animation={lottieLogo} //shapes JSON data
            animationData={{
              segments: [frames[0], frames[1]],
              direction: direction,
              speed: speed[0],
              play: true,
              loop: false,
            }}
          />
          <h3 className='logo-name'>izzy</h3>
        </div>
      </div>
      <div className='navbar__right-container'>
        <ul className='navbar__list'>
          {/* {console.log('props ==> navbar list', props.navBarData)} */}
          {props.navBarData
            // .filter(
            //   (navBarData) =>
            //     navBarData.desktop == props.hamburgerSwitch.hamburger ||
            //     !props.hamburgerSwitch.hamburger
            // )
            .map((navBarData) => (
              <li key={navBarData.key} className='navbar__links'>
                <h3 className={'black'}>
                  <HashNavWrapper navItem={navBarData} />
                </h3>
              </li>
            ))}
        </ul>
        {/* <button onClick={props.hamburgerSwitch.handleClickEvent}>
          {props.hamburgerSwitch.label}
        </button> */}
      </div>
    </nav>
  );
}

export default NavBar;
