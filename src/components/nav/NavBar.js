import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

//components
import Logo from './Logo';
import NavWrapper from './NavWrapper';

//data
import lottieLogo from '../data/logo.json';

function NavBar(props) {
  // 🔥🔥🔥 Logo Lottie Behavior 🔥🔥🔥

  console.log('Props passed into NavBar ===>', props);
  // const [currentFrame, setCurrentFrame] = useState(1);
  // const [previousLastFrame, setPreviousLastFrame] = useState(1);
  // const [frames, setFrames] = useState([1, 1]);
  // const [speed, setSpeed] = useState(0);
  // const [previousPage, setPreviousPage] = useState(0);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [direction, setDirection] = useState(1);
  // const [fontColor, setFontColor] = useState('black');
  // console.log('frame useStates  ===>', currentFrame, previousLastFrame);
  // console.log('page useStates  ===>', currentPage, previousPage);
  // console.log('direction useStates  ===>', direction);
  // console.log('speed useStates  ===>', speed);

  // const handleClick = (props, e) => {
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

  // 🔥🔥🔥 Navbar 🔥🔥🔥

  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <div className='navbar__logo-wrapper'>
          <Logo
            animation={lottieLogo} //shapes JSON data
            animationData={{
              segments: [frames[1], frames[1]],
              direction: 1,
              speed: 1,
              play: true,
              loop: false,
            }}
          />
          <h3 className='logo-name'>izzy</h3>
        </div>
      </div>
      <div className='navbar__right-container'>
        <ul className='navbar__list'>
          {/* {console.log('rendering navbar list', props.navBarData)} */}
          {props.NavBarData
            // .filter(
            //   (navBarData) =>
            //     navBarData.desktop == props.hamburgerSwitch.hamburger ||
            //     !props.hamburgerSwitch.hamburger
            // )
            .map((NavBarData) => (
              <li key={NavBarData.key} className='navbar__links'>
                <h3 className={'black'}>
                  <NavWrapper NavBarData={NavBarData} />
                </h3>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

// 🔥🔥🔥 Hash-Link 🔥🔥🔥

// const NavWrapper = (props) => {
//   console.log('inside HashNavWraper  ===>', props);
//   return (
//     <HashLink
//       data-navobj={props.NavBarData}
//       data-title={props.NavBarData.title}
//       onClick={(e) => {
//         handleClick(props, e);
//       }}
//       scroll={(el) =>
//         el.scrollIntoView({ behavior: props.NavBarData.effect })
//       }
//       to={'/home#' + props.NavBarData.title}
//     >
//       {props.NavBarData.title}
//     </HashLink>
//   );
// };
