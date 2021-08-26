import React from 'react';
import { HashLink } from 'react-router-hash-link';

//components
import Logo from './Logo';

//data
import lottieLogo from './data/logo.json';

function NavBar(props) {
  console.log('navbar ====>', props);
  /*
    {
      navState: {
          frames: [0,10],
          title: "",
          speed : "",
          direction : ""
      }
    }
  */

  const handleClick = (e) => {
    console.log('Click on Has Link ==>', e.target.dataset.title);
    //setState - change the state
  };

  const HashNavWrapper = (props) => {
    console.log('props ==>', props);
    return (
      <HashLink
        data-title={props.dataNav.navBar.title}
        onClick={handleClick}
        scroll={(el) =>
          el.scrollIntoView({ behavior: props.dataNav.navBar.effect })
        }
        to={'/home#section-' + props.dataNav.index}
      >
        {props.dataNav.navBar.title}
      </HashLink>
    );
  };

  return (
    <nav className='navbar__wrapper'>
      <div className='navbar__left-container'>
        <div className='navbar__logo-wrapper'>
          <Logo
            animationData={lottieLogo}
            dataAnimation={
              {
                // newData: navState,
              }
            }
            frameStart={0}
            frameEnd={11}
          />
          <h3 className='logo-name'>izzy</h3>
        </div>
      </div>
      <div className='navbar__right-container'>
        <ul className='navbar__list'>
          {console.log(props.buttonData)}
          {props.navBar
            .filter(
              (navBar) =>
                navBar.desktop == props.buttonData.hamburger ||
                !props.buttonData.hamburger
            )
            .map((navBar, index) => (
              <li key={navBar.id} className='navbar__links'>
                <h3 className={'black'}>
                  {navBar.effect == 'smooth' ? (
                    <HashNavWrapper dataNav={{ navBar, index }} />
                  ) : null}
                  {navBar.effect == 'smooth1' ? (
                    <HashNavWrapper dataNav={{ navBar, index }} />
                  ) : null}
                </h3>
              </li>
            ))}
        </ul>
        <button onClick={props.buttonData.handleClickEvent}>
          {props.buttonData.label}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
