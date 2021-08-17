import React from 'react';

function NavBar(props) {
  return (
    <div className='navbar--wrapper'>
      <div className='left-container'>
        <div className='logo-name'>Logo</div>
      </div>
      <div className='right-container'>
        <ul>
          {console.log(props.buttonData)}
          {props.navBar
            .filter(
              (navBar) =>
                navBar.desktop == props.buttonData.hamburger ||
                !props.buttonData.hamburger
            )
            .map((navBar) => (
              <li key={navBar.id}>
                <h3 className={navBar.text}>{navBar.title}</h3>
              </li>
            ))}
        </ul>
        <button onClick={props.buttonData.handleClickEvent}>
          {props.buttonData.label}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
