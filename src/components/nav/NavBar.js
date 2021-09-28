import React from 'react';
import { PageCountContext } from '../context/PageCountContext';
import useLocalStorage from '../hooks/useLocalStorage'; // key value pair

//components
import Logo from './Logo';
import NavWrapper from './NavWrapper';

//data
import lottieLogo from '../data/logo.json';

//props comes from index.js NavBarData;

function NavBar(props) {
  //hooks
  const [pageNo, setPageNo] = useLocalStorage('pageNo', 0);
  const [lastFrame, setLastFrame] = useLocalStorage('lastFrame', 1);
  const [firstFrame, setFirstFrame] = useLocalStorage('firstFrame', 1);
  //access LocalStorage
  const currentPage = window.localStorage.getItem('pageNo');
  // const firstLottieFrame = props.NavBarData.firstFrame;
  const firstLottieFrame = parseInt(window.localStorage.getItem('firstFrame'));
  const lastLottieFrame = parseInt(window.localStorage.getItem('lastFrame'));

  console.log('%cRendering NavBar ===>', 'color: green; font-size: 16px');
  console.log('read localStorage Current Page ===>', currentPage);
  console.log('read localStorage first frame  ===>', firstLottieFrame);
  console.log('read localStorage last frame ===>', lastLottieFrame);

  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <div className='navbar__logo-wrapper'>
          <Logo
            animation={lottieLogo} //shapes JSON data
            animationData={{
              segments: [firstLottieFrame, lastLottieFrame],
              // segments: [firstLottieFrame, lastLottieFrame],
              direction: lastLottieFrame === firstLottieFrame ? -1 : 1,
              // direction: 1,
              speed: 1,
              play: true,
              loop: false,
              // logo not re-rendering on
            }}
          />
          <h3 className='logo-name'>izzy</h3>
        </div>
      </div>
      <div className='navbar__right-container'>
        <ul className='navbar__list'>
          {props.NavBarData.map((NavBarData) => (
            <li key={NavBarData.key} className='navbar__links'>
              <h3 className={'black'}>
                <PageCountContext.Provider
                  value={{ setPageNo, setLastFrame, setFirstFrame }}
                >
                  <NavWrapper NavBarData={NavBarData} />
                </PageCountContext.Provider>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
