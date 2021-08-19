import React from 'react';

function NavBar(props) {
  return (
    <nav className='navbar--wrapper'>
      <div className='left-container'>
        <div className='logo-name'>Logo</div>
      </div>
      <div className='right-container'>
        <ul className='navbar--list'>
          {console.log(props.buttonData)}
          {props.navBar
            .filter(
              (navBar) =>
                navBar.desktop == props.buttonData.hamburger ||
                !props.buttonData.hamburger
            )
            // if (pageNo => 3) then set className='black' otherwise ='white'
            .map((navBar) => (
              <li key={navBar.id} className='navbar--links'>
                <h3 className={'black'}>{navBar.title}</h3>
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
