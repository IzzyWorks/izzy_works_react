import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import './scss/main.css';

//components
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';

// data
import navData from './components/data/navData';

function App() {
  const [hamburger, setHamburger] = useState(false);
  const [showHide, setShowHide] = useState(true);
  const handleClickEvent = () => {
    console.log('Button click');
    setShowHide(!showHide);
    setHamburger(!hamburger);
  };
  return (
    <div className='App'>
      <NavBar
        navBar={navData}
        buttonData={{
          handleClickEvent,
          label: showHide == true ? 'Hide' : 'Show',
          hamburger,
        }}
      />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route render={() => <Redirect to='/home' />} />
      </Switch>
    </div>
  );
}

export default App;
