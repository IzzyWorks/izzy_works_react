import React from 'react';

function NavBar(props) {
  return (
    <div>
      <ul>
        {props.navBar
          .filter((navBar) => navBar.desktop == false)
          .map((navBar) => (
            <li key={navBar.id}>
              <h3 className={navBar.text}>{navBar.title}</h3>
            </li>
          ))}
      </ul>
      <button onClick={props.buttonData.handleClickInTheNav}>
        {props.buttonData.label}
      </button>
    </div>
  );
}

export default NavBar;
