import React, { useState, useEffect, useContext } from 'react';
import NavButton from './NavButton';
// import useLocalStorage from '../hooks/useLocalStorage';
import { useLocation } from '../context/CurrentContext';
import uiDATA from '../data/uiData';

// navDATA from uiData

const NavMenu = () => {
  //   //hooks
  // const [lottieObj, setLottieObj] = useLocalStorage('lottieData', {
  //   pageNo: 0,
  //   playDirection: 'down',
  //   lastFrame: 1,
  //   firstFrame: 1,
  // });

  //   const [animationObj, setAnimationObj] = useEffect({
  //     animation: { lottieLogo },
  //     segments: [1, 1],
  //     direction: 1,
  //     speed: 1,
  //     play: true,
  //     loop: false,
  //   });

  // const updateLocalStorage = (newLottieObj) => {
  //   setLottieObj(newLottieObj);
  // };

  const uiContext = useLocation();

  const navButtons = uiDATA.map((navButtons) => {
    return (
      <li key={navButtons.id} className='navbar__links'>
        <h3 className={'black'}>
          <NavButton
            buttonObj={navButtons}
            // lottieObj={lottieObj}
            // passObj={updateLocalStorage}
          />
        </h3>
      </li>
    );
  });

  return <ul className='navbar__list'>{navButtons}</ul>;
};

export default NavMenu;

//         <ul className='navbar__list'>
//           {props.NavBarData.map((NavBarData) => (
//             <li key={NavBarData.key} className='navbar__links'>
//               <h3 className={'black'}>

//               </h3>
//             </li>
//           ))}
//         </ul>

// import React, { useState } from 'react';
// import useLocalStorage from '../hooks/useLocalStorage'; // key value pair

// //components
// import Logo from './DynamicLogo';
// import NavClickWrapper from './NavClickWrapper';
// import logoAnimation from '../data/lottie/logo.json';
// import NavButton from './NavButton';
// import uiComponents from '../data/uiData';

// //props comes from index.js NavBarData;

// function NavMenu() {
//   return (
//     <nav className='navbar__wrapper'>
//       {/* <div className='navbar__left-container'>
//         <div className='navbar__logo-wrapper'>
//           <Logo
//             animation={logoAnimation} //shapes JSON data
//             animationData={{
//               segments: [
//                 parseInt(lottieObj.firstFrame),
//                 parseInt(lottieObj.lastFrame),
//               ],
//               direction: lottieObj.playDirection,
//               speed: 1,
//               play: true,
//               loop: false,
//             }}
//           />
//           <h3 className='logo-name'>izzy</h3>
//         </div>
//       </div> */}
//       <div className='navbar__right-container'>
//         <ul className='navbar__list'>
//           {props.NavBarData.map((NavBarData) => (
//             <li key={NavBarData.key} className='navbar__links'>
//               <h3 className={'black'}>
//                 <NavButton
//                   NavBarData={NavBarData}
//                   lottieObj={lottieObj}
//                   passObj={updateLocalStorage}
//                 />
//               </h3>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavMenu;

//   //hooks
//   const [lottieObj, setLottieObj] = useLocalStorage('lottieData', {
//     pageNo: 0,
//     playDirection: 1,
//     firstFrame: 1,
//     lastFrame: 1,
//   });

//    let newAnimationObj = {
//      loop: false,
//      speed: 0.5,
//      play: true,
//      animationData: logoAnimation,
//      direction: logoAnimation.playDirection,
//      segments: [logoAnimation.firstFrame, logoAnimation.lastFrame],
//    };

//   // console.log('%cRendering NavBar ===>', 'color: orange; font-size: 16px');
//   // console.log('%c----------------------', 'color: orange; font-size: 16px');

//   const updateLocalStorage = (newLottieObj) => {
//     setLottieObj(newLottieObj);
//   };
