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
  const [nextFrame, setNextFrame] = useLocalStorage('nextFrame', 1);
  const [pageNo, setPageNo] = useLocalStorage('pageNo', 0);

  const currentPage = window.localStorage.getItem('pageNo');
  const nextLottieFrame = window.localStorage.getItem('nextFrame');

  console.log('Rendering NavBar', props);

  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <div className='navbar__logo-wrapper'>
          <Logo
            animation={lottieLogo} //shapes JSON data
            animationData={{
              segments: [1, nextLottieFrame],
              direction: 1,
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
                <PageCountContext.Provider value={{ setPageNo, setNextFrame }}>
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
