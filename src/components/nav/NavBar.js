import React from 'react';

function NavBar(props) {
  return (
    <div>
      <ul>
        {console.log(props.navBar)}
        {props.navBar
          // .filter((desktop) => (props.navBar.desktop == false) !== props.navBar)
          .map((navBar) => (
            <li key={navBar.id}>
              <h3 className={navBar.text}>{navBar.title}</h3>
            </li>
          ))}
      </ul>
      <button onClick={props.buttonData.handleClickInThechild}>
        {props.buttonData.label}
      </button>
    </div>
  );
}

export default NavBar;
