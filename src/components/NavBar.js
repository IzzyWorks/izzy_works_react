import React from 'react';
import { HashLink } from 'react-router-hash-link';
import uuid from 'react-uuid';

//components
import Logo from './Logo';

//data
import lottieLogo from './data/logo.json';

function NavBar(props) {
  // const [pageIndex, setPage] = useState(0);
  // const [lastPage, setLastPage] = useState(true);
  // const [fontColor, setColor] = useState('black');
  // const [pageDirection, setDirection] = useState('down');

  const handleClick = (e) => {
    // setPage((pageIndex = props.navItem.page));
    // setColor((fontColor = props.NavItem.fontColor));
    // pageDirection((pageDirection = 'down' ? setDirection = 'down' : 'up'));
  };

  const HashNavWrapper = (props) => {
    // console.log('HashNavWraper props ==>', props);
    return (
      <HashLink
        data-title={props.navItem.title}
        onClick={handleClick}
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
          {console.log('props ==> navbar list', props.navBarData)}
          {props.navBarData
            .filter(
              (navBarData) =>
                navBarData.desktop == props.hamburgerSwitch.hamburger ||
                !props.hamburgerSwitch.hamburger
            )
            .map((navBarData) => (
              <li key={uuid()} className='navbar__links'>
                <h3 className={'black'}>
                  <HashNavWrapper navItem={navBarData} />
                  {/* {navBarData.effect == 'smooth' ? (
                    <HashNavWrapper navItem={navBarData} />
                  ) : null} */}
                </h3>
              </li>
            ))}
        </ul>
        <button onClick={props.hamburgerSwitch.handleClickEvent}>
          {props.hamburgerSwitch.label}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
