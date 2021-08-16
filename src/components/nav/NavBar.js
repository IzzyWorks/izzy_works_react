import React from 'react';

function NavBar(props) {
  return (
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
  );
}

export default NavBar;
